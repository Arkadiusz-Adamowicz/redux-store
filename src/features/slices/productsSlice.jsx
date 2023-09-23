import { createSlice } from '@reduxjs/toolkit';
import { storeData } from '../../assets/data/data';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem('filteredData')) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem('singleProduct')) || storeData,
    error: false,
  },

  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          product => product.type === action.payload
        );
        state.filteredProducts = filter;
        state.error = false;
        const savedState = JSON.stringify(filter);
        sessionStorage.setItem('filteredData', savedState);
      } catch (err) {
        return err;
      }
    },

    singleProduct(state, action) {
      try {
        const oneProduct = storeData.filter(
          product => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        const savedState = JSON.stringify(oneProduct);
        sessionStorage.setItem('singleProduct', savedState);
      } catch (err) {
        return err;
      }
    },

    filterByGender(state, action) {
      try {
        const gender = state.filteredProducts.filter(
          product => product.gender === action.payload
        );
        state.error = false;
        state.filteredProducts = gender;
        const oneGenderType = gender.length > 0;
        if (oneGenderType) {
          state.error = false;
          const saveState = JSON.stringify(gender);
          sessionStorage.setItem('filteredData', saveState);
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (err) {
        return err;
      }
    },

    sortByPrice(state) {
      try {
        const price = state.filteredProducts.sort((a, b) =>
          a.price > b.price ? -1 : 1
        );
        if (price.length > 1) {
          const noError = false;
          state.error = noError;
          if (!noError) {
            state.filteredProducts = price;
            const savedState = JSON.stringify(price);
            sessionStorage.setItem('filteredData', savedState);
          }
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (err) {
        return err;
      }
    },

    filterByColor(state, action) {
      try {
        const color = state.filteredProducts.filter(product =>
          product.color.includes(action.payload)
        );
        if (color.length <= 0) {
          state.error = true;
          state.filteredProducts = [];
        } else {
          state.error = false;
          state.filteredProducts = color;
          const savedState = JSON.stringify(color);
          sessionStorage.setItem('filteredData', savedState);
        }
      } catch (err) {
        return err;
      }
    },

    filterBySize(state, action) {
      try {
        const size = state.filteredProducts.filter(product =>
          product.size.includes(action.payload)
        );
        if (size.length <= 0) {
          state.error = true;
          state.filteredProducts = [];
        } else {
          state.error = false;
          state.filteredProducts = size;
          const savedState = JSON.stringify(size);
          sessionStorage.setItem('filteredData', savedState);
        }
      } catch (err) {
        return err;
      }
    },
  },
});

export const {
  filterProducts,
  singleProduct,
  sortByPrice,
  filterByGender,
  filterByColor,
  filterBySize,
} = productsSlice.actions;
export default productsSlice.reducer;
