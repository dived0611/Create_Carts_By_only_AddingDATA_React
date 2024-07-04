import Cart from './Cart'
import './App.css'
import CartData from './CartData'
function App() {
  const CartElements = CartData.map(item  => {
    return <Cart 
      key = {item.key}
      image = {item .image}
      title = {item .title}
      price = {item .price}
      type = {item .type}
       
       />
})

  return (
    <div className='cart-container'>
       {CartElements}
    </div>
  )
}

export default App
