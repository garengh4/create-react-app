import { useState } from "react"
import axios from "axios";

export function AddDefect() {

    let [errorMessage, setErrorMessage] = useState('')
    let [successMessage, setSuccessMessage] = useState('')

    let [newDefect, setNewDefect] = useState({
        id: null,
        category: 'UI',
        priority: 1,
        description: '',
        status: 'open'
    })

    function handleFormChange(formField) {
        return (event) => {
            setNewDefect({ ...newDefect, [formField]: event.target.value })
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
        axios.post("http://localhost:4000/defects", newDefect)
            .then(response => setSuccessMessage("Defect added successfully."))
            .catch(error => setErrorMessage("Unable to add Defect: error in src/components/addDefects.js"))
    }


    return (
        <div className="card col-6 offset-3">
            <div className="card-header bg-primary text-light text-center">Add Defect Section</div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Category</label>&nbsp;
                        <select
                            onChange={handleFormChange('category')}
                            value={newDefect.category}>
                            <option value="UI">UI</option>
                            <option value="Functional">Functional</option>
                            <option value="Change Request">Change request</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label>Priority</label>&nbsp;
                        <input
                            onChange={handleFormChange('priority')}
                            type="number" value={newDefect.priority} />
                    </div>
                    <div className="mb-3">
                        <label>Description</label>&nbsp;
                        <textarea
                            onChange={handleFormChange('description')}
                            value={newDefect.description} cols="30" rows="4"></textarea>
                    </div>
                    <button className="btn btn-primary">Add Defect</button>
                </form>
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

            </div>

        </div>
    )
}