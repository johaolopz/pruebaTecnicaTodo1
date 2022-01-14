//########## Custom Hook ##########
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from "axios";
import { setPokemonList, setPagesForPagination } from "../redux/actions"

export default function useInitialLoad(url, limit='') {
    const dispatch = useDispatch()
    try {
          useEffect(() => {
            axios
              .get(`${url}${limit}`)
              .then(async (res) => {
                dispatch(setPokemonList(await res.data.results))
                dispatch(setPagesForPagination({
                  previous: await res.data.previous,
                  next: await res.data.next
                }))
              })
              .catch((err) => {
                console.log(err)
              });
          }, [url, limit]);
          //VALIDAMOS LA EJECUCIÓN CORRECTA DEL CUSTOM HOOK
          return {
            state : true,
            message : "hook execution is OK"
          }
        }
    catch(error) {
      //EN CASO DE EJECUCIÓN INCORRECTA DEL CUSTOM HOOK
      return {
          state : false,
          message : error
        }
    }
}
