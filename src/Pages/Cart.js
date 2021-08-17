import React, {useState, useContext} from "react"
import {Context} from "../Context"
import CartItem from "../Components/CartItem"

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order");
    const totalCost = 49.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-IN", {style: "currency", currency: "INR"})
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const placeOrder = () => {
        setButtonText("Ordering...")
        setTimeout(() => {
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                <button onClick={placeOrder}>{buttonText}</button>
            </div>
        </main>
    )
}

export default Cart