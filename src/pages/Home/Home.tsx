import React, { JSX } from 'react'

import { useGlobalStore } from '../../store/useGlobalStore'
import { DeviceList } from '../../components/DeviceList'
import { MapView } from '../../components/MapView'
import classes from './Home.module.less'

export const Home = (): JSX.Element => {
  const doLogout = useGlobalStore((state) => state.doLogout)
  const currentUser = useGlobalStore((state) => state.currentUser)
  const groups = useGlobalStore((state) => state.groups)
  if (!currentUser) {
    return <div>Please login first.</div>
  }

  return (
    <div className={classes.home}>
      <div className={classes.overlay}>
        <button onClick={doLogout}>Logout</button>
        <DeviceList />
      </div>
      <MapView />
    </div>
  )
}
