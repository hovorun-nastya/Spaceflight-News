import { configureStore} from '@reduxjs/toolkit';
import newsReducer from './NewsSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


