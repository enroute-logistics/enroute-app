export default interface Group {
  id: number
  name: string
  groupId: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attributes: Record<string, any>
}
