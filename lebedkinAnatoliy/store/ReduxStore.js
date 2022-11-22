/* eslint-disable prettier/prettier */
import { createSlice, configureStore} from 'redux';

const timeSlice = createSlice({
    name: 'globalTime',
    initialState: {
        hour: 0,
        minute: 0,
    },
    reducers: {
        incrHour: state => {
            state.hour = (state.hour + 1) % 24;
        },
        incrMinute: state => {
            state.minute = (state.hour + 1) % 60;
        },
        skipTime: state => {
            state.hour = (state.hour + 6) % 24;
        },
    },
});

export const { incrHour, incrMinute, skipTime } = timeSlice.actions;

export const globalTime = configureStore({
    reducer: timeSlice.reducer,
});
