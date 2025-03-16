import React, { useEffect, JSX } from 'react'
import { useGlobalStore } from './store/useGlobalStore'
import { Home } from './pages/Home/Home'
import { LoginSkeleton } from './components/LoginSkeleton'
import { useNavigate } from 'react-router-dom'

function App(): JSX.Element {
  const currentUser = useGlobalStore(({ currentUser }) => currentUser)
  const loadingUser = useGlobalStore(({ loadingUser }) => loadingUser)
  const initializeSession = useGlobalStore(({ initializeSession }) => initializeSession)
  const navigate = useNavigate()
  useEffect(() => {
    initializeSession()
  }, [])

  useEffect(() => {
    if (!currentUser) {
      navigate('/login')
    }
  }, [currentUser, navigate])

  if (loadingUser && !currentUser) {
    return <LoginSkeleton />
  }

  return <Home />
}

export default App
