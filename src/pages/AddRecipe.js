import { useEffect, useState } from "react";
import usePost from "../components/shared/usePost";
import { useHistory } from "react-router-dom";
import React, { useRef } from 'react';

const AddRecipe = () => {
    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')
    const [services, setServices] = useState('')
    const recipe = { title, description, ingredients, instructions, time, services }
    const history = useHistory()
    const { post } = usePost()
    const addNewRecipe = (e) => {
        console.log(recipe)
        post('http://localhost:3001/Recipe', recipe)
        history.push('/home')
        e.preventDefault()
    }
    const cancel = () => {
        setTitle('')
        setDescription('')
        setIngredients('')
        setServices('')
        setTime('')
        setInstructions('')
        history.push('/home')
    }
    return (
        <>
            <div style={{ marginTop: '8%' }} className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure to close the page?
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={cancel} className="btn btn-secondary btn1">Yes</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-primary btn2">No</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <form onSubmit={addNewRecipe}>
                    <fieldset >
                        <legend className=" label-color">New Recipe Page</legend>
                        <div className="row">
                            <div className="mb-3 col-12  col-md-6 col-lg-6">
                                <label className="form-label">Recipe Title</label>
                                <input required placeholder="title" value={title} onChange={e => setTitle(e.target.value)} type="text" className=" border-color form-control" aria-label="Sizing example input" />
                            </div>
                            <div className="mb-3 col-12  col-md-6 col-lg-6">
                                <label className="form-label">Recipe Decription</label>
                                <textarea required placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} class="border-color textarea form-control" ></textarea>
                            </div>
                            <div className="mb-3 col-12  col-md-6 col-lg-6">
                                <label className="form-label">Recipe Instructions</label>
                                <textarea required placeholder="Ingredients" value={ingredients} onChange={e => setIngredients(e.target.value)} class="border-color textarea form-control" ></textarea>
                            </div>
                            <div className="mb-3 col-12 col-md-6 col-lg-6">
                                <label className="form-label">Recipe Ingredients </label>
                                <textarea placeholder="instructions" required value={instructions} onChange={e => setInstructions(e.target.value)} class="border-color textarea form-control" ></textarea>
                            </div>
                            <div className="mb-3 col-12  col-md-6 col-lg-6">
                                <label className="form-label">Services</label>
                                <input required value={services} onChange={e => setServices(e.target.value)} type="number" className="border-color form-control" placeholder="services" />

                            </div>
                            <div className="mb-3 col-12 col-md-6 col-lg-6">
                                <label className="form-label">Time</label>
                                <input required value={time} onChange={e => setTime(e.target.value)} type="number" className="border-color form-control" placeholder="time" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-12 col-md-6 col-xl-6 col-lg-6">
                                <button type="submit" className="btn btn-primary btn1">Save</button>
                            </div>
                            <div className="mb-3 col-12 col-md-6 col-xl-6 col-lg-6">
                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary btn2">Cancel</button>
                            </div>
                        </div>


                    </fieldset>
                </form>
            </div>
        </>

    )
}

export default AddRecipe;