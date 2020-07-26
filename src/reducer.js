//data layer logics goes here
export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_CART":
      //add to cart logic
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      //logic for remove from cart

      //cloned the basket
      let newCart = [...state.cart];
      const index = state.cart.findIndex(
        (cartItems) => cartItems.id === action.id
      );
      if (index >= 0) {
        //if item exists , then remove it
        newCart.splice(index, 1);
      } else {
        console.warn("Cant remove product");
      }
      return { ...state, cart: newCart }; //showing newCart
    default:
      return state;
  }
};

export default reducer;
