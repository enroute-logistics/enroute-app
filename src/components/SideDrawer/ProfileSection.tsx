import React, { JSX } from 'react'
import { Box, Button } from '@mui/material'
import { useGlobalStore } from '../../store/useGlobalStore'
export const ProfileSection = (): JSX.Element => {
  const doLogout = useGlobalStore((state) => state.doLogout)

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '8px 16px',
      }}
    >
      <Button onClick={doLogout} variant="outlined">
        Logout
      </Button>
    </Box>
  )
}
