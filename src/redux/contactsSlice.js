import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const contactsSlice = createSlice({
 name: "contacts",
 initialState: {
    items: [],
    loading: false,
    error: false,
 },
 extraReducers: builder => {
   builder
    .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
            contact => contact.id !== action.payload.id
        );
    });
},
});

export default contactsSlice.reducer;
export const selectContacts = state => state.contacts.items;

