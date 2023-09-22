import { combineReducers } from "@reduxjs/toolkit";
import pdfSlice from "../slices/pdfSlice";

const rootReducer = combineReducers({
    //pdf
    file:pdfSlice
})

export default rootReducer;