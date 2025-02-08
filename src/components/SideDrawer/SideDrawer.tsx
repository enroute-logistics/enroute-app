import React, { JSX } from 'react'
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import { HiChartBar, HiTruck, HiUser } from 'react-icons/hi'
import { DevicesSection } from './DevicesSection'
import { ProfileSection } from './ProfileSection'
import { ReportsSection } from './ReportsSection'

export const SideDrawer = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = React.useState<string>('vehicles')
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      PaperProps={{
        sx: {
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
          width: '300px',
          borderRadius: '0px',
        },
      }}
    >
      <List
        sx={{
          width: 'fit-content',
          marginTop: '32px',
        }}
      >
        <ListItem key="vehicles" sx={{ padding: '4px' }}>
          <ListItemButton
            onClick={() => setSelectedTab('vehicles')}
            selected={selectedTab === 'vehicles'}
            sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
          >
            <ListItemIcon
              sx={[
                {
                  minWidth: 0,
                  justifyContent: 'center',
                },
              ]}
            >
              <HiTruck size={24} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem key="reports" sx={{ padding: '4px' }}>
          <ListItemButton
            onClick={() => setSelectedTab('reports')}
            selected={selectedTab === 'reports'}
            sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
          >
            <ListItemIcon
              sx={[
                {
                  minWidth: 0,
                  justifyContent: 'center',
                },
              ]}
            >
              <HiChartBar size={24} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        {/* Bottom profile button */}
        <ListItem
          key="profile"
          sx={{
            marginTop: 'auto',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            padding: '4px',
          }}
        >
          <ListItemButton
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            onClick={() => setSelectedTab('profile')}
            selected={selectedTab === 'profile'}
          >
            <ListItemIcon
              sx={[
                {
                  minWidth: 0,
                  justifyContent: 'center',
                },
              ]}
            >
              <HiUser size={24} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ flexGrow: 1, display: 'flex', height: '100%' }}>
        {selectedTab === 'vehicles' && <DevicesSection />}
        {selectedTab === 'profile' && <ProfileSection />}
        {selectedTab === 'reports' && <ReportsSection />}
      </Box>
    </Drawer>
  )
}
