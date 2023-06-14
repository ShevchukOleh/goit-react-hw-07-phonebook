import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [{ id: 'id-1', name: 'Oleh', number: '+380971111111' }],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      if (state.contacts.find(el => el.name === action.payload.name)) {
        alert(`${action.payload.name} is already in contacts`);
        return;
      }

      state.contacts.push(action.payload);
    },

    deleteContact(state, action) {
      const index = state.contacts.findIndex(contact => contact.id === action.payload);
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;