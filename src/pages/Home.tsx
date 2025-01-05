import React from 'react'
import { useGlobalStore } from '../store/useGlobalStore'
import { DeviceList } from '../components/DeviceList'
import { MapView } from '../components/MapView'

export const Home: React.FC = () => {
  const doLogout = useGlobalStore((state) => state.doLogout)
  const currentUser = useGlobalStore((state) => state.currentUser)

  if (!currentUser) {
    return <div>Please login first.</div>
  }

  return (
    <div>
      <h2>Welcome, {currentUser.name}</h2>
      <button onClick={doLogout}>Logout</button>
      <DeviceList />
      <MapView />
    </div>
  )
}
