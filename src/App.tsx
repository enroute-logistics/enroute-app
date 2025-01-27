import React, { useEffect, JSX } from 'react'
import { useGlobalStore } from './store/useGlobalStore'
import { Login } from './pages/Login'
import { Home } from './pages/Home/Home'
import { LoginSkeleton } from './components/LoginSkeleton'

function App(): JSX.Element {
  const currentUser = useGlobalStore(({ currentUser }) => currentUser)
  const loadingUser = useGlobalStore(({ loadingUser }) => loadingUser)
  const initializeSession = useGlobalStore(({ initializeSession }) => initializeSession)

  useEffect(() => {
    initializeSession()
  }, [])

  if (loadingUser) {
    return <LoginSkeleton />
  }

  return !currentUser ? <Login /> : <Home />
}

export default App
