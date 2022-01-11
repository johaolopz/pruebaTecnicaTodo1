import { Button } from "@material-ui/core";
import "./styles/global.css"
import { useState } from "react";

export default function Pagination({useInitialLoad, pageControl}) {
    const [number, setNumber] = useState(1)
    function previous() {
        if (pageControl.previous !== null){
            useInitialLoad(pageControl.previous)
            setNumber(number - 1)
        }
    }

    function next() {
        if (pageControl.next !== null){
            useInitialLoad(pageControl.next)
            setNumber(number + 1)
        }
    }

    return (
        <div className="buttonContainer" >
            <Button className="page-button" variant="contained" color="secondary" onClick={()=>previous()}>
            ⏮ Prev
            </Button>
            <p className="number"> {number} </p>
            <Button className="page-button" variant="contained" color="secondary" onClick={()=>next()}>
                Next ⏭
            </Button>
        </div>
    )
}
