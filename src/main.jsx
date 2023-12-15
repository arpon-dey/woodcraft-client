import { ThemeProvider } from '@material-tailwind/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/PublicRoutes.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider>
    <div className='w-11/12 mx-auto'>
      <RouterProvider router={router} />
    </div>
    </ThemeProvider>
  </React.StrictMode>,
)
