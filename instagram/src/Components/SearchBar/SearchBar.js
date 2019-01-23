import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = props => {
  return (
    <div>
      <div>
        
        <div>
          <span className="fab fa-instagram fa-3x"></span>
          <span>Instagram</span>      
        </div>

        <input type="text" onChange={props.onChange} name="searchValue" value={props.value}/>
        
        <div>
          <span className="far fa-compass fa-2x"></span>
          <span className="far fa-heart fa-2x"></span>
          <span className="far fa-user fa-2x" onClick={props.logout}></span>
        </div>
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  logout: PropTypes.func,
}
export default SearchBar
