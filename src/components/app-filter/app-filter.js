import './app-filter.css'

function AppFilter(props) {
    return (
        <div className="btn-group">
            <button className="btn btn-light" type="button" onClick={() => props.onFilterSelect('all')}>
                Все сотрудники
            </button>
            <button className="btn btn-outline-light" type="button" onClick={() => props.onFilterSelect('rise')}>
                На повышение
            </button>
            <button className="btn btn-outline-light" type="button" onClick={() => props.onFilterSelect('moreThen')}>
                З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter