export default interface User {
  id: number
  name: string
  email: string
  password: string
  disabled?: boolean
  createdAt: Date
  updatedAt: Date
}
