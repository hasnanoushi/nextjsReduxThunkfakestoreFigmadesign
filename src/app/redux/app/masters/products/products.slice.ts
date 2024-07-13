import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "./products.service";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductsState {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: ProductsState = {
  items: [],
  status: "idle",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await fetchProducts();
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
        }
      )
      .addCase(getProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productsSlice.reducer;
