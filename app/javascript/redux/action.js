import { RANDOM_GREETING } from "./actionTypes";
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios';

const loadGreeting = createAsyncThunk(
    RANDOM_GREETING,
    async function () {
        const { data } = await axios.get('/api/v1/random_greeting');
        return data;
    }
)

export default loadGreeting;