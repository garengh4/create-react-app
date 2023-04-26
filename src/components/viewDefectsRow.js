import axios from 'axios'


export function ViewDefectsRow({ defect = {}, onUpdateDefect, onUpdateError, children = "" }) {

    const closeDefect = () => {
        onUpdateError('')
        axios.put("http://localhost:4000/defects/" + defect.id, { ...defect, status: 'closed' })
            .then(response => { onUpdateDefect(response.data) })
            .catch(error => onUpdateError('Unable to close defect. Error: src/components/viewDefectsRow.js'))
    }

    return (
        <tr>
            <td>{defect.category}</td>
            <td>{children}</td>
            <td>{defect.priority}</td>
            <td>{defect.status}</td>
            <td>{defect.status == 'open' ? <button
                onClick={closeDefect}
                className="btn btn-link">Close Defect</button> : 'No Action Pending'}</td>
        </tr>
    )

}