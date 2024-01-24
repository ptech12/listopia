import React from 'react'
import './index.css'

const Header = ({ title }) => {

  const headerStyle = {
    backgroundColor: 'mediumblue',
    color: '#fff'
  }
  return (
    <header style={headerStyle}>
        <h1>{title}</h1>
        
    </header>
  )
}
/* Default props is best instead of waiting */
Header.defaultProps = {
  title: "Default Title"
}

export default Header;