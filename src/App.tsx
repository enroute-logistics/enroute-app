import React, { useEffect, JSX } from 'react'
import { useGlobalStore } from './store/useGlobalStore'
import { Login } from './pages/Login'
import { Home } from './pages/Home/Home'

function App(): JSX.Element {
  const currentUser = useGlobalStore((state) => state.currentUser)
  const loadingUser = useGlobalStore((state) => state.loadingUser)
  const initializeSession = useGlobalStore((state) => state.initializeSession)

  useEffect(() => {
    initializeSession()
  }, [])

  if (loadingUser) {
    return <div>Loading...</div>
  }

  return !currentUser ? <Login /> : <Home />
}

export default App
