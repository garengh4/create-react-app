import { useState } from "react";
import { ViewDefectsRow } from "./viewDefectsRow";


export function ViewDefects() {

    let [category, setCategory] = useState('All');
    let [priority, setPriority] = useState('All');

    let allDefects = [
        { "id": 1, "category": "UI", "priority": 2, "status": "open", "description": "Submit button coming to extreme left; see screenshots" },
        { "id": 2, "category": "Functional", "priority": 1, "status": "open", "description": "Some stuff" },
        { "id": 3, "category": "Change Request", "priority": 3, "status": "closed", "description": "Add remove user functionality" },
        { "id": 4, "category": "Change Request", "priority": 2, "status": "closed", "description": "Fix button css" },
        { "id": 5, "category": "Functional", "priority": 2, "status": "open", "description": "Some extra stuff" },
        { "id": 6, "category": "Change Request", "priority": 1, "status": "open", "description": "Remove remove user functionality" },
        { "id": 7, "category": "UI", "priority": 1, "status": "closed", "description": "See screenshots" },
    ]

    let [defects] = useState(allDefects)

    let defectsToDisplay = defects
        .filter(x => category === 'All' ? true : x.category === category)
        .filter(x => priority === 'All' ? true : x.priority == priority);


    return (
        <div className="container border">
            <h2 className="text-center mb-4">Defect Tracker</h2>
            <p className="text-center mb-3">Logout</p>
            <p className="text-center mb-3">
                Add Defect &nbsp;&nbsp;
                View Defects
            </p>
            <div className="col-12 border text-center">
                <h3>Filter Details</h3>
                <div className="mb-4">
                    Priority &nbsp;&nbsp;
                    <select value={priority} onChange={(event) => setPriority(event.target.value)}>
                        <option value="All">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div className="mb-4">
                    Category &nbsp;&nbsp;
                    <select value={category} onChange={(event) => setCategory(event.target.value)}>
                        <option value="All">All</option>
                        <option value="UI">UI</option>
                        <option value="Functional">Functional</option>
                        <option value="Change Request">Change Request</option>
                    </select>
                </div>

                <h3 className="text-center mb-3">Defect Details</h3>
                <p className="text-center text-danger">Search Results: {defectsToDisplay.length}</p>
                <table className="table text-center table-bordered">
                    <thead>
                        <tr className="bg-primary text-light">
                            <th>Defect Category</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Change Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {defectsToDisplay.map(defect =>
                            <ViewDefectsRow defect={defect} key={defect.id}/>
                        )}
                    </tbody>
                </table>


            </div>
        </div>
    )
}