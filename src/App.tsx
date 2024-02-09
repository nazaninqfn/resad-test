import { useState } from 'react'
import MaterialTheme from './core/context/materialThemContext/MaterialThemeContext'
import RouteConfig from './core/routes/RouteConfig'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {

  return (
   <MaterialTheme>
     <RouteConfig/>
   </MaterialTheme>
  )
}

export default App
