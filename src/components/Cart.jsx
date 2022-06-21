import React, { useState } from "react";
import '../sass/cart.scss'

const Cart = () => {
    const [cart, setCart] = useState([{},{}])
    return (
        <>
            {cart.length > 0 && <div className="cart">
                <div className='cart-header'>
                    <h3>My Cart <span>({cart.length} item)</span></h3>
                </div>
                <ul>
                    <li>
                        <div className='cart__item'>
                            <img src='../assets/images/fruits.png' className='cart__item-image'></img>
                            <div className='cart__item__product'>
                                <label className='cart__item__product-name'>Product Name</label>
                                <div>
                                    <button className='cart__item__product-decreament'>-</button>
                                    <label className='cart__item__product-count'>1</label>
                                    <button className='cart__item__product-increament'>+</button>
                                    <label className='cart__item__product-price'>x Rs.187</label>
                                </div>
                            </div>
                            <label className='cart__item-totalprice'>Rs.187</label>
                        </div>
                    </li>
                </ul>
                <div className='cart__offer'>
                    <img alt='offer iamge' src='' />
                    <label>You won't find it cheaper anywhere</label>
                </div>
                <div className='cart__footer'>
                    <label className='cart__footer-text'>Promo code can be applied on payment page</label>
                    <div className='cart__footer-checkout'>
                        <label className='cart__footer-checkout-text'>Proceed to Checkout</label>
                        <label className='cart__footer-checkout-price'>Rs.187  &gt; </label>
                    </div>
                </div>
            </div>}
            {cart.length === 0 &&
                <div className='cart__empty'>
                    <div className='cart__empty-text'>
                        <h6>No items in your cart</h6>
                        <label>Your favourite items are just a click away</label>
                    </div>
                    <button className='cart__empty-shopping' type='submit'>Start Shopping</button>
                </div>
            }

        </>
    );
}

export default Cart