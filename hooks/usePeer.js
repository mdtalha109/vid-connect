const { useState, useEffect, useRef } = require("react")

const usePeer = () => {
    const [peer, setPeer] = useState(null)
    const [myId, setMyId] = useState('')
    const isPeerSet = useRef(false)

    useEffect(() => {
        console.log("runnig useEffect")
        if (isPeerSet.current) return;
        console.log("-------------------------------")
        isPeerSet.current = true;
        let myPeer;
        (async function initPeer() {
            console.log("inside initPeer functiin")
            myPeer = new (await import('peerjs')).default()
            setPeer(myPeer)

            myPeer.on('open', (id) => {
                console.log(`your peer id is ${id}`)
                setMyId(id)
            })
        })()
    }, [])

    return {
        peer,
        myId
    }
}

export default usePeer;