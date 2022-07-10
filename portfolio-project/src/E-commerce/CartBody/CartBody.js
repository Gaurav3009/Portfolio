import React from 'react'
import TodoApp from "../../Todo/TodoApp";
import {TodoContextProvider} from '../../Todo/TodoContext';
import ReviewSlider from './ReviewSlider';
import PopularSlider from './PopularSlider';
import ProductCategory from './ProductCategory';
function CartBody() {
  return (
    <section>
        <ProductCategory/>
        <TodoContextProvider>
            <TodoApp/>
        </TodoContextProvider>
        <PopularSlider/>
        <ReviewSlider/>
    </section>
  )
}

export default CartBody