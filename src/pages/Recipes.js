import { useEffect, useState } from "react";
import useDelete from "../components/shared/useDelete";
import useFetch from "../components/shared/useFetch";
import useUpdat from "../components/shared/useUpdate";
import useFetchData from "../components/shared/useFetchData";
const Recipes = () => {
    const { data: recipes, setData: setRecipes } = useFetch('http://localhost:3001/Recipe')
    const [change, setChange] = useState(false)
    const { get } = useFetchData()
    const { deleteItem } = useDelete()
    const { update } = useUpdat()
    const [recipe, setRecipe] = useState({
        id: '',
        title: '',
        ingredients: '',
        instructions: '',
        description: '',
        time: '',
        services: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setRecipe((recipe) => ({
            ...recipe,
            [name]: value
        }))
    }
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

    const getItem = (id) => {
        const { data: recipeData } = get('http://localhost:3001/Recipe/' + id)
        setRecipe(recipeData)

    }

    const remove = (id) => {
        deleteItem('http://localhost:3001/Recipe/', id).then(setChange(true))
    }

    const updateRecipe = () => {
        update('http://localhost:3001/Recipe/', recipe.id, recipe)
        setRecipe(recipe)
        setChange(true)
    }
    return (
        <div>
            <div style={{ position: "absolute", padding: '5%' }}>
                <div className="recipe-table">
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
                            {recipes ? recipes.map((item) => (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{item.ingredients}</td>
                                    <td>{item.instructions}</td>
                                    <td>{item.time}</td>
                                    <td>{item.services}</td>
                                    <td>
                                        <button type="button" style={{ backgroundColor: '#02474d' }} onClick={() => getItem(item.id)} data-bs-toggle="modal" data-bs-target="#updateModal" className="btn btn-dark w-100" >Update</button>
                                    </td>

                                    <td>
                                        <button type="button" onClick={() => remove(item.id)} style={{ backgroundColor: '#dc3545' }} className="btn btn-dark w-100" >Delete</button>
                                    </td>
                                </tr>)) : null}
                        </tbody>
                    </table>

                </div>

            </div >
            <div>
                {
                    recipe ?
                        <div className="modal fade" id="updateModal" style={{marginTop:"8%"}} tabindex="3">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Update Recipe </h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <fieldset key={recipe.id} >
                                                <div className="row">
                                                    <div className="mb-3 col-12  col-md-6 col-lg-6">
                                                        <label className="form-label">Recipe Title</label>
                                                        <input required placeholder="title" value={recipe.title} name='title' onChange={handleChange} type="text" className=" border-color form-control" aria-label="Sizing example input" />

                                                    </div>
                                                    <div className="mb-3 col-12  col-md-6 col-lg-6">
                                                        <label className="form-label">Recipe Decription</label>
                                                        <input required placeholder="Description" value={recipe.description} name="description" onChange={handleChange} type="text" className="form-control border-color" />
                                                    </div>
                                                    <div className="mb-3 col-12  col-md-6 col-lg-6">
                                                        <label className="form-label">Recipe Instructions</label>
                                                        <input required placeholder="Description" value={recipe.ingredients} name="ingredients" onChange={handleChange} type="text" className="form-control border-color" />
                                                    </div>
                                                    <div className="mb-3 col-12 col-md-6 col-lg-6">
                                                        <label className="form-label">Recipe Ingredients </label>
                                                        <input required placeholder="Ingredients" value={recipe.instructions} name="instructions" onChange={handleChange} className="border-color form-control" />
                                                    </div>
                                                    <div className="mb-3 col-12  col-md-6 col-lg-6">
                                                        <label className="form-label">Services</label>
                                                        <input required value={recipe.services} onChange={handleChange} name="services" type="number" className="border-color form-control" placeholder="services" />

                                                    </div>
                                                    <div className="mb-3 col-12 col-md-6 col-lg-6">
                                                        <label className="form-label">Time</label>
                                                        <input required value={recipe.time} onChange={handleChange} name="time" type="number" className="border-color form-control" placeholder="time" />
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" onClick={updateRecipe} className="btn btn-primary btn1" data-bs-dismiss="modal">Save</button>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#updateModal" className="btn btn-primary btn2">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null
                }
            </div>

        </div>





    );
}

export default Recipes;