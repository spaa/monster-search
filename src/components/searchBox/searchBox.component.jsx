//import { Component} from 'react';
import './searchBox.style.css'


//class Componenet
// class SearchBox extends Component{
//     render(){
//         const {placeHolder , onChangeHandler, className} = this.props;
//         return (
//             <input 
//                 className={`search-box ${className}`}
//                 type="search"
//                 placeholder = {placeHolder}
//                 onChange = {onChangeHandler}
//             />
//         )
//     }
// }

function SearchBox({placeHolder , onChangeHandler, className}){
    return (
        <input 
            className={`search-box ${className}`}
            type="search"
            placeholder = {placeHolder}
            onChange = {onChangeHandler}
        />
    )
}

export default SearchBox;