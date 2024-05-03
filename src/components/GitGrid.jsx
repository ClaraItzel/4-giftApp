
import { useFetchGifts } from '../hooks/useFetchGifts';
import GifItem from './GifItem';

export function GitGrid({category}) {

    const { images, loading } = useFetchGifts(category);

    
  
  return (
    <>

        <h2>{category}</h2>
        {loading && <p>Cargando...</p>}
        <div className='card-grid'>
            {
                images.map( (imagen) => (
                    <GifItem 
                        key={imagen.id}
                        {...imagen}
                    />
                ))
            }
        </div>
    </>
  )
}
