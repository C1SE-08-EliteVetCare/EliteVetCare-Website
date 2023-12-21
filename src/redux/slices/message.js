import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as chatService from '../../services/chatService'

export const fetchMessagesThunk = createAsyncThunk(
    'message/fetch',
    ({accessToken, id}, thunkApi) => {
        return chatService.getConversationMessage(accessToken, id)
    }
)

const messageSlice = createSlice({
    name: 'message',
    initialState: {
        messages: [],
        loading: true,
    },
    reducers: {
        setMessages: (state, action) => {
            console.log(action.payload)
            const {id, data} = action.payload
            const index = state.messages.findIndex(item => item.id === id);
            index !== -1 && state.messages[index].data.unshift(data);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMessagesThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchMessagesThunk.fulfilled, (state, action) => {
                const {id} = action.payload.response

                const index = state.messages.findIndex((cm) => cm.id === id)
                const exists = state.messages.find((cm) => cm.id === id)

                if (exists) {
                    console.log('Exists')
                    state.messages[index] = action.payload.response
                } else {
                    state.messages = [...state.messages, action.payload.response]
                }
                state.loading = false
            })
            .addCase(fetchMessagesThunk.rejected, (state) => {
                state.loading = false
            })
    }
})

export const {setMessages} = messageSlice.actions

export default messageSlice