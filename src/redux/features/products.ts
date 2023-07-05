import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: string,
  name: string,
  count: number,
  imageUrl: string,
  comment: string,
}

const initialState: Product[] = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (products, action: PayloadAction<Product>) => {
      products.push(action.payload);
    },
    remove: (products, action: PayloadAction<string>) => {
      return products.filter(product => product.id !== action.payload);
    },
  }
})

export const { actions } = productsSlice;
export default productsSlice.reducer;