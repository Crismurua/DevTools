import { LocalStorageTypes, Project } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";


const initialState : Project[] = [];

const initialStateTest = () => {
    const localStorageData = getLocalStorage(LocalStorageTypes.FAVPROJECTS)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVPROJECTS) as string)
    : initialState;

    return localStorageData;
}

export const favprojectsSlice = createSlice({
    name: 'favprojects',
    initialState: initialStateTest(),
    reducers: {
        addFavproject: (_state, action) => {
            setLocalStorage(LocalStorageTypes.FAVPROJECTS, action.payload);
            return action.payload;
        },
        removeFavproject: (state, action) => {
            const filterState = state.filter((p : Project) => p.id !== action.payload.id)
            setLocalStorage(LocalStorageTypes.FAVPROJECTS, filterState);
            return filterState;
        }
    }
})

export const { addFavproject, removeFavproject } = favprojectsSlice.actions;

export default favprojectsSlice;