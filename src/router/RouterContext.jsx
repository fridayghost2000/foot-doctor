import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const RouterContext = createContext({
  path: '/',
  navigate: () => {},
})

export function RouterProvider({ children }) {
  const [path, setPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  )

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((to) => {
    if (typeof window === 'undefined') return
    if (to.startsWith('http') || to.startsWith('tel:') || to.startsWith('mailto:')) {
      window.location.href = to
      return
    }
    window.history.pushState({}, '', to)
    setPath(to)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter() {
  const context = useContext(RouterContext)
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider')
  }
  return context
}
