export default interface Organization {
  id: number
  name: string
  code: string
  description: string | null
  createdAt: Date
  updatedAt: Date
}
