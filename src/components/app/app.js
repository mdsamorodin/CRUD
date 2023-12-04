import { Component } from 'react'

import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmploeesList from '../emploees-list/emploees-list'
import EmploeesAddForm from '../emploees-add-form/emploees-add-form'
/* import {Component} from 'react' */

import './app.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name: 'Misha Samorodin',
                    salary: 1000,
                    id: 1,
                    increase: false,
                    like: false
                },
                {
                    name: 'Sam Soldatov',
                    salary: 600,
                    id: 2,
                    increase: false,
                    like: false
                },
                {
                    name: 'Murat Hasanov',
                    salary: 100,
                    id: 3,
                    increase: false,
                    like: false
                },
                {
                    name: 'Masha',
                    salary: 100000,
                    id: 4,
                    increase: false,
                    like: false
                },
                {
                    name: 'Dasha',
                    salary: 10,
                    id: 5,
                    increase: false,
                    like: false
                }
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    onDelete = (id) => {
        this.setState(state => ({
            data: state.data.filter((person => person.id !== id))
        }))
    }

    onAdd = (name, salary) => {
        if (name.length >= 2 && salary) {
            const newItem = {
                name,
                salary,
                increase: false,
                like: false,
                id: this.maxId++
            }
            this.setState(({ data }) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            })
        }
    }

    onToggleProperty = (id, property) => {
        this.setState(state => ({
            data: state.data.map((person => {
                if (person.id === id) {
                    return { ...person, [property]: !person[property] }
                }
                return person
            }))
        }))
    }

    searchEmp = (data, term) => {
        if (!term) {
            return data
        }
        return data.filter(person => person.name.indexOf(term) > -1)
    }

    onUpdateSearch = (term) => {
        this.setState({ term: term })
    }

    filterPost = (data, filter) => {
        switch (filter) {
            case 'rise':
                return this.state.data.filter(person => person.like)

            case 'moreThen':
                return this.state.data.filter(person => person.salary > 1000)

            default:
                return data
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter: filter })
    }

    render() {
        const { data, term, filter } = this.state
        const visibleData = this.filterPost(this.searchEmp(data, term), filter)
        return (
            <div className="app">
                <AppHeader sum={data.length} increased={data.filter(person => person.increase).length} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter onFilterSelect={this.onFilterSelect} />
                </div>

                <EmploeesList
                    data={visibleData}
                    onDelete={this.onDelete}
                    onToggleProperty={this.onToggleProperty} />

                <EmploeesAddForm onAdd={this.onAdd} />
            </div>
        )
    }
}

/* class WhoAmI extends Component {
    constructor(props){
        super(props)
        this.state = {
            //какие-то изменяющиеся динамически свойства
            years: 27,
            text: '+'
        }
    }
    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
        
    }
    render(){
        const {name, surname, link} = this.props
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name}, surname is {surname}</h1>
                <a href={link}>My profile</a>
            </div>
        )
        }
} */


/* {name, surname, link} */

/* <WhoAmI name='Misha' surname='Samorodin' link='vk.com'/> //вызов 1
<WhoAmI name='Sem' surname='Soldatov' link='inst.com'/> //вызов 2 */

export default App