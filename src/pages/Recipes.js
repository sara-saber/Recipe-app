import { useEffect, useState } from "react";
import useFetch from "../components/shared/useFetch";
import useUpdat from "../components/shared/useUpdate";
import useFetchData from "../components/shared/useFetchData";
import RecipeItem from "../components/Recipetable/RecipeItem";
import RecipeModal from "../components/Recipetable/RecipeModal"
const Recipes = () => {
    const { data: recipes, setData: setRecipes } = useFetch('http://localhost:3001/Recipe')
    const [change, setChange] = useState(false)
    const { get } = useFetchData()
    const { update } = useUpdat()
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        if (change) {
            setChange(false)
            fetchData()
            //getAll
            console.log(change)
        }
    }, [change])

    const fetchData = async () => {
        const data = await fetch('http://localhost:3001/Recipe').then(res => { return res.json() })
        setRecipes(data)
    }
    /* const getAll = () => {
      const { data, errorMsg, setData } = get('http://localhost:3001/Recipe')
         const data = get('http://localhost:3001/Recipe')
         setRecipes(data)
         console.log(recipes)
 
     }*/

    const updateRecipe = () => {
        update('http://localhost:3001/Recipe/', recipe.id, recipe)
        setRecipe(recipe)
        setChange(true)
    }
    return (
        <>
            <div style={{ position: "relative", padding: '2%' }}>
                <div className="table recipe-table">
                    <table style={{ position: "relative" }} className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Ingredients</th>
                                <th scope="col">instructions</th>
                                <th scope="col">Time</th>
                                <th scope="col">Service</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipes
                                ?
                                recipes.map((item) => (
                                    <RecipeItem key={item.id} setRecipe={setRecipe} item={item} setChange={setChange}></RecipeItem>
                                ))
                                :
                                null
                            }
                        </tbody>
                    </table>

                </div>

            </div >
            <div>
                <RecipeModal recipe={recipe} setRecipe={setRecipe} updateRecipe={updateRecipe}></RecipeModal>
            </div>
        </>
    );
}

export default Recipes;