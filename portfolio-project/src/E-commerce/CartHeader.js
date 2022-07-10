import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CartBody/styles/CartHeader.css';
function CartHeader() {
  return (
    <section id = "cart-header-wrapper">
        <h1>E-commerce</h1>
        <AddShoppingCartIcon/>
    </section>
  )
}

export default CartHeader