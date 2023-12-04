import './app-header.css'

function AppHeader({ sum, increased }) {
    return (
        <div className="app-header">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {sum}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppHeader