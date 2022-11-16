import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import formsReducer from './FormSlicse';

export const store =  configureStore ({
    reducer:{
        forms:formsReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;