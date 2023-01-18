import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
     const [categories, setCategories] = useState(['One Punch','goku']);

    const onAddCategory = () => {
        setCategories( [...categories,'valoran']);
    }
    
  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory/>
    <button onClick={onAddCategory}>hola</button>
    <ol>
        {categories.map(category=>{
            return <li key={category}>{category}</li>
        })
        }
    </ol>
    </>
  )
}
