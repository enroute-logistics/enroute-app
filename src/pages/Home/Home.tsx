import React, { JSX, useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { HiLogout, HiChartBar, HiTruck } from 'react-icons/hi'

import { useGlobalStore } from '@/store/useGlobalStore'
import { DeviceList } from '@/components/DeviceList'
import { MapView } from '@/components/MapView'
import classes from './Home.module.less'
import useDeviceType from '@/hooks/useDeviceType'
import { SideDrawer } from '@/components/SideDrawer/SideDrawer'

type Nav = 'vehicles' | 'logout' | 'reports'

export const Home = (): JSX.Element => {
  const doLogout = useGlobalStore((state) => state.doLogout)
  const currentUser = useGlobalStore((state) => state.currentUser)
  const [selectedNav, setSelectedNav] = useState<Nav>('vehicles')
  const { isMobile, isTablet } = useDeviceType()

  if (!currentUser) {
    return <div>Please login first.</div>
  }

  return isMobile || isTablet ? (
    <div className={classes.home}>
      <div className={classes.overlay}>
        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, borderRadius: '0px' }}
          elevation={3}
        >
          {selectedNav === 'vehicles' && <DeviceList />}
          <BottomNavigation
            showLabels
            value={selectedNav}
            onChange={(event, newValue) => setSelectedNav(newValue)}
          >
            <BottomNavigationAction label="Vehicles" icon={<HiTruck />} value={'vehicles' as Nav} />
            <BottomNavigationAction
              label="Reports"
              icon={<HiChartBar />}
              value={'reports' as Nav}
              onClick={() => setSelectedNav('reports')}
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
        <SideDrawer />
      </div>
      <MapView />
    </div>
  )
}
