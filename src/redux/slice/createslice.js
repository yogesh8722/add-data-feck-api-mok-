import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create krne ke liye action 
export const createUser = createAsyncThunk("createuser", async (data, { rejectWithValue }) => {
    const response = await fetch('https://673b0627339a4ce4451a3396.mockapi.io/crud', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })


    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
})

// create end 



// show data /user
export const showUser = createAsyncThunk("showUser", async ({ rejectWithValue }) => {
    const response = await fetch('https://673b0627339a4ce4451a3396.mockapi.io/crud');
    try {
        const result = await response.json();
        // return result;
        console.log(result)
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const userdetails = createSlice({
    name: "userdetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducer: {

        // create reducer
        [createUser.pending]: (state, action) => {
            state.loading = true
        },
        [createUser.fullfilled]: (state, action) => {
            state.loading = false
            state.users.push(action.payload);
        },
        [createUser.rejected]: (state, action) => {
            state.loading = false
            state.users = action.payload;
        },
        // create end


        // show/display ke liye
        [showUser.pending]: (state, action) => {
            state.loading = true
        },
        [showUser.fullfilled]: (state, action) => {
            state.loading = false
            state.users = action.payload;
        },
        [showUser.rejected]: (state, action) => {
            state.loading = false
            state.users = action.payload;
        }
        // show end
    }
});

export default userdetails.reducer