import { LocalStorageTypes, Project } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { getProjects } from "@/utils/fetchers";
import { createSlice } from "@reduxjs/toolkit";

const initialState : Project[] = [];



export const projectSlice = createSlice({
    name: 'projects',
    initialState: getLocalStorage(LocalStorageTypes.PROJECT) ? JSON.parse(getLocalStorage(LocalStorageTypes.PROJECT) as string) : initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
        .addCase(getProjects.fulfilled, (state, action) => {
            setLocalStorage(LocalStorageTypes.PROJECT, state)
            return action.payload
        })
    }
})


export default projectSlice;