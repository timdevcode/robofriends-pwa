import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    setSearchField,
    requestRobots
} from '../actions'

import Header from '../components/Header'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'

import './App.css'


const mapStateToProps = state => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
})

const mapDispatchToProps = dispatch => ({
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
})

class App extends Component {

    componentDidMount() {

        this.props.onRequestRobots()
    }

    render() {

        const { robots, isPending, searchField, onSearchChange } = this.props

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        if (isPending) {

            return (
                <div className="tc">
                    <h1 className="f1">Loading...</h1>
                </div>
            )
        } else {

            return (
                <div className="tc">
                    <Header />
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)