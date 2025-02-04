import React from 'react'
import { useGlobalStore } from '../store/useGlobalStore'
import { List, ListItemButton, ListItemText, Box } from '@mui/material'

export const DeviceList: React.FC = () => {
  const devices = useGlobalStore((state) => state.devices)
  const loadingDevices = useGlobalStore((state) => state.loadingDevices)
  const error = useGlobalStore((state) => state.error)
  const loadDevices = useGlobalStore((state) => state.loadDevices)
  const loadPositions = useGlobalStore((state) => state.loadPositions)
  const selectedDeviceId = useGlobalStore((state) => state.selectedDeviceId)
  const setSelectedDeviceId = useGlobalStore((state) => state.setSelectedDeviceId)

  React.useEffect(() => {
    loadDevices()
    loadPositions()
  }, [])

  if (loadingDevices) return <div>Loading devices...</div>
  if (error) return <div style={{ color: 'red' }}>{error}</div>

  return devices.length > 0 ? (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        {devices.map((device) => (
          <ListItemButton
            selected={selectedDeviceId === device.id}
            onClick={() => setSelectedDeviceId(device.id)}
          >
            <ListItemText primary={device.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  ) : (
    <div>No devices found</div>
  )
}
