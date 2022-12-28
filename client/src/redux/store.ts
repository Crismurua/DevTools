import { Person, Project } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { peopleSlice, favouritesSlice, projectSlice } from "./states";
import favprojectsSlice from "./states/favprojects";


export interface AppStore {
    people: Person[];
    favourites: Person[];
    projects: Project[];
    favprojects: Project[];
}


const store = configureStore<AppStore>({
    reducer: {
        people: peopleSlice.reducer,
        favourites: favouritesSlice.reducer,
        projects: projectSlice.reducer,
        favprojects: favprojectsSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;