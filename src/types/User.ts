export default interface User {
  id: number
  name: string
  email: string
  phone: string
  readonly: boolean
  administrator: boolean
  map: string
  latitude: number
  longitude: number
  zoom: number
  password: string
  coordinateFormat: string
  disabled: boolean
  expirationTime: string | null
  deviceLimit: number
  userLimit: number
  deviceReadonly: boolean
  limitCommands: boolean
  fixedEmail: boolean
  poiLayer: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attributes: Record<string, any>
}
