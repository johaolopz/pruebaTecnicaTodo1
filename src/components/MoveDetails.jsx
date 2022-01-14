import { useParams, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MoveDetails() {
    let {name, move} = useParams()
    let { url } = useLocation()

    const [details, setDetails] = useState({
        accuracy : '',
        effects : [],
        power : ''
    })

    useEffect(() => {
        axios
        .get(url)
        .then((res) => setDetails({
                accuracy : res.data.accuracy,
                effects : res.data.effect_entries.map((obj) =>
                    {
                    return {
                            effect : obj.effect,
                            short_effect : obj.short_effect
                            }
                    }),
                power : res.data.power
                })
        )
    },[])
    return (
        <div>
            <h2>{name.toUpperCase()} {move.toUpperCase()} DETAILS</h2>
            <h3>Accuracy:</h3><p>{details.accuracy}</p>
            <h3>Power:</h3><p>{details.power}</p>
            <h3>Effects:</h3>
            <ul>
                {
                details.effects.map((obj)=>(
                    <li key={obj.effect}>{obj.effect}</li>
                ))
                }
            </ul>
            <h3>Short-Effects:</h3>
            <ul>
                {
                details.effects.map((obj)=>(
                    <li key={obj.short_effect}>{obj.short_effect}</li>
                ))
                }
            </ul>
        </div>
    )
}
