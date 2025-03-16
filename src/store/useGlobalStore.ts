import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { login, logout, fetchDevices, fetchPositions, getStoredAuthData, signup } from '../api/api'
import { User, Device, Position } from '@/types'
import { RegisterDto } from '@/dtos/auth.dto'

// Define constants for duplicate strings
const USER_EXISTS_ERROR = 'User already exists'

interface GlobalState {
  currentUser: User | null
  loadingUser: boolean
  devices: Device[]
  loadingDevices: boolean
  error: string | null
  positions: Position[]
  loadingPositions: boolean
  selectedDeviceId: number | null
  // actions
  initializeSession: () => Promise<void>
  doLogin: (email: string, password: string) => Promise<void>
  doLogout: () => Promise<void>
  doSignup: (registerData: RegisterDto) => Promise<void>
  loadDevices: () => Promise<void>
  loadPositions: () => Promise<void>
  initSocket: () => void
  closeSocketConnection: () => void
  setSelectedDeviceId: (deviceId: number) => void
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
    selectedDeviceId: null,
    setSelectedDeviceId: (deviceId: number): void => set({ selectedDeviceId: deviceId }),
    initializeSession: async (): Promise<void> => {
      try {
        const session = getStoredAuthData()
        if (session) {
          set({ currentUser: session.user, loadingUser: false, error: null })
          get().loadDevices()
          get().initSocket()
          get().loadPositions()
        } else {
          set({ error: 'Session not found', loadingUser: false })
        }
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        set({ error: errorMessage, loadingUser: false })
      }
    },

    // Log in user
    doLogin: async (email: string, password: string): Promise<void> => {
      try {
        set({ loadingUser: true, error: null })
        const authResponse = await login(email, password)
        set({ currentUser: authResponse.user, loadingUser: false, error: null })
        // Optionally, fetch devices upon login
        get().loadDevices()
        // Optionally, connect to WebSocket
        get().initSocket()
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error'
        set({ error: errorMessage, loadingUser: false })
      }
    },

    // Log out user
    doLogout: async (): Promise<void> => {
      set({ loadingUser: true, error: null })
      try {
        await logout()
        set({ currentUser: null, devices: [], loadingUser: false })
        get().closeSocketConnection()
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error'
        set({ error: errorMessage, loadingUser: false })
      }
    },

    // Sign up user
    doSignup: async (registerData: RegisterDto): Promise<void> => {
      try {
        const authResponse = await signup(registerData)
        set({ currentUser: authResponse.user, loadingUser: false, error: null })
        // Optionally, fetch devices upon login
        get().loadDevices()
        // Optionally, connect to WebSocket
        get().initSocket()
      } catch (err: unknown) {
        if (err instanceof Error && err.message === USER_EXISTS_ERROR) {
          set({ error: USER_EXISTS_ERROR, loadingUser: false })
          throw new Error(USER_EXISTS_ERROR)
        } else {
          const errorMessage = err instanceof Error ? err.message : 'Unknown error'
          set({ error: errorMessage, loadingUser: false })
        }
      }
    },

    // Fetch devices
    loadDevices: async (): Promise<void> => {
      try {
        set({ loadingDevices: true })
        const devices = await fetchDevices()
        set({ devices, loadingDevices: false, selectedDeviceId: devices[0]?.id })
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error'
        set({ error: errorMessage, loadingDevices: false })
      }
    },

    loadPositions: async (): Promise<void> => {
      try {
        set({ loadingPositions: true })
        const positions = await fetchPositions()
        set({ positions, loadingPositions: false })
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error'
        set({ error: errorMessage, loadingPositions: false })
      }
    },

    // Placeholder implementations for socket methods
    initSocket: (): void => {
      // Implementation will be added later
    },

    closeSocketConnection: (): void => {
      // Implementation will be added later
    },
  })),
)
