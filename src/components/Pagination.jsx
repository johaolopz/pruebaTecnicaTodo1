import React from "react";
import { Button } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"
import { setUrl, setNumber } from "../redux/actions"
import '../styles/pagination.css'

export default function Pagination() {
    const dispatch = useDispatch()
    const pageControl = useSelector(state => state.pageControl)
    const number = useSelector(state => state.number)

    function previous() {
        if (pageControl.previous !== null){
            if (number === 2) dispatch(setUrl('https://pokeapi.co/api/v2/pokemon'))
            else dispatch(setUrl(pageControl.previous))
            dispatch(setNumber(number - 1))
        }
    }

    function next() {
        if (pageControl.next !== null){
            dispatch(setUrl(pageControl.next))
            dispatch(setNumber(number + 1))
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
