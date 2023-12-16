import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as chatService from '../../services/chatService'

export const fetchConversationsThunk = createAsyncThunk(
    'conversation/fetch',
    async (accessToken, thunkApi) => {
        console.log(accessToken)
        return chatService.getConversations(accessToken)
    }
)

export const fetchMessagesThunk = createAsyncThunk(
    'message/fetch',
    async ({accessToken, id}, thunkApi) => {
        console.log(accessToken, id)
        return chatService.getConversationMessage(accessToken, id)
    }
)

const conversationSlice = createSlice({
    name: 'conversation',
    initialState: {
        conversations: [],
        messages: [],
        loading: true,
    },
    reducers: {
        addConversation: (state, action) => {
            console.log('addConversation')
            state.conversations = action.payload
        },
        setMessages: (state, action) => {
            state.messages = [action.payload, ...state.messages]
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchConversationsThunk.fulfilled, (state, action) => {
                state.conversations = action.payload.response
            })
            .addCase(fetchMessagesThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchMessagesThunk.fulfilled, (state, action) => {
                console.log(action.payload.response)
                state.messages = action.payload.response
                state.loading = false
            })
            .addCase(fetchMessagesThunk.rejected, (state) => {
                state.loading = false
            })

    }
})

export const {addConversation, setMessages} = conversationSlice.actions

export default conversationSlice