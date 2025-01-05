import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { useGlobalStore } from '../store/useGlobalStore'
import { useMemo } from 'react'

const containerStyle = {
  width: '100%',
  height: '500px',
}

const defaultCenter = {
  lat: 9.0054,
  lng: 38.7636, // Addis Ababa
}

export const MapView: React.FC = () => {
  const devices = useGlobalStore((state) => state.devices)
  const positions = useGlobalStore((state) => state.positions)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  })

  const center = useMemo(() => {
    if (positions.length > 0) {
      return {
        lat: positions[0].latitude,
        lng: positions[0].longitude,
      }
    }
    return defaultCenter
  }, [positions])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {devices.map((dev) => {
        const pos = positions.find((pos) => pos.deviceId === dev.id)
        if (!pos) {
          return null
        }

        return (
          <Marker
            key={dev.id}
            position={{
              lat: pos.latitude,
              lng: pos.longitude,
            }}
            title={dev.name}
            label={{
              text: dev.name,
              color: 'white',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          />
        )
      })}
    </GoogleMap>
  )
}
