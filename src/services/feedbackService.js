import * as request from "../utils/httpRequest";
import {accessToken} from "mapbox-gl";
import {rating} from "@material-tailwind/react";

export const CreateFeedback = async (subject, content,rating) => {
    try {
        const response = await request.post("/feedback/create", { subject, content,rating });
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
export const getFeedBack = async (accessToken) => {
    try {
        const response = await request.get('/feedback/feedbacks', {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (e) {
        return {
            error: e.response.data,
            status: e.response.status,
        };
    }
};

export const getFeedbackById = async (feedbackId, accessToken) => {
    try {
        const response = await request.get(`/feedback/feedbacks/${feedbackId}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        return {
            error: error.response.data,
            status: error.response.status,
        };
    }
};
