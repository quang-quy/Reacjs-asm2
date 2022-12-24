import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STAFFS } from "../shared/staffs";

const initialState = {
  listStaff: STAFFS,
  keyword: '',
  staffs: [],
  isLoading: false,
  error: null,
  searchedStaff: []
}

export const getStaffs = createAsyncThunk('staff/getStaffs', async(args, {rejectWithValues}) => {
  try {
    const response = await fetch("https://rjs-101x-asignment-04-backend.vercel.app/staffs");
    const data = await response.json();
    return data;
  } catch(error) {
    return rejectWithValues(error.message);
  }
})

export const addStaff = createAsyncThunk('staff/addStaff', async(values) => {
  try {
    const response = await fetch("https://rjs-101x-asignment-04-backend.vercel.app/staffs", {
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json'
        }, 
      body: JSON.stringify(values)}
      );
    const data = await response.json();
    // console.log('ACTION: ', {data})
    return data;
  } catch (error) {
    console.log({error})
    // return rejectWithValues(error.message)
  }
})

export const delStaff = createAsyncThunk('staff/delStaff', async(staffId) => {
  try {
    const response = await fetch(`https://rjs-101x-asignment-04-backend.vercel.app/staffs/${staffId}`, {
      method: 'DELETE'});
    const data = await response.json();
    console.log('ACTION: ', {data})
    return data;
  } catch (error) {
    console.log({error})
    // return rejectWithValues(error.message)
  }
})

export const updateStaff = createAsyncThunk('staff/updateStaff', async(values) => {
  console.log({values})
  try {
    const response = await fetch(`https://rjs-101x-asignment-04-backend.vercel.app/staffs`, {
      method: 'PATCH', 
      headers: {
          'Content-Type': 'application/json'
        }, 
      body: JSON.stringify(values)}
      );
    const data = await response.json();
    console.log({data})

    return data;
  } catch (error) {
    console.log({error})
  }
})

export const staffSlice = createSlice({
  name: "addStaff",
  initialState: initialState,
  reducers: {
    addStaff: (state, action) => {
      state.listStaff = state.listStaff.concat(action.payload);
    },
    searchStaff: (state, action) => {
      state.searchedStaff = state.staffs.filter((staff) => staff.name.toLowerCase().includes(action.payload.toLowerCase()));
    },
  },
  extraReducers(builder) {
    builder.addCase(getStaffs.pending, (state, pending) => {
      state.isLoading = true;
    }).addCase(getStaffs.fulfilled, (state, action) => {
      state.staffs = action.payload;
      state.isLoading = false;
      state.error = null;
    }).addCase(getStaffs.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }).addCase(addStaff.pending, (state, pending) => {
      state.isLoading = true;
    }).addCase(addStaff.fulfilled, (state, action) => {
      state.staffs = action.payload;
      state.isLoading = false;
      state.error = null;
    }).addCase(addStaff.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }).addCase(delStaff.pending, (state, pending) => {
      state.isLoading = true;
    }).addCase(delStaff.fulfilled, (state, action) => {
      state.staffs = action.payload;
      state.isLoading = false;
      state.error = null;
    }).addCase(delStaff.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }).addCase(updateStaff.pending, (state, pending) => {
      state.isLoading = true;
    }).addCase(updateStaff.fulfilled, (state, action) => {
      state.staffs = action.payload;
      state.isLoading = false;
      state.error = null;
    }).addCase(updateStaff.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
  }
});
export const staffAction = staffSlice.actions;
export default staffSlice.reducer;
