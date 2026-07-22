import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import JSX from './App.jsx'
import DB_connect from './DB_connect.jsx'

// import API from './Api.jsx'
// import College from './A.jsx'
// import Biryani from './Components.jsx'
// import Count from './Count.jsx'
// import Forms from './Forms.jsx'
// import Events from './Events.jsx'
// import Light from './light.jsx'








createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <JSX /> */}
    {/* <College/>
    <Biryani/> */}
    {/* <Count/> */}
    {/* <Events/>
    <Forms/>
    <Light/> */}
    {/* <API/> */}
    <DB_connect/>
  </StrictMode>,
)
