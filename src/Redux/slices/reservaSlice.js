// src/Redux/slices/reservaSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lista: [] };


const reservaSlice = createSlice({
name: "reservas",
initialState,
reducers: {
    addReserva: (state, action) => {
    state.lista.push(action.payload);
    },
    setReservas: (state, action) => {
    state.lista = action.payload;
    },
    setLoading: (state, action) => {
    state.loading = action.payload;
    },
    setError: (state, action) => {
    state.error = action.payload;
    },
},
});

export const { addReserva, setReservas, setLoading, setError } =
reservaSlice.actions;

export default reservaSlice.reducer;
