import Card from 'react-bootstrap/Card';
import { Link, useHistory } from 'react-router-dom'
const RecipeCard = (prop) => {
    const history = useHistory()
    const navigate = (id) => {
        console.log(id)
        history.push('/details' + id)
    }

    return (
        <Card className="card_item" >
            <Card.Img className="card_img" variant="top" src="https://myfoodbook.com.au/sites/default/files/styles/card_xw_wp/public/recipe_photo/Mush20152729_0.jpg" />
            <Card.Body className="card_body">
                <Card.Title className="card_title">{prop.title}</Card.Title>
                <Card.Text className="card_text">
                    {prop.description}
                </Card.Text>
                <Link className="card_link" to={`/details/${prop.id}`} > Learn more</Link>
            </Card.Body>
        </Card>

    );
}

export default RecipeCard;