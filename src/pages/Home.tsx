import React, { JSX } from 'react'
import { useGlobalStore } from '../store/useGlobalStore'
import { DeviceList } from '../components/DeviceList'
import { MapView } from '../components/MapView'

export const Home = (): JSX.Element => {
  const doLogout = useGlobalStore((state) => state.doLogout)
  const currentUser = useGlobalStore((state) => state.currentUser)
  const groups = useGlobalStore((state) => state.groups)
  if (!currentUser) {
    return <div>Please login first.</div>
  }

  return (
    <div>
      <h2>Welcome, <strong>{currentUser.name}</strong> {groups?.length > 0 ? `at ${groups[0].name}` : ''}</h2>
      <button onClick={doLogout}>Logout</button>
      <DeviceList />
      <MapView />
    </div>
  )
}
