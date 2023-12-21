import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as chatService from '../../services/chatService'
import {useState} from "react";

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
        loading: true,
    },
    reducers: {
        addConversation: (state, action) => {
            console.log('addConversation')
            // state.conversations = action.payload
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
            .addCase(createConversationsThunk.fulfilled, (state, action) => {
                state.conversations.unshift(action.payload.response);
            })
    }
})

export const {addConversation, updateConversation} = conversationSlice.actions

export default conversationSlice