import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  initialItems: [],
  selectedBrands: [],
  selectedModels: [],
  isLoading: false,
};

export const fetchItems = createAsyncThunk("sort/getProducts", async () => {
  const response = await fetch(
    "https://5fc9346b2af77700165ae514.mockapi.io/products"
  );
  const data = await response.json();
  return data;
});

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    sortItems: (state, action) => {
      switch (action.payload) {
        case "old":
          state.items.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          );
          break;
        case "new":
          state.items.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          break;
        case "high":
          state.items.sort((a, b) => Number(b.price) - Number(a.price));
          break;
        case "low":
          state.items.sort((a, b) => Number(a.price) - Number(b.price));
          break;
        default:
          break;
      }
    },
    filterBrand: (state, action) => {
      state.items = state.initialItems.filter((item) => {
        if (action.payload.length === 0) {
          return state.initialItems;
        } else {
          return action.payload.includes(item.brand);
        }
      });
    },
    filterModel: (state, action) => {
      state.items = state.initialItems.filter((item) => {
        if (action.payload.length === 0) {
          return state.initialItems;
        } else {
          return action.payload.includes(item.model);
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.initialItems = action.payload;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { sortItems, filterBrand, filterModel } = sortSlice.actions;

export default sortSlice.reducer;
