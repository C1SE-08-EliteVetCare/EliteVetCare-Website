import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as chatService from '../../services/chatService'

export const fetchConversationsThunk = createAsyncThunk(
    'conversation/fetch',
    async (accessToken, thunkApi) => {
        return chatService.getConversations(accessToken)
    }
)

export const createConversationsThunk = createAsyncThunk(
    'conversation/create',
    async ({accessToken, ...body}, thunkApi) => {
        return chatService.createConversation(accessToken, body)
    }
)

const conversationSlice = createSlice({
    name: 'conversation',
    initialState: {
        conversations: [],
        loading: false,
    },
    reducers: {
        addConversation: (state, action) => {
            console.log('addConversation')
            state.conversations.unshift(action.payload);
        },
        updateConversation: (state, action) => {
            console.log('Inside updateConversation');
            const conversation = action.payload;
            const index = state.conversations.findIndex(
                (c) => c.id === conversation.id
            );
            state.conversations.splice(index, 1);
            state.conversations.unshift(conversation);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchConversationsThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchConversationsThunk.fulfilled, (state, action) => {
                state.conversations = action.payload.response
                state.loading = false
            })
            .addCase(fetchConversationsThunk.rejected, (state) => {
                state.loading = false
            })
            .addCase(createConversationsThunk.pending, (state, action) => {
                state.loading = true
            })
            .addCase(createConversationsThunk.fulfilled, (state, action) => {
                state.conversations.unshift(action.payload.response);
                state.loading = false
            })
            .addCase(createConversationsThunk.rejected, (state, action) => {
                state.loading = false
            })
    }
})

export const getRecipientFromConversation = (conversation, user) => {
    return user?.id === conversation?.creator.id
        ? conversation?.recipient
        : conversation?.creator;
};

export const {addConversation, updateConversation} = conversationSlice.actions

export default conversationSlice