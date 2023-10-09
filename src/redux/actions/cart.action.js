export const addToCart = (data) => {
    return {
        type: 'ADD_TO_CART',
        payload: data
    }
}
export const addToLike = (data) => {
    return {
        type: 'ADD_TO_LIKE',
        payload: data
    }
}

export const deleteCart = (id) => {
    return {
        type: 'DELETE_CART',
        payload: id
    }
}

export const deleteQty = (id) => {
    return {
        type: 'DELETE_QUANTITY',
        payload: id
    }
}

export const addQty = (id) => {
    return {
        type: 'ADD_QUANTITY',
        payload: id
    }
}