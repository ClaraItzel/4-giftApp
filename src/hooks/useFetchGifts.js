import { useEffect, useState } from 'react'
import getGifs from '../helpers/getGifs'


export const useFetchGifts = (category) => {
 const [images, setImagen] = useState([]);
    const [loading, setLoading] = useState(true)

   useEffect(() => {
       getGifs(category)
           .then( imgs => {
               setImagen(imgs);
                setLoading(false);
               
           })
   }, [])

  return{
    images,
    loading
  }
}
