import { useSocket } from '@/pages/context/socket'
import {useState} from 'react'



const usePlayer = (myId, roomId, peer) => {
    const socket = useSocket()
    const [players, setPlayers] = useState({})

    return {players, setPlayers}
}

export default usePlayer;