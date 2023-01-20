import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
     const [categories, setCategories] = useState(['One Punch','goku']);

    const onAddCategory = (newCategory) => {
      categories.push(newCategory);
        //setCategories( [...categories,'valoran']);
    }
    
  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory onNewCategory={onAddCategory}/>
    <ol>
        {categories.map(category=>{
            return <li key={category}>{category}</li>
        })
        }
    </ol>
    </>
  )
}
