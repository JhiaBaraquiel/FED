import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import HeaderComponent from './Components/HeaderComponent'
import PromoComponent from './Components/PromoComponent'
import FooterComponent from './Components/FooterComponent'
import OrderComponent from './Components/OrderComponent'
 
const App = () => {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <PromoComponent/>
        <FooterComponent/>
        <OrderComponent/>
        
      </Router>
    </div>
  )
}
 
export default App;