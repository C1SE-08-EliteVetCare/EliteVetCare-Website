import React, {useContext, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import * as authService from "../../services/authService";
import * as userService from "../../services/userService";
import AuthContext from "../../context/authContext";
import {Spinner} from "@material-tailwind/react";

const LoginSuccess = () => {
    const params = useParams()
    const navigate = useNavigate()
    const {setAuth} = useContext(AuthContext)

    useEffect(() => {
        const fetchAuth = async () => {
            const authentication = await authService.loginGoogleSuccess(params.tokenGoogle)

            if (authentication.statusCode === 200) {
                const accessToken = authentication.response.accessToken;
                const refreshToken = authentication.response.refreshToken;
                const getUser = await userService.getCurrentUser(accessToken)

                const {email, fullName, avatar, role} = getUser.response
                setAuth({accessToken, refreshToken, email, fullName, avatar, role})
                localStorage.setItem('auth', JSON.stringify({accessToken, refreshToken, email, fullName, avatar, role}))
                navigate('/', {state: {toastMessage: 'Đăng nhập thành công'}})
            } else {
                if (authentication.statusCode === 400 && authentication.error.message === 'The account has been locked') {
                    navigate('/login', {state: {type: 'error', toastMessage: 'Tài khoản đã bị khóa'}})
                }
            }
        }
        fetchAuth();
    }, [])

    return (
        <div className="flex justify-center items-center h-screen">
            <div className='flex items-center justify-center'>
                <Spinner className="h-16 w-16 mr-9"/> <span className="text-4xl text-gray-700">Đang đăng nhập...</span>
            </div>
        </div>
    );
};

export default LoginSuccess;