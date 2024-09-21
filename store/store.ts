import { configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "./propertiesSlice";

export const store = configureStore({
	reducer: {
		properties: propertiesReducer,
	},
});

// Tipos de los dispatch y state para TypeScript
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
