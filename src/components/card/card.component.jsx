//import { Component } from "react";
import './card.style.css'

//class method
// class Card extends Component {
//   render() {
//     const {name , email , id} = this.props;
//     return (
//       <div className="card-container" key={id}>
//         <img
//           alt={`Monster ${name}`}
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//         />
//         <h1>{name}</h1>
//         <h2>{email}</h2>
//       </div>
//     );
//   }
// }


function Card({name,email,id}) {
  return (
    <div className="card-container" key={id}>
      <img
        alt={`Monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h1>{name}</h1>
      <h2>{email}</h2>
    </div>
  );
}


export default Card
