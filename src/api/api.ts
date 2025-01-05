import axios from 'axios'
import moment from 'moment'
import { User, Device, Position, Group } from '../types'

// Adjust the baseURL to your Traccar server address
// For local dev, maybe: baseURL: 'http://localhost:8082/api'
// Or use 'https://demo.traccar.org/api' for demo
const instance = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
  // `withCredentials: true` to allow session cookies if needed
})

// Example login function using email/password
export async function login(email: string, password: string): Promise<User> {
  // `/api/session` POST - create a new session
  const formData = new FormData()
  formData.append('email', email)
  formData.append('password', password)

  const response = await instance.post(`/session`, {
    email,
    password,
  })

  const generateToken = async (): Promise<void> => {
    let token = ''
    try {
      const expiration = moment().add(6, 'months').toISOString()
      const response = await instance.post('/session/token', {
        expiration,
      })
      if (response.status === 200) {
        token = response.data
      }
    } catch (error) {
      token = ''
    }
  }

  await generateToken()

  return response.data // returns the User object if successful
}

// Example logout function
export async function logout(): Promise<void> {
  // `/api/session` DELETE - close the session
  await instance.delete('/session')
}

export async function getSession(): Promise<User> {
  // `/api/session` GET - get the session
  const response = await instance.get('/session')
  return response.data // returns the User object if successful
}

// Fetch devices
export async function fetchDevices(): Promise<Device[]> {
  // `/api/devices` GET - get all user’s devices
  const response = await instance.get('/devices')
  return response.data // returns array of Device objects
}

// Fetch positions
export async function fetchPositions(): Promise<Position[]> {
  // `/api/positions` GET - get all devices positions
  const response = await instance.get('/positions')
  return response.data // returns array of Position objects
}

// Fetch groups
export async function fetchGroups(): Promise<Group[]> {
  // `/api/groups` GET - get all user’s groups
  const response = await instance.get('/groups')
  return response.data // returns array of Group objects
}

// If you want to use a token approach instead of session cookie,
// add an Authorization header or pass `token=XYZ` to the /session?token
// e.g.: instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default instance
