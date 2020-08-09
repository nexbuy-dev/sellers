import { toast } from "react-toastify";

const initialState = {
  storeError: null,
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPADTE_ERROR":
      toast.error("Error updating profile");
      return {
        ...state,
        storeError: "Error Updating Profile",
      };

    case "UPDATE_SUCCESS":
      toast.success("Profile updated successfully");
      return {
        ...state,
        storeError: null,
      };
    case "PRODUCT_ADDED":
      toast.success("Product added successfully");
      return {
        ...state,
        storeError: null,
      };
    case "PRODUCT_NOT_ADDED":
      toast.error("Error adding product");
      return {
        ...state,
        storeError: "Error adding product",
      };
    case "PRODUCT_DELETED":
      toast.success("Product deleted successfully");
      return {
        ...state,
        storeError: null,
      };
    case "PRODUCT_NOT_DELETED":
      toast.error("Error deleting product");
      return {
        ...state,
        storeError: "Error deleting product",
      };
    default:
      return { storeError: null };
  }
};

export default storeReducer;
