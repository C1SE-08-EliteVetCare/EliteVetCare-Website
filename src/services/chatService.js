import * as request from "../utils/httpRequest";
import {body} from "@material-tailwind/react/theme/base/typography";

export const getConversations = async (accessToken) => {
    try {
        const response = await request.get("/conversation/conversations", {
            headers: {Authorization: `Bearer ${accessToken}`}
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        return {
            error: error.response.data,
            statusCode: error.response.status,
        };
    }
};

export const getConversationMessage = async (accessToken, conversationId) => {
    try {
        const response = await request.get(`/message/${conversationId}`, {
            headers: {Authorization: `Bearer ${accessToken}`}
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        return {
            error: error.response.data,
            statusCode: error.response.status,
        };
    }
};

export const createMessage = async (accessToken, body) => {
    try {
        const response = await request.post("/message", body, {
            headers: {Authorization: `Bearer ${accessToken}`}
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        return {
            error: error.response.data,
            statusCode: error.response.status,
        };
    }
};