import { combineReducers } from "redux"; 
import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from "./booksReducer"; 
import createSagaMiddleware from 'redux-saga';
import watchGetBooks from "../../../saga/asyncFindBookList";

const rootReducer = combineReducers({ 
    books: booksReducer 
});

const sageMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sageMiddleware),
  });

sageMiddleware.run(watchGetBooks);

export default store;