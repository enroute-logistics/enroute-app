import React from 'react'
import { Snackbar, Alert, AlertColor } from '@mui/material'
import { useGlobalStore } from '@/store/useGlobalStore'

export const Toast: React.FC = () => {
  const notification = useGlobalStore((state) => state.notification)
  const hideNotification = useGlobalStore((state) => state.hideNotification)
  const clearNotification = useGlobalStore((state) => state.clearNotification)

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return
    }
    hideNotification()
    // Clear notification after animation completes
    window.setTimeout(clearNotification, 300)
  }

  if (!notification) return null

  return (
    <Snackbar
      open={notification.open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        onClose={handleClose}
        severity={notification.type as AlertColor}
        sx={{ width: '100%' }}
      >
        {notification.message}
      </Alert>
    </Snackbar>
  )
}
