// Minimal WebSocket manager for the Traccar `/api/socket` endpoint.

let socket: WebSocket | null = null

const BASE_URL = import.meta.env.VITE_TRACCAR_BASE_URL
  ? `${import.meta.env.VITE_TRACCAR_BASE_URL}/socket`
  : 'ws://localhost:8082/api/socket'

export function connectSocket(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onMessage: (data: any) => void,
  onError?: (error: Event) => void,
  onClose?: () => void,
): void {
  socket = new WebSocket(BASE_URL)

  socket.onopen = (): void => {}

  socket.onmessage = (event: MessageEvent): void => {
    const message = JSON.parse(event.data)
    onMessage(message)
  }

  socket.onerror = (error: Event): void => {
    if (onError) onError(error)
  }

  socket.onclose = (): void => {
    if (onClose) onClose()
  }
}

export function closeSocket(): void {
  if (socket) {
    socket.close()
    socket = null
  }
}
