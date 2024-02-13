import { MetalOptions } from './MetalOptions.js'
import { OrdersList } from './OrerDisplay.js'
import { OrderButton } from './PlaceOrder.js'
import { SizeOptions } from './SizeOptions.js'
import { StyleOptions } from './StyleOptions.js'

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const orderButtonHTML =  await OrderButton()
    const orderListHTML = await OrdersList()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
        
            ${orderButtonHTML}

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
                ${orderListHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

document.addEventListener("newOrderCreated", render)


render()