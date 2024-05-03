import { useState } from "react"

export function AddCategory(props) {

  const [inputValue, setinputValue] = useState('Sakura Card Captor')
  const { onNewCategory} = props


  const oninputChange = (e) => setinputValue(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault()
    if(inputValue.trim().length > 2)
      onNewCategory(inputValue.trim());
      setinputValue('')
  }

  return (
    <form onSubmit={onSubmit}>

      <input 
        type="text" 
        placeholder="Busca Gifts"
        value={inputValue}
        onChange={oninputChange} />
            
    </form>
      
  )
}

