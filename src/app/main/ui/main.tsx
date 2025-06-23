
import { createRoot } from 'react-dom/client'
import { Providers } from '../../providers'
import { Router } from '../../router'

createRoot(document.getElementById('root')!).render(
  <Providers>
    <Router />
  </Providers>,
)
