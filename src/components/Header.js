import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

function Header({ title, onClick, showAddTask }) {
    return (
        <header className='header'>
            <h1>{title}</h1>
            {!showAddTask ?
            <Button color='green' text='Add' onClick={onClick}/>
            :
            <Button color='red' text='Close' onClick={onClick}/>
            }
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header