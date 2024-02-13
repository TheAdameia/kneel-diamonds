export const OrdersList = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await fetchResponse.json()
    let ordersHTML = ""
   

    let ordersStringArray = orders.map(
        (order) => {
            let orderPrice = order.metal.price + order.style.price + order.size.price
            return `<section>
            <div>Order ID: ${order.id}, Metal ID: ${order.metalId}, Style ID: ${order.styleId}, Size ID: ${order.sizeId} 
            Total cost: ${orderPrice}</div>
            </section>`
        }
    )

    ordersHTML += ordersStringArray.join("")

    return ordersHTML
}