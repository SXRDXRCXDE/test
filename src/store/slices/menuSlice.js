import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        openMenu: (state) => {
            state.isOpen = true;
        },
        closeMenu: (state) => {
            state.isOpen = false;
        },
        toggleMenu: (state) => {
            state.isOpen = !state.isOpen;
        },
        setMenu: (state, action) => {
            state.isOpen = action.payload; // payload должен быть булевым значением
        },
    },
});

export const { openMenu, closeMenu, toggleMenu, setMenu } = menuSlice.actions;
export const selectIsMenuOpen = (state) => state.menu.isOpen;
export default menuSlice.reducer;
