const RecipeModal = (prop) => {
    const handleChange = (e) => {
        const { name, value } = e.target
        prop.setRecipe((recipe) => ({
            ...recipe,
            [name]: value
        }))
    }

    return (
        <div className="modal fade" id="updateModal"  >
            {
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Update Recipe </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <fieldset key={prop.recipe?.id} >
                                    <div className="row">
                                        <div className="mb-3 col-12  col-md-6 col-lg-6">
                                            <label className="form-label">Recipe Title</label>
                                            <input required placeholder="title" value={prop.recipe?.title} name='title' onChange={handleChange} type="text" className=" border-color form-control" aria-label="Sizing example input" />

                                        </div>
                                        <div className="mb-3 col-12  col-md-6 col-lg-6">
                                            <label className="form-label">Recipe Decription</label>
                                            <input required placeholder="Description" value={prop.recipe?.description} name="description" onChange={handleChange} type="text" className="form-control border-color" />
                                        </div>
                                        <div className="mb-3 col-12  col-md-6 col-lg-6">
                                            <label className="form-label">Recipe Instructions</label>
                                            <input required placeholder="Description" value={prop.recipe?.ingredients} name="ingredients" onChange={handleChange} type="text" className="form-control border-color" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-6 col-lg-6">
                                            <label className="form-label">Recipe Ingredients </label>
                                            <input required placeholder="Ingredients" value={prop.recipe?.instructions} name="instructions" onChange={handleChange} className="border-color form-control" />
                                        </div>
                                        <div className="mb-3 col-12  col-md-6 col-lg-6">
                                            <label className="form-label">Services</label>
                                            <input required value={prop.recipe?.services} onChange={handleChange} name="services" type="number" className="border-color form-control" placeholder="services" />

                                        </div>
                                        <div className="mb-3 col-12 col-md-6 col-lg-6">
                                            <label className="form-label">Time</label>
                                            <input required value={prop.recipe?.time} onChange={handleChange} name="time" type="number" className="border-color form-control" placeholder="time" />
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={prop.updateRecipe} className="btn btn-primary btn1" data-bs-dismiss="modal">Save</button>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#updateModal" className="btn btn-primary btn2">Close</button>
                        </div>
                    </div>
                </div>
            }
        </div>



    );
}

export default RecipeModal;