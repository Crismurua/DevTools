import { LocalStorageTypes, Technology } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { getTechnologies } from "@/utils/fetchers";
import { createSlice } from "@reduxjs/toolkit";

const initialState : Technology[] = [];



export const technologiesSlice = createSlice({
    name: 'technologies',
    initialState: getLocalStorage(LocalStorageTypes.TECHNOLOGIES) ? JSON.parse(getLocalStorage(LocalStorageTypes.TECHNOLOGIES) as string) : initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
        .addCase(getTechnologies.fulfilled, (state, action) => {
            setLocalStorage(LocalStorageTypes.TECHNOLOGIES, state)
            return action.payload
        })
    }
})


export default technologiesSlice;