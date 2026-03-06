import { useEffect } from 'react'
import HomePage from './pages/HomePage'

function normalizePathname(pathname: string) {
  const trimmed = pathname.replace(/\/+$/, '')
  return trimmed === '' ? '/' : trimmed
}

export default function App() {
  useEffect(() => {
    const pathname = normalizePathname(window.location.pathname)

    if (pathname !== '/home') {
      const nextPath = `/home${window.location.hash}`
      window.history.replaceState(window.history.state, '', nextPath)
    }
  }, [])

  return <HomePage />
}
