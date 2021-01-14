import { configureStore } from '@reduxjs/toolkit';

import quoteReducer from '../features/quotes/quotesSlice'

export default configureStore({
  reducer: {
    quote: quoteReducer,
  },
});
