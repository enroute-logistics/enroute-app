import React, { JSX } from 'react'
import { Button, BottomNavigation, BottomNavigationAction } from '@mui/material'
import { HiViewList, HiLogout } from 'react-icons/hi'

import { useGlobalStore } from '@/store/useGlobalStore'
import { DeviceList } from '@/components/DeviceList'
import { MapView } from '@/components/MapView'
import classes from './Home.module.less'
import useDeviceType from '@/hooks/useDeviceType'

export const Home = (): JSX.Element => {
  const doLogout = useGlobalStore((state) => state.doLogout)
  const currentUser = useGlobalStore((state) => state.currentUser)
  const { isMobile, isTablet } = useDeviceType()

  if (!currentUser) {
    return <div>Please login first.</div>
  }

  return isMobile || isTablet ? (
    <div className={classes.home}>
      <div className={classes.overlay}>
        <DeviceList />
        <BottomNavigation
          showLabels
          value={'home'}
          onChange={() => {}}
          className={classes.mobileBottomNavigation}
        >
          <BottomNavigationAction label="Devices" icon={<HiViewList />} />
          <BottomNavigationAction label="Logout" icon={<HiLogout />} onClick={doLogout} />
        </BottomNavigation>
      </div>
      <MapView />
    </div>
  ) : (
    <div className={classes.home}>
      <div className={classes.overlay}>
        <Button onClick={doLogout} variant="outlined">
          Logout
        </Button>
        <DeviceList />
      </div>
      <MapView />
    </div>
  )
}
