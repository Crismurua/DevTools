import { LocalStorageTypes, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState : Person[] = [];

const initialStateTest = () => {
    const localStorageData = getLocalStorage(LocalStorageTypes.FAVOURITES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVOURITES) as string)
    : initialState;

    return localStorageData;
}

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: initialStateTest(),
    reducers: {
        addFavourite: (state, action) => {
            setLocalStorage(LocalStorageTypes.FAVOURITES, action.payload);
            return action.payload;
        },
        removeFavourite: (state, action) => {
            const filterState = state.filter((p : Person) => p.id !== action.payload.id)
            setLocalStorage(LocalStorageTypes.FAVOURITES, filterState);
            return filterState;
        }
    }
})

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export default favouritesSlice;