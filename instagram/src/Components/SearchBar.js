import React from "react";
import Logo from "./ig_search_bar.png";

function SearchBar(props) {
    return (

      <section className="searchBar">
        <img src={Logo} alt="instagram"/>
      </section> 
      
    );
}

export default SearchBar;

// import React from 'react';

// const SearchBar= props =>{
//   return(

//       <div className = "search-bar">
//         <form onSubmit = {(e)=>props.submitFunction(e)}>
//           <input onChange = {(e)=>props.handleChange(e)} type = "text" value = {props.fieldValue} /><input type ="submit" value = "Submit"/>
//         </form>

//       </div>

//   );
// }

// export default SearchBar;