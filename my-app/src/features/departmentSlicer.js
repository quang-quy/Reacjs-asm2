import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  departments: [],
  isLoading: false,
  error: null,
}

export const getDepts = createAsyncThunk('dept/getDepts', async(args, {rejectWithValues}) => {
  try {
    const response = await fetch("https://rjs-101x-asignment-04-backend.vercel.app/departments");
    const data = await response.json();
    return data;
  } catch(error) {
    return rejectWithValues(error.message);
  }
})

export const addDept = createAsyncThunk('dept/addDept', async(values) => {
  try {
    const response = await fetch("https://rjs-101x-asignment-04-backend.vercel.app/departments", {
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json'
        }, 
      body: JSON.stringify(values)}
      );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log({error})
  }
})

export const deptSlice = createSlice({
  name: "dept",
  initialState: initialState,
  reducers: {
    addStaff: (state, action) => {
      state.listStaff = state.listStaff.concat(action.payload);
    },
    searchStaff: (state, action) => {
      // state.search = ...
    },
  },
  extraReducers(builder) {
    builder.addCase(getDepts.pending, (state, pending) => {
      state.isLoading = true;
    }).addCase(getDepts.fulfilled, (state, action) => {
      state.departments = action.payload;
      state.isLoading = false;
      state.error = null;
    }).addCase(getDepts.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }).addCase(addDept.pending, (state, pending) => {
      state.isLoading = true;
    }).addCase(addDept.fulfilled, (state, action) => {
      state.departments = action.payload;
      state.isLoading = false;
      state.error = null;
    }).addCase(addDept.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
  }
});
export const deptActions = deptSlice.actions;
export default deptSlice.reducer;
