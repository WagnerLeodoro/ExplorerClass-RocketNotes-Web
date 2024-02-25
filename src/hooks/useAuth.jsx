import { useContext } from 'react'
import { AuthContext } from '../store/AuthContext'

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
