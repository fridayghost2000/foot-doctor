import { BrowserRouter } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { AppRoutes } from '@/app/routes'
import { ScrollToTop } from '@/components/common/ScrollToTop'

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App
