interface Payload {
  data?: any;
  error?: any;
  errorCode?: string;
}

interface Params {
  type: string;
  payload?: Payload;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type Dispatch = (params: Params | Function | any) => void;
export type GetState = () => Reducers;

export interface Action {
  type: string;
  payload?: Payload;
}

export interface Reducers {
  enumUser: ProductState;
}

export interface ProductState {
  wishlist: {
    isLoading: boolean;
    data: any[];
  };
  product: {
    isLoading: boolean;
    data: any[];
  };
  productRecommendation: {
    isLoading: boolean;
    data: any[];
  };
  favourite: {
    isLoading: boolean;
    error: string;
  };
  Unfavourite: {
    isLoading: boolean;
    error: string;
  };
}
