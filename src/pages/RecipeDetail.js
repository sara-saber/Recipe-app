import { useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "../components/shared/useFetch";
const RecipeDetail = () => {
    const { id } = useParams()
    const { data: recipe, errorMsg: errMessage } = useFetch('http://localhost:3001/Recipe/' + id)
    return (
        <>
            <div className="card1 mb-3">
                <img src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?q=80&w=2092&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid" alt="..." />
                <div className="card1_body">
                    {recipe ?
                        <div className="row" key={recipe.id}>
                            <h5 className="card1-title">{recipe.title}</h5>
                            <div className="col-lg-6 col-md-12 col-6" >
                                <p className="card-text">Recipe Time:{recipe.time}</p>
                            </div>
                            <div className="col-lg-6 col-md-12 col-6" >
                         
                                <p className="card-text">Recipe Service:{recipe.services}</p>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12" >
                                <h5 className="card1-title">Recipe ingredients</h5>
                                <p className="card-text">{recipe.ingredients}</p>
                            </div>
                            <div className="col-lg-6 colo-md-12 col-12">
                                <h5 className="card1-title">Recipe Description</h5>
                                <p className="card-text">{recipe.description}</p>
                            </div>

                        </div>
                        : null}
                </div>
            </div>
           

        </>

    );
}

export default RecipeDetail;