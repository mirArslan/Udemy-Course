import React from 'react';
import './App.css';
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers/index';
import {postBooks, deleteBooks, updateBooks} from './actions/bookActions';
import {addToCart} from './actions/cartActions';
import logger from 'redux-logger';



function App() {
  return (
    <div className="App">
      <h2>Course App</h2>
    </div>
  );
}




//Step 1 create store
const middleware=applyMiddleware(logger);
const store=createStore(reducers,middleware);
// store.subscribe(function(){
//   console.log("Current state is: ",store.getState());
//   //console.log("Price is: ",store.getState()[1].price);
// });

//step 2 dispatch action
store.dispatch(postBooks(
  [{
    id:1,
    title:"1st Book Name",
    description:"Book Description",
    price:33.33
  },{
    id:2,
    title:"2nd Book Name",
    description:"Book Description",
    price:40
  }]
))


//Delete Book
store.dispatch(deleteBooks(
  {id:1}
))


//Update Book
store.dispatch(updateBooks(
  {
    id:2,
    title:"2nd Book Updated title"
  }
))


//Cart add action

store.dispatch(addToCart(
  [{id:1}]
))

export default App;

