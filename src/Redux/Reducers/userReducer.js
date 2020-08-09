import { toast } from "react-toastify";

const initialState = {
  userError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "WISH_ERROR":
      toast.error("Error adding item to wishlist");
      return {
        ...state,
        userError: "Error adding wish",
      };

    case "WISH_ADDED":
      toast.success("item successfully added to wishlist");
      return {
        ...state,
        userError: null,
      };

    case "WISH_NOT_DELETED_":
      toast.error("Error deleting item to wishlist");
      return {
        ...state,
        userError: "Error deleting wish",
      };

    case "WISH_ADDED":
      toast.success("item successfully deleted from wishlist");
      return {
        ...state,
        userError: null,
      };

    case "CART_ERROR":
      toast.error("Error adding item to cart");
      return {
        ...state,
        userError: "Error adding item to cart",
      };

    case "CART_ADDED":
      toast.success("item added to cart successfully");
      return {
        ...state,
        userError: null,
      };

    case "CART_NOT_DELETED":
      toast.error("Error deleting item from cart");
      return {
        ...state,
        userError: "Error deleting item from cart",
      };

    case "CART_DELETED":
      toast.success("item deleted from cart successfully");
      return {
        ...state,
        userError: null,
      };

    default:
      return state;
  }
};

export default userReducer;
