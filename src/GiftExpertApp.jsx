import { useState } from 'react'
import {AddCategory, GitGrid} from './components';


function GiftExpertApp() {
  const [categories, setCategories] = useState(['Sailor Moon']);

  const onAddCategory = (newCat) => {

    if(!categories.includes(newCat))
      setCategories([newCat,...categories])
  }

  return (
    <>
    {/* Titulo de mi aplicación */}
        <h1>Hola mundo</h1>

        {/* Input de la apliación */}
        <AddCategory  
          onNewCategory={ onAddCategory }
        />

          {/* Lista de categorias */}


            {/* GIF Item */}
            { categories
                  .map( category => 
                                <GitGrid 
                                  key={category} 
                                  category={category} />)
            }

    </>
  )
}

export default GiftExpertApp