import { Person } from "@/models";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async (data, thunkApi) => {        
        try{
            const response  = await axios.get<Person[]>("http://localhost:3001/users", { 
                method: 'GET',
                headers: {"Content-type": "application/json; charset=UTF-8"},
         });
            return response.data;

        } catch(err : any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)