const initialState = {
    cart: []
  }
  
  export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingId = state.cart.find((item) => item.id === action.payload.id);
        if (existingId) {
          const getNonExistingProducts = state.cart.filter((item) => {
            return item.id !== existingId.id;
          });
          return {
            cart: [
              ...getNonExistingProducts,
              { ...existingId, quantity: existingId.quantity + 1 },
            ],
          };
        } else {
          return {
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          };
        }
      case 'ADD_TO_LIKE':
        const existingProduct = state.cart.find((item) => item.id === action.payload.id);
        if (existingProduct) {
          return {
            cart: state.cart.map((item) => {
              if (item.id === action.payload.id) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            }),
          };
        } else {
          return {
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          };
        }
      case 'DELETE_CART': {
        const filteredData = state.cart.filter(
          (item) => item.id !== action.payload
        );
        return {
          cart: [...filteredData],
        };
      }
      case "ADD_QUANTITY": {
        const updatedCart = state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return {
          cart: updatedCart,
        };
      }
      case "DELETE_QUANTITY": {
        const updatedCart = state.cart.map((item) => {
          if (item.id === action.payload && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
  
        if (
          updatedCart.find(
            (item) => item.id === action.payload && item.quantity === 1
          )
        ) {
          alert("Məhsul sayı birden az olmaz.");
        }
  
        return {
          cart: updatedCart,
        };
      }
  
      default:
        return state;
    }
  }