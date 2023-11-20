
import { useQuery } from "react-query";
import RecipeCard from "../components/RecipeCard";
import useDelete from "../components/shared/useDelete";
import useFetch from "../components/shared/useFetch";

const Home = () => {
    const { data: recipes, err: errorMessage } = useFetch('http://localhost:3001/Recipe')
    const { deleteItem } = useDelete()
    const removeItem = (id) => {
        deleteItem('http://localhost:3001/Recipe/', id).then()
    }
    return (
        <div>
            <div className="row mx-0">
                {recipes ?
                    recipes.map((recipe) => (
                        <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                            <RecipeCard key={recipe.id} deleteItem={removeItem} title={recipe.title} description={recipe.description} id={recipe.id} ></RecipeCard>
                        </div>
                    ))
                    : null}
            </div>
        </div>


    );
}

export default Home;

