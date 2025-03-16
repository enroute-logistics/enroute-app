import axios, { AxiosError } from 'axios'
import { Device, Position } from '../types'
import { AuthResponseDto, RegisterDto } from '@/dtos/auth.dto'
import { safeLocalStorage } from '@/utils/storage'

// Local storage key for auth data
const AUTH_STORAGE_KEY = 'enroute_auth_data'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3015/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
})

// Function to store auth data in localStorage
export function storeAuthData(authData: AuthResponseDto): void {
  safeLocalStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authData))
}

// Function to retrieve auth data from localStorage
export function getStoredAuthData(): AuthResponseDto | null {
  const storedData = safeLocalStorage.getItem(AUTH_STORAGE_KEY)
  if (!storedData) return null

  try {
    return JSON.parse(storedData) as AuthResponseDto
  } catch (error) {
    // Replace console.error with proper error handling
    return null
  }
}

// Function to clear auth data from localStorage
export function clearAuthData(): void {
  safeLocalStorage.removeItem(AUTH_STORAGE_KEY)
}

// Function to initialize auth from localStorage
export function initializeAuthFromStorage(): boolean {
  const authData = getStoredAuthData()

  if (authData) {
    // Set up axios instance with the stored auth data if needed
    // For example, if you're using token-based auth:
    instance.defaults.headers.common['Authorization'] = `Bearer ${authData.access_token}`
    return true
  }

  return false
}

export async function signup(registerData: RegisterDto): Promise<AuthResponseDto> {
  try {
    const response = await instance.post('/auth/signup', registerData)
    return response.data // returns the User object if successful
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 409) {
      throw new Error('User already exists')
    }
    throw error
  }
}

// Example login function using email/password
export async function login(email: string, password: string): Promise<AuthResponseDto> {
  const formData = new FormData()
  formData.append('email', email)
  formData.append('password', password)

  const response = await instance.post(`/auth/login`, {
    email,
    password,
  })

  // Store the auth response in localStorage
  storeAuthData(response.data)

  return response.data // returns the User object if successful
}

// Example logout function
export async function logout(): Promise<void> {
  // Clear auth data from localStorage
  clearAuthData()
  await instance.delete('/auth/logout')
}

// Fetch devices
export async function fetchDevices(): Promise<Device[]> {
  // const response = await instance.get('/devices')
  return [] // returns array of Device objects
}

// Fetch positions
export async function fetchPositions(): Promise<Position[]> {
  // `/api/positions` GET - get all devices positions
  // const response = await instance.get('/positions')
  // return response.data // returns array of Position objects
  return []
}

export default instance
