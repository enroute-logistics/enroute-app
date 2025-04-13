import React, { useEffect, JSX } from 'react'
import { useGlobalStore } from './store/useGlobalStore'
import { Home } from './pages/Home/Home'
import { LoginSkeleton } from './components/LoginSkeleton'
import { useNavigate } from 'react-router-dom'
import { Toast } from './components/Toast/Toast'

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
    return (
      <>
        <Toast />
        <LoginSkeleton />
      </>
    )
  }

  return (
    <>
      <Toast />
      <Home />
    </>
  )
}

export default App
