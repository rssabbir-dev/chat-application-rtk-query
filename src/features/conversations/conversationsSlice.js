import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const conversationsSlice = createSlice({
	name: 'conversations',
	initialState: initialState,
	reducers: {},
});

export default conversationsSlice.reducer;
export const {} = conversationsSlice.actions;
