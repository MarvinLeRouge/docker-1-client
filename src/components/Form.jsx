import React, { useEffect, useState } from 'react';
import { apiHello } from "../api/Api"
import { Link } from 'react-router-dom';

function Form() {
    const [formData, setFormData] = useState({name: ""});
    const [submitted, setSubmitted] = useState(false)
    const [msg, setMsg] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true)
        console.log("form name", formData.name)
        apiHello(formData.name).then((data) => {
            setMsg(data["msg"])
        })
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };


    function Msg({msg}) {
        if(msg.length) {
            return(
                <p>{msg}</p>
            )
        }
        else {
            return (
                <></>
            )
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} />
                </p>
                <p>
                    <button type="submit">Envoyer</button>
                </p>
                <Msg msg={msg} />
                <Link to="/time">Get server time</Link>
            </form>
        </>
    )

}

export default Form
