const initialProductState = {
    products : [],
    quantity : 0,
    total : 0,
};

const changeTheNumber = (state = initialProductState, action) => {
    switch(action.type) {
        case "ADD_PRODUCT" : return {
            products : state.products.concat(action.item.product),
            quantity : state.quantity + 1,
            total : 0,
        }
        default : return state;
    }
}

export default changeTheNumber;