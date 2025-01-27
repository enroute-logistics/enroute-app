import React, { JSX } from 'react'
import { Box, Card, Stack, Skeleton, CssBaseline } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
}))

export const LoginSkeleton = (): JSX.Element => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: (theme) =>
            `radial-gradient(ellipse at 50% 50%, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
        }}
      >
        <Stack
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          justifyContent="center"
          sx={{ width: '100%', p: 3 }}
          textAlign="center"
        >
          <Skeleton variant="text" width={300} height={48} />
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 4, md: 8 }}
            alignItems="center"
            justifyContent="center"
            sx={{ width: '100%' }}
          >
            <Stack spacing={4} sx={{ maxWidth: 450, display: { xs: 'none', md: 'flex' } }}>
              <Skeleton variant="text" width={300} height={48} />
              {[...Array(4)].map((_, index) => (
                <Stack key={index} direction="row" spacing={2} alignItems="flex-start">
                  <Skeleton variant="circular" width={24} height={24} />
                  <Box sx={{ flex: 1 }}>
                    <Skeleton variant="text" width={200} />
                    <Skeleton variant="text" width={300} />
                  </Box>
                </Stack>
              ))}
            </Stack>

            <StyledCard>
              <Skeleton variant="text" width={100} height={48} />
              <Skeleton variant="rectangular" height={56} sx={{ mt: 2 }} />
              <Skeleton variant="rectangular" height={56} sx={{ mt: 2 }} />
              <Skeleton variant="rectangular" height={48} sx={{ mt: 3 }} />
            </StyledCard>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}
