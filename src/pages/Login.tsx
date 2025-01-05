import React, { JSX, FormEvent } from 'react'
import { useGlobalStore } from '../store/useGlobalStore'

export const Login = (): JSX.Element => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const doLogin = useGlobalStore((state) => state.doLogin)

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    await doLogin(email, password)
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>{' '}
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>{' '}
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
