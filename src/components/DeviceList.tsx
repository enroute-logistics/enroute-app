import React from 'react'
import { useGlobalStore } from '../store/useGlobalStore'

export const DeviceList: React.FC = () => {
  const devices = useGlobalStore((state) => state.devices)
  const positions = useGlobalStore((state) => state.positions)
  const loadingDevices = useGlobalStore((state) => state.loadingDevices)
  const error = useGlobalStore((state) => state.error)
  const loadDevices = useGlobalStore((state) => state.loadDevices)
  const loadPositions = useGlobalStore((state) => state.loadPositions)
  React.useEffect(() => {
    if (!devices.length) {
      loadDevices()
    }
    if (!positions.length) {
      loadPositions()
    }
  }, [devices, loadDevices, positions, loadPositions])

  if (loadingDevices) return <div>Loading devices...</div>
  if (error) return <div style={{ color: 'red' }}>{error}</div>

  return (
    <div>
      <h3>Devices</h3>
      <ul>
        {devices.map((dev) => (
          <li key={dev.id}>
            {dev.name} - {dev.status}
          </li>
        ))}
      </ul>
    </div>
  )
}
