import EmploeesListItem from '../emploees-list-item/emploees-list-item'
import './emploees-list.css'

function EmploeesList({ data, onDelete, onToggleProperty }) {
    const elements = data.map((person) => {
        const { id, ...personProps } = person
        return <EmploeesListItem
            {...personProps}
            key={id}
            onDelete={() => onDelete(id)}
            onToggleProperty={(e) => onToggleProperty(id, e.currentTarget.getAttribute('data-toggle'))} />
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmploeesList