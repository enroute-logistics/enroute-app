import React, { JSX, useState } from 'react'
import { Button } from '@mui/material'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { HiViewList, HiLogout } from 'react-icons/hi'

import { useGlobalStore } from '@/store/useGlobalStore'
import { DeviceList } from '@/components/DeviceList'
import { MapView } from '@/components/MapView'
import classes from './Home.module.less'
import useDeviceType from '@/hooks/useDeviceType'

type Nav = 'devices' | 'logout'

export const Home = (): JSX.Element => {
  const doLogout = useGlobalStore((state) => state.doLogout)
  const currentUser = useGlobalStore((state) => state.currentUser)
  const [selectedNav, setSelectedNav] = useState<Nav>('devices')
  const { isMobile, isTablet } = useDeviceType()

  if (!currentUser) {
    return <div>Please login first.</div>
  }

  return isMobile || isTablet ? (
    <div className={classes.home}>
      <div className={classes.overlay}>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <DeviceList />
          <BottomNavigation
            showLabels
            value={selectedNav}
            onChange={(event, newValue) => setSelectedNav(newValue)}
          >
            <BottomNavigationAction
              label="Devices"
              icon={<HiViewList />}
              value={'devices' as Nav}
            />
            <BottomNavigationAction
              label="Logout"
              icon={<HiLogout />}
              onClick={doLogout}
              value={'logout' as Nav}
            />
          </BottomNavigation>
        </Paper>
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
