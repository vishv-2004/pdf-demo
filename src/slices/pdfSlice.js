import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    file:null,
    currentPage:1,
    image:null,
    loading:false,
}

export const FileSlice = createSlice({
    name:"pdf",
    initialState,
    reducers:{
        setFile(state,value){
            state.file=value.payload;
        },
        setCurrentPage(state,value){
            state.currentPage=value.payload;
        },
        setImage(start,value){
            start.image=value.payload;
        },
        setLoading(state,value){
            state.loading=value.payload;
        }
    }

})

export const {setFile, setCurrentPage, setImage, setLoading} = FileSlice.actions;

export default FileSlice.reducer;