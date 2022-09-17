//import {Component} from 'react'
import {useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import CardList from './components/cardList/cardList.component'
import SearcBox from './components/searchBox/searchBox.component'

//class component
/*class App extends Component{
  constructor(){
    super();
    this.state = {
      name : 'Swapnil',
      monsters : [],
      searchFilter : '',
    }
    console.log('constructor')
  }

  debounce(fn,timerDelay){
    let timer;
    return function(args){
      console.log("debounce : ")
      if(timer) clearTimeout(timer);
      timer = setTimeout(()=>fn(args), timerDelay);
    }
  }

  myDebounce = this.debounce((e)=>this.setState({name: e.target.value}),2000);

  componentDidMount(){
    console.log('componentDidMount')

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      return response.json();
    })
    .then(monsters=>
      this.setState(
        ()=>{
          return {monsters}
        }
      )
    )
  }

  onClickFilter = (e)=>{
    const searchFilter = e.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {searchFilter}
    })
  }


  render(){
    console.log('render')

    const {monsters,searchFilter,name} = this.state;
    const {onClickFilter,myDebounce} = this;
    const filterList = monsters.filter(m=> m.name.toLocaleLowerCase().startsWith(searchFilter))

    return (
      <div className="App">
        <header className="App-header">
          <div className="app-header" id="welcome">Monsters Site - {name}</div>
          <input className="search-box" type="text" placeholder="Change header by typing name" onChange={myDebounce}/>
          <br/>
          <br/>
          <SearcBox onChangeHandler = {onClickFilter} placeHolder = {'Search Monsters'} className = {'search-monsters'}/>
          <CardList monsters = {filterList}/>
          
        </header>
      </div>
    );
  }
}*/



//functional Component
function App() {
  console.log('render')

  const [name, setName] = useState('');
  const [monsters,setMonster] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [filterList, setFilterList] = useState(monsters);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      return response.json();
    })
    .then(monsters=>setMonster(monsters))
  },[]);


  useEffect(()=>{
    const filterList = monsters.filter(m=> m.name.toLocaleLowerCase().startsWith(searchFilter))
    setFilterList(filterList);
  },[monsters,searchFilter])


  const onClickFilter = (e)=>{
    const searchFilter = e.target.value.toLocaleLowerCase();
    setSearchFilter(searchFilter)
  }

  function debounce(fn,timerDelay){
    let timer;
    return function(args){
      console.log("debounce : ")
      if(timer) clearTimeout(timer);
      timer = setTimeout(()=>fn(args), timerDelay);
    }
  }

  const myDebounce = debounce((e)=>{
    setName(e.target.value)
  },2000
  );


    return (
      <div className="App">
        <header className="App-header">
          <div className="app-header" id="welcome">Monsters Site - {name}</div>
          <input className="search-box" type="text" placeholder="Change header by typing name" onChange={myDebounce}/>
          <br/>
          <br/>
          <SearcBox onChangeHandler = {onClickFilter} placeHolder = {'Search Monsters'} className = {'search-monsters'}/>
          <CardList monsters = {filterList}/>
          
        </header>
      </div>
    );

}

export default App;
