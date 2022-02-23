import React, { useState } from 'react'
import { Container, Fab } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import MapView from 'react-native-maps'
import { PermissionsAndroid } from 'react-native'

function LinesScreen ({ navigation }) {
  const [mapMargin, setMapMargin] = useState(1)
  const onMapReady = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
      .then((granted) => {
        setMapMargin(0)
      })
  }

  return (
    <Container
      style={{
        maxWidth: '100%'
      }} h='100%' w='100%'
    >
      <MapView
        provider='google'
        showsUserLocation
        showsCompass
        zoomControlEnabled
        onMapReady={onMapReady}
        style={{
          width: '100%',
          height: '100%',
          margin: mapMargin
        }}
      />
      <Fab
        onPress={() => navigation.navigate('Modal')}
        size='md'
        position='absolute'
        bottom={100}
        right={5}
        icon={<Icon name='add' size={20} />}
      />
    </Container>
  )
}

export default LinesScreen
