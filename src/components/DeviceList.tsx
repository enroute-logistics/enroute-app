import React, { useEffect } from 'react'
import { useGlobalStore } from '../store/useGlobalStore'
import { List, ListItemButton, ListItemText, Box, ListItem } from '@mui/material'

export const DeviceList: React.FC = () => {
  const devices = useGlobalStore((state) => state.devices)
  const error = useGlobalStore((state) => state.error)
  const loadDevices = useGlobalStore((state) => state.loadDevices)
  const loadPositions = useGlobalStore((state) => state.loadPositions)
  const selectedDeviceId = useGlobalStore((state) => state.selectedDeviceId)
  const setSelectedDeviceId = useGlobalStore((state) => state.setSelectedDeviceId)

  useEffect(() => {
    loadDevices()
    loadPositions()
  }, [])

  if (error)
    return (
      <ListItem>
        <ListItemText primary={error} />
      </ListItem>
    )

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {devices.length > 0 ? (
        <List component="nav">
          {devices.map((device) => (
            <ListItemButton
              selected={selectedDeviceId === device.id}
              onClick={() => setSelectedDeviceId(device.id)}
              key={device.id}
            >
              <ListItemText primary={device.name} />
            </ListItemButton>
          ))}
        </List>
      ) : (
        <ListItem>
          <ListItemText primary="No vehicles found" />
        </ListItem>
      )}
    </Box>
  )
}
