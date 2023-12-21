import {io} from 'socket.io-client'
import {createContext} from "react";

const accessToken = localStorage.getItem('access-token')

let socket;
if (accessToken) {
    socket = io(process.env.REACT_APP_SERVER_URL, {
        extraHeaders: {
            Authorization: `Bearer ${accessToken}`
        },
        // withCredentials: true
    })
}

const SocketContext = createContext(socket)

export const SocketProvider = ({children}) => {
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketContext