import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useEffect, useContext, useReducer } from 'react'
import { loginWithCredentials } from '../services/Api'

const AuthContext = createContext()

const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  ERROR: 'ERROR'
}

const initalState = {
  token: null,
  user: null,
  error: null,
  loading: false
}

const AuthReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...initalState, token: action.data.token, user: action.data.user
      }
    case actionTypes.ERROR:
      return {
        ...initalState, error: action.data.error
      }
    case actionTypes.LOGOUT:
      return initalState
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initalState)

  useEffect(() => {
    // On check dans le storage si un token est présent pour authentifié l'utilisateur à l'ouverture de l'application
    const loadStoredState = async () => {
      const storedState = await rehydrateAuth()
      if (storedState) {
        dispatch({
          type: actionTypes.LOGIN,
          data: {
            user: storedState.user,
            token: storedState.token
          }
        })
      }
    }
    loadStoredState()
  }, [])

  rehydrateAuth()
    .then(data => {
      if (data) {

      } else {
        const [state, dispatch] = useReducer(AuthReducer, data)
      }
    })

  useEffect(() => {
    const saveData = async () => {
      await persistAuth(state)
    }
    saveData()
  }, [state])

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside a AuthProvider')
  return context
}

const loginUser = async (credentials, dispatch) => {
  try {
    const data = await loginWithCredentials(credentials)
    dispatch({
      type: actionTypes.LOGIN,
      data: { user: data.user, token: data.jwt }
    })
  } catch (error) {
    dispatch({
      type: actionTypes.ERROR,
      data: { error: error.message }
    })
  }
}

// Persiter la connexion
const persistAuth = async (data) => {
  try {
    await AsyncStorage.setItem('AUTH', JSON.stringify(data))
  } catch (error) {
    console.error(error)
  }
}

const rehydrateAuth = async () => {
  try {
    const data = await AsyncStorage.getItem('AUTH')
    return data ? JSON.parse(data) : null
  } catch (error) {
    console.error(error)
  }
}

export {
  useAuth,
  AuthProvider,
  actionTypes,
  loginUser,
  persistAuth
}
