
import { useEffect, useState } from "react";
import useDelete from "../components/shared/useDelete";
import useFetch from "../components/shared/useFetch";
import useUpdat from "../components/shared/useUpdate";
import useFetchData from "../components/shared/useFetchData";
const Recipes = () => {
    const { data: recipes, err: errorMessage, setData: setRecipes } = useFetch('http://localhost:3001/Recipe')
    const [change, setChange] = useState(false)
    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')
    const [services, setServices] = useState('')
    const recipe = { title, description, ingredients, instructions, time, services }
    const { deleteItem } = useDelete()
    const { get } = useFetchData()
    const { update } = useUpdat()
    useEffect(() => {
        if (change) {
            setChange(false)
            console.log(change)
            getAll()
        }
    }, [change])

    const getAll = async () => {
        //  const { data, msg, setData } = get('http://localhost:3001/Recipe')
        const data = get('http://localhost:3001/Recipe')
        setRecipes(data)
        console.log(recipes)

    }

    const getItem = async (id) => {
        console.log(id)
        const { data: d, errorMsg } = get('http://localhost:3001/Recipe/' + id)
        // setRecipe(d)
        console.log(d)
        recipe = d
        console.log(recipe)
    }

    const remove = (id) => {
        deleteItem('http://localhost:3001/Recipe/', id).then(setChange(true))
    }

    const updateRecipe = () => {
        update('http://localhost:3001/Recipe/', recipe)
    }

    // const { data } = useQuery(['data'], ()=>fetch('http://localhost:3001/Recipe').then(res => res.json()).then(res => recipes = res) )

    // const  { data } = useQuery(['data'], fetchData)
    return (
        <div>
            <div className="recipe-table">
                <table className="table table-striped">
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
                                    {/* <button type="button" style={{ backgroundColor: '#02474d' }} data-bs-toggle="modal" data-bs-target="#updateModal" className="btn btn-dark w-100" >Update</button> */}
                                    <button type="button" style={{ backgroundColor: '#02474d' }} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getItem(item.id)} className="btn btn-dark w-100" >x</button>
                                </td>
                                <td>
                                    <button type="button" onClick={() => remove(item.id)} style={{ backgroundColor: '#dc3545' }} className="btn btn-dark w-100" >Delete</button>
                                </td>
                            </tr>)) : null}
                    </tbody>
                </table>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    {recipe ?
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title">Update Recipe </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <form onSubmit={updateRecipe}>
                                    <fieldset >
                                        <legend className=" label-color">New Recipe Page</legend>
                                        <div className="row">
                                            <div className="mb-3 col-12  col-md-6 col-lg-6">
                                                <label className="form-label">Recipe Title</label>
                                                <input required placeholder="title" value={recipe.title} onChange={e => setTitle(e.target.value)} type="text" className=" border-color form-control" aria-label="Sizing example input" />

                                            </div>
                                            <div className="mb-3 col-12  col-md-6 col-lg-6">
                                                <label className="form-label">Recipe Decription</label>
                                                <input required placeholder="Description" value={recipe.description} onChange={e => setDescription(e.target.value)} type="text" className="form-control border-color" />
                                            </div>
                                            <div className="mb-3 col-12  col-md-6 col-lg-6">
                                                <label className="form-label">Recipe Instructions</label>
                                                <input required placeholder="Description" value={recipe.ingredients} onChange={e => setIngredients(e.target.value)} type="text" className="form-control border-color" />
                                            </div>
                                            <div className="mb-3 col-12 col-md-6 col-lg-6">
                                                <label className="form-label">Recipe Ingredients </label>
                                                <input required placeholder="Ingredients" value={recipe.instructions} onChange={e => setInstructions(e.target.value)} className="border-color form-control" />
                                            </div>
                                            <div className="mb-3 col-12  col-md-6 col-lg-6">
                                                <label className="form-label">Services</label>
                                                <input required value={recipe.services} onChange={e => setServices(e.target.value)} type="number" className="border-color form-control" placeholder="services" />

                                            </div>
                                            <div className="mb-3 col-12 col-md-6 col-lg-6">
                                                <label className="form-label">Time</label>
                                                <input required value={recipe.time} onChange={e => setTime(e.target.value)} type="number" className="border-color form-control" placeholder="time" />
                                            </div>
                                        </div>

                                    </fieldset>
                                </form>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary btn1" >Save</button>
                                <button type="button" className="btn btn-primary btn2">Close</button>
                            </div>

                        </div>

                        : null
                    }
                </div>
            </div>
        </div>


    );
}

export default Recipes;