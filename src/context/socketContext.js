import {io} from 'socket.io-client'
import {createContext} from "react";

const accessToken = localStorage.getItem('access-token')
const socket = io(process.env.REACT_APP_WEBSOCKET_URL, {
    extraHeaders: {
        Authorization: `Bearer ${accessToken}`
    }
})
const SocketContext = createContext(socket)

export const SocketProvider = ({children}) => {
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketContext