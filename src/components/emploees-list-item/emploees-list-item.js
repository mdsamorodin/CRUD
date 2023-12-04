import './emploees-list-item.css'

function EmploeesListItem({ name, salary, onDelete, onToggleProperty, increase, like }) {
    let className = 'list-group-item d-flex justify-content-between'
    if (increase) {
        className += ' increase'
    }

    if (like) {
        className += ' like'
    }

    return (
        <li className={className}>
            <span onClick={onToggleProperty} data-toggle="like" className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={onToggleProperty} data-toggle="increase" type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmploeesListItem