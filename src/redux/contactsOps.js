
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


const API_KEY = import.meta.env.VITE_MOCK_API_KEY;
axios.defaults.baseURL = "https://" + API_KEY + ".mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk("contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", contact);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (idContact, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${idContact}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);