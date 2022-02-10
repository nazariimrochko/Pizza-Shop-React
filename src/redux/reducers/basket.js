const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const basket = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_BASKET': {
            const newItems = {
            ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id], action.payload,],
            }

            const allPizzas = [].concat.apply([], Object.values(newItems))
            const allPrice = allPizzas.reduce((sum, obj) => obj.price + sum , 0)

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: allPrice,
            }
        }
        default:
            return state;
    }

}
export default basket;
