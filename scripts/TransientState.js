
const transientState = {
    "metalId": 0,
    "sizeId": 0,
    "styleId": 0,
}

export const setMetalChoice = (choiceMade) => {
    transientState.metalId = choiceMade
    console.log(transientState)
}

export const setStyleChoice = (choiceMade) => {
    transientState.styleId = choiceMade
    console.log(transientState)
}

export const setSizeChoice = (choiceMade) => {
    transientState.sizeId = choiceMade
    console.log(transientState)
}

// Function to convert transient state to permanent state

export const saveOrderSubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)


    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
}