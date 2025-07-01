import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import MainLayout from './UI/MainLayout'
import { store } from './store'
import AppRouter from './routers/AppRouter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </StrictMode>,
)
