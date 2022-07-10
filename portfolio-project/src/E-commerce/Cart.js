import React from 'react'
import CartBody from './CartBody/CartBody';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
function Cart() {
  return (
    <section>
        <CartHeader/>
        <CartBody/>
        <CartFooter/>
    </section>
  )
}

export default Cart