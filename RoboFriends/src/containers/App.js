import React from 'react'; 
import CardList from '../components/CardList';
// import {robots} from './robots'; // {} because it not a default export
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

// STATE - description of our app - object that describe our app
// props thing thar come up from state 

class  App extends React.Component {
    constructor(){
        super()
        this.state={
            // robots: robots,
            robots:[],
            Searchfield: ''
        }
  
    }
    // create when component created 
    //fetch - toll for makes http request 
    // use API from JSONPlaceholder website (Fake Online REST API for Testing and Prototyping)
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ robots: users})});
      }
    onSearchChange=(event)=>{
        // console.log(event);
        // console.log(event.target.value) // return what we entered
        this.setState({Searchfield: event.target.value})
        
        
    }
    render(){
        const {robots, Searchfield}= this.state
        const filteredrobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(Searchfield.toLowerCase());
        })
        // console.log(filteredrobots)

        // return (
        //     <div className='tc'>
        //         <h1>RoboFriends</h1>
        //         <SearchBox searchchange={this.onSearchChange}/>
        //         {/* <CardList robots={this.state.robots}/> */}
        //         <Scroll>
        //             <CardList robots={filteredrobots}/>
        //         </Scroll>
               
               
        //     </div>
            
        // );

        return  !robots.length ?
        <h1>Loading</h1> :  (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchchange={this.onSearchChange}/>
                {/* <CardList robots={this.state.robots}/> */}
                <Scroll>
                    <ErrorBoundry> 
                         <CardList robots={filteredrobots}/>
                    </ErrorBoundry>      
                </Scroll>
                   
            </div>
        );

      

    }
    
}
export default App