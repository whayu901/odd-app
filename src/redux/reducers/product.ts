import { ProductState, Action } from "../types";

const initialState: ProductState = {
  wishlist: {
    isLoading: false,
    data: [],
  },
  product: {
    isLoading: false,
    data: [],
  },
  productRecommendation: {
    isLoading: false,
    data: [],
  },
  favourite: {
    isLoading: false,
    error: "",
  },
  Unfavourite: {
    isLoading: false,
    error: "",
  },
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case "GET_PRODUCT_PENDING":
      return {
        ...state,
        product: {
          ...state.product,
          isLoading: true,
          data: initialState.product.data,
        },
      };
    case "GET_PRODUCT_SUCCESS":
      return {
        ...state,
        product: {
          ...state.product,
          isLoading: false,
          data: payload?.data,
        },
      };
    case "GET_PRODUCT_ERROR":
      return {
        ...state,
        product: {
          ...state.product,
          isLoading: false,
          error: payload?.error,
        },
      };
    case "GET_LIKE_PRODUCT_PENDING":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          isLoading: true,
        },
      };
    case "GET_LIKE_PRODUCT_SUCCESS":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          isLoading: false,
        },
      };
    case "GET_LIKE_PRODUCT_ERROR":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          isLoading: false,
          error: payload?.error,
        },
      };
    case "GET_UNLIKE_PRODUCT_PENDING":
      return {
        ...state,
        Unfavourite: {
          ...state.Unfavourite,
          isLoading: true,
        },
      };
    case "GET_UNLIKE_PRODUCT_SUCCESS":
      return {
        ...state,
        Unfavourite: {
          ...state.Unfavourite,
          isLoading: false,
        },
      };
    case "GET_UNLIKE_PRODUCT_ERROR":
      return {
        ...state,
        Unfavourite: {
          ...state.Unfavourite,
          isLoading: false,
          error: payload?.error,
        },
      };
    default:
      return state;
  }
};
