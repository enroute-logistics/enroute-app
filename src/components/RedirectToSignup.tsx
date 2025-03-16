import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const RedirectToSignup: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to signup page immediately when component mounts
    navigate('/signup')
  }, [navigate])

  // This component doesn't render anything as it's just for redirection
  return null
}
