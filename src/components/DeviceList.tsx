import React from 'react'
import { useGlobalStore } from '../store/useGlobalStore'

export const DeviceList: React.FC = () => {
  const devices = useGlobalStore((state) => state.devices)
  const loadingDevices = useGlobalStore((state) => state.loadingDevices)
  const error = useGlobalStore((state) => state.error)
  const loadDevices = useGlobalStore((state) => state.loadDevices)
  const loadPositions = useGlobalStore((state) => state.loadPositions)
  React.useEffect(() => {
    loadDevices()
    loadPositions()
  }, [])

  if (loadingDevices) return <div>Loading devices...</div>
  if (error) return <div style={{ color: 'red' }}>{error}</div>

  return (
    <div>
      <h3>Devices</h3>
      {devices.length > 0 ? (
        <ul>
          {devices.map((dev) => (
            <li key={dev.id}>
              {dev.name} - {dev.status}
            </li>
          ))}
        </ul>
      ) : (
        <div>No devices found</div>
      )}
    </div>
  )
}
