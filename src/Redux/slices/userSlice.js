// src/Redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
uid: null,
email: null,
nombre: "",
apellido: "",
area: "",
cargo: "",
fotoCarnet: "",
esTitularVehiculo: false,
perfilCompleto: false,
loading: false,
error: null,
};

const userSlice = createSlice({
name: "user",
initialState,
reducers: {
    setUser(state, action) {
    return { ...state, ...action.payload };
    },

    updatePerfil(state, action) {
    return { ...state, ...action.payload, perfilCompleto: true };
    },

    clearUser() {
    return initialState;
    },

    setLoading(state, action) {
    state.loading = action.payload;
    },

    setError(state, action) {
    state.error = action.payload;
    },
},
});

export const { setUser, updatePerfil, clearUser, setLoading, setError } =
userSlice.actions;

export default userSlice.reducer;
