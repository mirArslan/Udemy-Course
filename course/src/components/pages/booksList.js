import React from 'react';
import {connect} from 'react-redux';

function BooksList(props){
    console.log("Active", props.books); // this keyword can only be used in Class based component
    return(
        <div>
            <h2>Hello React</h2> 
        </div>
    );
}

function mapStateToProps(state){
    return{
        books: state && state.books && state.books.books || []
    };
}

export default 
connect(mapStateToProps)(BooksList);
