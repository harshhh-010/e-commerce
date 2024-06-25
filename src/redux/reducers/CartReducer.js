import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from '../CartActions';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalValue: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      let updatedItems;
      let newTotalValue;

      if (existingItem) {
        updatedItems = state.items.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        newTotalValue = state.totalValue + action.payload.price;
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
        newTotalValue = state.totalValue + action.payload.price;
      }

      return {
        ...state,
        items: updatedItems,
        totalQuantity: state.totalQuantity + 1,
        totalValue: newTotalValue
      };
    }
    case REMOVE_FROM_CART: {
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (itemToRemove) {
        const updatedItems = state.items.filter(item => item.id !== action.payload);
        const newTotalValue = state.totalValue - (itemToRemove.price * itemToRemove.quantity);

        return {
          ...state,
          items: updatedItems,
          totalQuantity: state.totalQuantity - itemToRemove.quantity,
          totalValue: newTotalValue
        };
      }
      return state;
    }
    case UPDATE_QUANTITY: {
      const { productId, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === productId);
      if (itemToUpdate) {
        const quantityDifference = quantity - itemToUpdate.quantity;
        const updatedItems = state.items.map(item =>
          item.id === productId ? { ...item, quantity } : item
        );
        const newTotalValue = state.totalValue + (quantityDifference * itemToUpdate.price);

        return {
          ...state,
          items: updatedItems,
          totalQuantity: state.totalQuantity + quantityDifference,
          totalValue: newTotalValue
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export default cartReducer;
