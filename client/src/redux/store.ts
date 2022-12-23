import { Person } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { peopleSlice, favouritesSlice } from "./states";



export interface AppStore {
    people: Person[];
    favourites: Person[];
}

export default configureStore<AppStore>({
    reducer: {
        people: peopleSlice.reducer,
        favourites: favouritesSlice.reducer,
    }
});