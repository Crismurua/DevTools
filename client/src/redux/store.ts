import { Person } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { peopleSlice, favouritesSlice } from "./states";


export interface AppStore {
    people: Person[];
    favourites: Person[];
}


const store = configureStore<AppStore>({
    reducer: {
        people: peopleSlice.reducer,
        favourites: favouritesSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;