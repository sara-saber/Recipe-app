import useDelete from "../shared/useDelete"

const RecipeItem = (props) => {

    const { deleteItem } = useDelete()
    const remove = (id) => {
        deleteItem('http://localhost:3001/Recipe/', id).then(props.setChange(true))
    }
    return (
        <tr >
            <th scope="row">{props.item.id}</th>
            <td>{props.item.title}</td>
            <td>{props.item.description}</td>
            <td>{props.item.ingredients}</td>
            <td>{props.item.instructions}</td>
            <td>{props.item.time}</td>
            <td>{props.item.services}</td>
            <td>
                <button type="button" style={{ backgroundColor: '#02474d' }} onClick={() => props.setRecipe(props.item)} data-bs-toggle="modal" data-bs-target="#updateModal" className="btn btn-dark w-100" >Update</button>
            </td>

            <td>
                <button type="button" onClick={() => remove(props.item.id)} style={{ backgroundColor: '#dc3545' }} className="btn btn-dark w-100" >Delete</button>
            </td>
        </tr>

    );
}

export default RecipeItem;