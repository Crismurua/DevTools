import { Person, Project, Technology } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { peopleSlice, favouritesSlice, projectSlice } from "./states";
import favprojectsSlice from "./states/favprojects";
import technologiesSlice from "./states/technologies";


export interface AppStore {
    people: Person[];
    favourites: Person[];
    projects: Project[];
    favprojects: Project[];
    technologies: Technology[];
}


const store = configureStore<AppStore>({
    reducer: {
        people: peopleSlice.reducer,
        favourites: favouritesSlice.reducer,
        projects: projectSlice.reducer,
        favprojects: favprojectsSlice.reducer,
        technologies: technologiesSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;