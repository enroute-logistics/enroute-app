import React, { useEffect, JSX } from 'react'
import { Box, Chip, List, ListItemButton, Typography } from '@mui/material'
import { useGlobalStore } from '../../store/useGlobalStore'

export const DevicesSection = (): JSX.Element => {
  const selectedDeviceId = useGlobalStore((state) => state.selectedDeviceId)
  const devices = useGlobalStore((state) => state.devices)
  const loadPositions = useGlobalStore((state) => state.loadPositions)
  const loadDevices = useGlobalStore((state) => state.loadDevices)

  useEffect(() => {
    loadDevices()
    loadPositions()
  }, [])

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', padding: '8px 16px' }}>
      <Typography variant="h6">Vehicles</Typography>
      <List>
        {devices.map((device) => (
          <ListItemButton
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              height: '64px',
            }}
            key={device.id}
            selected={selectedDeviceId === device.id}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Typography variant="body1">{device.name}</Typography>
                <Chip
                  label={device.status}
                  color={device.status === 'online' ? 'success' : 'default'}
                />
              </Box>
              <Typography variant="body2">{device.id}</Typography>
            </Box>
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
}
