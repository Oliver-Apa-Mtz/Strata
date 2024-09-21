import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Property {
	id: number;
	image: string;
	type: string;
	price: number;
	title: string;
	info: string;
	zone: string;
	rooms: string;
	bathrooms: string;
}

interface PropertiesState {
	properties: Property[];
}

const initialState: PropertiesState = {
	properties: [],
};

const propertiesSlice = createSlice({
	name: "properties",
	initialState,
	reducers: {
		setProperties(state, action: PayloadAction<Property[]>) {
			state.properties = action.payload;
		},
	},
});

export const { setProperties } = propertiesSlice.actions;
export default propertiesSlice.reducer;
