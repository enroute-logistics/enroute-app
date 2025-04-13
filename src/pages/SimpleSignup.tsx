import React, { FormEvent, useState } from 'react'
import {
  Box,
  Button,
  Card,
  Stack,
  TextField,
  Typography,
  CssBaseline,
  IconButton,
  InputAdornment,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import axios from 'axios'

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

export const SimpleSignup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^\+?[\d\s-]{10,}$/
    return phoneRegex.test(phone)
  }

  const validatePassword = (password: string): boolean => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    return passwordRegex.test(password)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = (): boolean => {
    const newErrors = {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
    }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
      isValid = false
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required'
      isValid = false
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number'
      isValid = false
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
      isValid = true
    } else if (!validatePassword(formData.password)) {
      newErrors.password =
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number'
      isValid = true
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/signup`, formData)
      // Handle successful signup (e.g., redirect to login or dashboard)
    } catch (error) {
      // console.error('Signup failed:', error)
      // Handle error (e.g., show error message to user)
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        bgcolor: 'background.default',
      }}
    >
      <CssBaseline />
      <StyledCard>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <Button type="submit" variant="contained" size="large" fullWidth sx={{ mt: 2 }}>
              Sign Up
            </Button>
          </Stack>
        </form>
      </StyledCard>
    </Box>
  )
}
