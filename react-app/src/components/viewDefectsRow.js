export function ViewDefectsRow({ defect, children }) {

    return (
        <tr key={defect.id}>
            <td>{defect.category}</td>
            <td>{children}</td>
            <td>{defect.priority}</td>
            <td>{defect.status}</td>
            <td>{defect.status === 'open' ? 'Close Defect' : 'No Action Pending'}</td>
        </tr>
    )

}