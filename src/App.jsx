import { RouterProvider } from '@/router/RouterContext'
import { Layout } from '@/components/layout/Layout'
import { AppRoutes } from '@/router/AppRoutes'

export function App() {
  return (
    <RouterProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </RouterProvider>
  )
}

export default App
