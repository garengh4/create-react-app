

export function ViewDefects() {

    let defects = [
        { "id": 1, "category": "UI", "priority": 2, "status": "open", "description": "Submit button coming to extreme left; see screenshots" },
        { "id": 2, "category": "Functional", "priority": 1, "status": "open", "description": "Some stuff" },
        { "id": 3, "category": "Change Request", "priority": 3, "status": "closed", "description": "Add remove user functionality" }
    ]


    return (
        <div className="container border">
            <h2 className="text-center mb-4">Defect Tracker</h2>
            <p className="text-center mb-3">Logout</p>
            <p className="text-center mb-3">Add Defect &nbsp;&nbsp;View Defects</p>
            <div className="col-12 border text-center">
                <h3>Filter Details</h3>
                <div className="mb-4">
                    Priority &nbsp;&nbsp;
                    <select>
                        <option value="All">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div className="mb-4">
                    Category &nbsp;&nbsp;
                    <select>
                        <option value="All">All</option>
                        <option value="UI">UI</option>
                        <option value="Functional">Functional</option>
                        <option value="Change Request">Change Request</option>
                    </select>
                </div>

                <h3 className="text-center mb-3">Defect Details</h3>
                <p className="text-center text-danger">Search Results: {defects.length}</p>
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
                        {defects.map(defect => {
                            return (
                                <tr>
                                    <td>{defect.category}</td>
                                    <td>{defect.description}</td>
                                    <td>{defect.priority}</td>
                                    <td>{defect.status}</td>
                                    <td>{defect.status == 'open' ? 'Close Defect' : 'No Action Pending'}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>


            </div>
        </div>
    )
}