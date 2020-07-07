import React from 'react';
import { Link } from 'react-router-dom';


const NavigationStyle = {
  fontStyle: 'italic',
  backgroundColor: '#1b1b1b',
  padding: '20px',
}

const NavigationElementStyle = {
  padding: '10px',
  color: '#e1e1e1',
}

class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      logged: 0
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps.logged !== this.props.logged){
      this.setState({
        logged: 1
      })
    }
  }

  render(){
    let button = (this.state.logged)? <Link to='/convert' style={NavigationElementStyle}>Currency Converter</Link>: null

    return (
      <div style={NavigationStyle}>
        <header>
          <Link style={NavigationElementStyle} to='/'>Currency List</Link>
          <Link style={NavigationElementStyle} to='/signup'>Sign Up</Link>
          {button}
          <Link style={NavigationElementStyle} to='/signin'>Sign In</Link>
        </header>
      </div>
    );
  }
}

export default Navigation;
