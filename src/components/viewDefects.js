import { useEffect, useState } from "react";
import { ViewDefectsRow } from "./viewDefectsRow";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { callViewDefectsAPI } from "../actions/defectsActions";

export function ViewDefects() {

    let defectsInfo = useSelector(state => state.defectsInfo);
    let dispatch = useDispatch();

    let defects = defectsInfo.defects;
    let errorMessage = defectsInfo.errorMessage;

    let [category, setCategory] = useState('All');
    let [priority, setPriority] = useState('All');
    //let [defects, setDefects] = useState([]);
    //let [errorMessage, setErrorMessage] = useState('');

    let defectsToDisplay = defects
        .filter(x => category === 'All' ? true : x.category === category)
        .filter(x => priority === 'All' ? true : x.priority == priority);

     useEffect(() => {
        dispatch(callViewDefectsAPI);
    //     // axios.get('https://workflix-backend-42.azurewebsites.net/defect-api')
    //     axios.get('http://localhost:5000/defects')
    //         .then(response => setDefects(response.data))
    //         .catch(error => setErrorMessage("Unable to fetch defects at src/components/viewDefects.js"))
     }, []);

    
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

                {errorMessage ? <div className="alert alert-danger">{errorMessage}</div> : null}

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
                            <ViewDefectsRow
                                onUpdateDefect={(updatedDefect) => {
                                    let updateDefects = defects.map(defect => defect.id == updatedDefect.id ? updatedDefect : defect);
                                    setDefects(updateDefects); // update defect list
                                }}
                                onUpdateError={(msg) => setErrorMessage(msg)}
                                defect={defect}
                                key={defect.id}
                            >{defect.description}
                            </ViewDefectsRow>
                        )}
                    </tbody>
                </table>


            </div>
        </div>
    )
}