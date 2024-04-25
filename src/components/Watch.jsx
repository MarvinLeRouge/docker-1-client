import { useState, useEffect } from "react"
import {apiTime} from "../api/Api"

function Watch() {
    let [time, setTime] = useState()
    useEffect(() => {
        apiTime().then((data) => {
            let currentTime = new Date(data["current"])
            setTime(currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds())
        })

    })
    return (
        <>
        Heure serveur : {time}
        </>
    )

}

export default Watch
