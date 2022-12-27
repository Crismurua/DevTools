import { LocalStorageTypes, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { getUsers } from "@/utils/fetchers";
import { createSlice } from "@reduxjs/toolkit";

const initialState : Person[] = [];



export const peopleSlice = createSlice({
    name: 'people',
    initialState: getLocalStorage(LocalStorageTypes.PEOPLE) ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string) : initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
        .addCase(getUsers.fulfilled, (state, action) => {
            setLocalStorage(LocalStorageTypes.PEOPLE, state)
            return action.payload
        })
    }
})


export default peopleSlice;