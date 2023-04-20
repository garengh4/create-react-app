export function ViewDefectsRow({ defect }) {

    return (
        <tr key={defect.id}>
            <td>{defect.category}</td>
            <td>{defect.description}</td>
            <td>{defect.priority}</td>
            <td>{defect.status}</td>
            <td>{defect.status === 'open' ? 'Close Defect' : 'No Action Pending'}</td>
        </tr>
    )

}