import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name:'collection',
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExist = state.items.find(
                item => item.id === action.payload.id
            )
            if (!alreadyExist) {
                state.items.push(action.payload);
                localStorage.setItem('collection', JSON.stringify(state.items));
            }
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
            localStorage.setItem('collection', JSON.stringify(state.items));
        },
        clearCollection: (state, action) => {
            state.items = [];
            localStorage.removeItem('collection');
        },
        addedToast: () => {
            toast('Added to Collection');
        },
        removeToast: () => {
            toast('Removed from Collection');
        }
    }
})

export const { addCollection, removeCollection, clearCollection, addedToast, removeToast } = collectionSlice.actions;

export default collectionSlice.reducer;