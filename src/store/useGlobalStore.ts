import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { login, logout, fetchDevices, getSession, fetchPositions, fetchGroups } from '../api/api'
import { connectSocket, closeSocket } from '../api/socket'
import { User, Device, Position, Group } from '../types'
interface GlobalState {
  currentUser: User | null
  loadingUser: boolean
  devices: Device[]
  loadingDevices: boolean
  error: string | null
  positions: Position[]
  loadingPositions: boolean
  groups: Group[]
  loadingGroups: boolean
  // actions
  initializeSession: () => Promise<void>
  doLogin: (email: string, password: string) => Promise<void>
  doLogout: () => Promise<void>
  loadDevices: () => Promise<void>
  loadPositions: () => Promise<void>
  loadGroups: () => Promise<void>
  initSocket: () => void
  closeSocketConnection: () => void
}

export const useGlobalStore = create<GlobalState>()(
  devtools((set, get) => ({
    currentUser: null,
    devices: [],
    loadingUser: true,
    loadingDevices: true,
    error: null,
    positions: [],
    loadingPositions: true,
    groups: [],
    loadingGroups: true,

    initializeSession: async (): Promise<void> => {
      try {
        const session = await getSession()
        if (session) {
          set({ currentUser: session, loadingUser: false, error: null })
          get().loadDevices()
          get().initSocket()
          get().loadPositions()
          get().loadGroups()
        } else {
          set({ error: 'Session not found', loadingUser: false })
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        set({ error: error.message, loadingUser: false })
      }
    },

    // Log in user
    doLogin: async (email: string, password: string): Promise<void> => {
      try {
        set({ loadingUser: true, error: null })
        const user = await login(email, password)
        set({ currentUser: user, loadingUser: false, error: null })
        // Optionally, fetch devices upon login
        get().loadDevices()
        get().loadGroups()
        // Optionally, connect to WebSocket
        get().initSocket()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        set({ error: err.message, loadingUser: false })
      }
    },

    // Log out user
    doLogout: async (): Promise<void> => {
      set({ loadingUser: true, error: null })
      try {
        await logout()
        set({ currentUser: null, devices: [], loadingUser: false })
        get().closeSocketConnection()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        set({ error: err.message, loadingUser: false })
      }
    },

    // Fetch devices
    loadDevices: async (): Promise<void> => {
      try {
        set({ loadingDevices: true })
        const devices = await fetchDevices()
        set({ devices, loadingDevices: false })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        set({ error: err.message, loadingDevices: false })
      }
    },

    loadPositions: async (): Promise<void> => {
      try {
        set({ loadingPositions: true })
        const positions = await fetchPositions()
        set({ positions, loadingPositions: false })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        set({ error: err.message, loadingPositions: false })
      }
    },

    loadGroups: async (): Promise<void> => {
      try {
        set({ loadingGroups: true })
        const groups = await fetchGroups()
        set({ groups, loadingGroups: false })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        set({ error: err.message, loadingGroups: false })
      }
    },

    // Initialize WebSocket
    initSocket: (): void => {
      connectSocket((data) => {
        if (data.devices) {
          set({ devices: data.devices })
        }
        if (data.positions) {
          const oldDevices = get().devices
          const updated = oldDevices.map((device) => {
            const newPos = data.positions.find((pos: Position) => pos.deviceId === device.id)
            if (newPos) {
              return {
                ...device,
                positionId: newPos.id,
                lastUpdate: newPos.deviceTime,
              }
            }
            return device
          })
          set({ devices: updated })
        }
      })
    },

    // Close WebSocket
    closeSocketConnection: (): void => {
      closeSocket()
    },
  })),
)
