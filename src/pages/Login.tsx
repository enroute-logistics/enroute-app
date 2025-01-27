import React, { FormEvent, useCallback, JSX } from 'react'
import { Box, Button, Card, Stack, TextField, Typography, CssBaseline } from '@mui/material'
import { styled } from '@mui/material/styles'
import { HiMap, HiLocationMarker, HiClock, HiShieldCheck } from 'react-icons/hi'
import { useGlobalStore } from '../store/useGlobalStore'
import { debounce } from 'lodash'

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

const features = [
  {
    icon: <HiMap size={24} />,
    title: 'Real-time Tracking',
    description: 'Monitor your fleet in real-time with accurate GPS positioning.',
  },
  {
    icon: <HiLocationMarker size={24} />,
    title: 'Location History',
    description: 'Access detailed history of routes and stops for all your vehicles.',
  },
  {
    icon: <HiClock size={24} />,
    title: 'Live Updates',
    description: 'Get instant notifications and updates about your fleet status.',
  },
  {
    icon: <HiShieldCheck size={24} />,
    title: 'Secure Access',
    description: 'Enterprise-grade security to protect your fleet data.',
  },
]

export const Login = (): JSX.Element => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [emailError, setEmailError] = React.useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('')
  const [passwordError, setPasswordError] = React.useState(false)
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('')
  const [hasEditedEmail, setHasEditedEmail] = React.useState(false)
  const [hasEditedPassword, setHasEditedPassword] = React.useState(false)
  const doLogin = useGlobalStore((state) => state.doLogin)

  const validateEmail = (email: string): boolean => {
    if (!hasEditedEmail) return true
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true)
      setEmailErrorMessage('Please enter a valid email address.')
      return false
    }
    setEmailError(false)
    setEmailErrorMessage('')
    return true
  }

  const validatePassword = (password: string): boolean => {
    if (!hasEditedPassword) return true
    if (!password || password.length < 6) {
      setPasswordError(true)
      setPasswordErrorMessage('Password must be at least 6 characters long.')
      return false
    }
    setPasswordError(false)
    setPasswordErrorMessage('')
    return true
  }

  const debouncedValidateEmail = useCallback(
    debounce(() => validateEmail(email), 1000),
    [email],
  )
  const debouncedValidatePassword = useCallback(
    debounce(() => validatePassword(password), 1000),
    [password],
  )

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newEmail = e.target.value
    setEmail(newEmail)
    setHasEditedEmail(true)
    debouncedValidateEmail()
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newPassword = e.target.value
    setPassword(newPassword)
    setHasEditedPassword(true)
    debouncedValidatePassword()
  }

  const validateInputs = (): boolean => {
    // On form submit, we want to validate all fields regardless of edit state
    setHasEditedEmail(true)
    setHasEditedPassword(true)
    return validateEmail(email) && validatePassword(password)
  }

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    if (!validateInputs()) {
      return
    }
    await doLogin(email, password)
  }

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
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            Enroute Fleet Management
          </Typography>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 4, md: 8 }}
            alignItems="center"
            justifyContent="center"
            sx={{ width: '100%' }}
          >
            <Stack spacing={4} sx={{ maxWidth: 450, display: { xs: 'none', md: 'flex' } }}>
              <Typography variant="h4" component="h1" gutterBottom>
                Enroute Fleet Management
              </Typography>
              {features.map((feature, index) => (
                <Stack key={index} direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ color: 'primary.main', pt: 0.5 }}>{feature.icon}</Box>
                  <Box>
                    <Typography variant="subtitle1" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>

            <StyledCard>
              <Typography variant="h4" component="h1" gutterBottom>
                Login
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: '100%' }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={handleEmailChange}
                  error={emailError}
                  helperText={emailErrorMessage}
                  onBlur={() => setHasEditedEmail(true)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={handlePasswordChange}
                  error={passwordError}
                  helperText={passwordErrorMessage}
                  onBlur={() => setHasEditedPassword(true)}
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>
              </Box>
            </StyledCard>

            <Stack spacing={4} sx={{ maxWidth: 450, display: { xs: 'flex', md: 'none' } }}>
              {features.map((feature, index) => (
                <Stack key={index} direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ color: 'primary.main', pt: 0.5 }}>{feature.icon}</Box>
                  <Box>
                    <Typography variant="subtitle1" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}
