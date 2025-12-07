// src/Redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import reservaReducer from "./slices/reservaSlice";

export const store = configureStore({
reducer: {
    user: userReducer,
    reservas: reservaReducer,
},
});
