//import { Component } from "react";
import Cards from '../card/card.component'
import './cardList.style.css'
import {useEffect, useState} from 'react'

//Class Method
// class CardList extends Component {
//     render(){
//         const {monsters} = this.props

//         return (
//             <div className="card-list">
//             {monsters.map((m)=>{
//                 const {name, id,email} = m
//                 return (
//                     <Cards key={id} name = {name} id = {id} email = {email}/>
//                 )
//             })}
//             </div>
//         )
//     }
// }


//function methods
const CardList = ({monsters})=>{

    return (
        <div className="card-list">
        {monsters.map((m)=>{
            const {name, id,email} = m
            return (
                <Cards key={id} name = {name} id = {id} email = {email}/>
            )
        })}
        </div>
    )
}

export default CardList;