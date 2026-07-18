import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JSX from './App.jsx'
// import College from './A.jsx'
// import Biryani from './Components.jsx'
import Count from './Count.jsx'
import Forms from './Forms.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JSX />
    {/* <College/>
    <Biryani/> */}
    <Count/>
    <Forms/>
  </StrictMode>,
)
