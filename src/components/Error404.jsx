import React from "react";
import bodyHtmlConfig from "../utils/bodyHtmlConfig"
import bg_MoveDetails from "../img/bg_Error404.png"
import "../styles/global.css"

export default function Error404() {
    //Actualiza el background
    bodyHtmlConfig(bg_MoveDetails)
    return (
        <div className="divError404">
            <h1>ERROR 404</h1>
        </div>
    )
}
