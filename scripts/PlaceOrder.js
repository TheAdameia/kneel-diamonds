import { saveOrderSubmission } from "./TransientState.js"




const handleOrder = (clickEvent) => {
    if (clickEvent.target.id === "placeOrder") {
        saveOrderSubmission()
    }
}


export const OrderButton = () => {

    document.addEventListener("click", handleOrder)


    return `<div><button id='placeOrder'>Place Order</button></div>`
}