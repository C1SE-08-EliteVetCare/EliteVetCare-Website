import React, {useContext, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import * as authService from "../../services/authService";
import * as userService from "../../services/userService";
import AuthContext from "../../context/authContext";
import {Spinner} from "@material-tailwind/react";
import {toast} from "sonner";

const LoginSuccess = () => {
    const params = useParams()
    const navigate = useNavigate()
    const {setAuth} = useContext(AuthContext)

    useEffect(() => {
        (async () => {
            const authentication = await authService.loginGoogleSuccess(params.tokenGoogle)

            if (authentication.statusCode === 200) {
                const accessToken = authentication.response.accessToken;
                const refreshToken = authentication.response.refreshToken;
                const getUser = await userService.getCurrentUser(accessToken)

                const {email, fullName, phone, avatar, role} = getUser.response
                setAuth({email, fullName, phone, avatar, role})
                localStorage.setItem('access-token', accessToken)
                localStorage.setItem('refresh-token', refreshToken)
                localStorage.setItem('auth', JSON.stringify({email, fullName, phone, avatar, role}))

                navigate('/')
                toast.success('Đăng nhập thành công')
            } else {
                if (authentication.statusCode === 400 && authentication.error.message === 'The account has been locked') {
                    navigate('/login')
                    toast.error('Tài khoản đã bị khóa')
                }
            }
        })();
    }, [navigate, params.tokenGoogle, setAuth])

    return (
        <div className="flex justify-center items-center h-screen">
            <div className='flex items-center justify-center'>
                <Spinner className="h-16 w-16 mr-9"/> <span className="text-4xl text-gray-700">Đang đăng nhập...</span>
            </div>
        </div>
    );
};

export default LoginSuccess;