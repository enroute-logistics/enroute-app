import React, { JSX } from 'react'
import { Box, Typography } from '@mui/material'

export const ReportsSection = (): JSX.Element => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', padding: '8px 16px' }}>
      <Typography variant="h6">Reports</Typography>
    </Box>
  )
}
