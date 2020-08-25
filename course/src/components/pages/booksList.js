import React from 'react';
import {connect} from 'react-redux';

function BooksList(){
    console.log("Active", this.props.books)
    return(
        <div>
            <h2>Hello React</h2> 
        </div>
    );
}

function mapStateToProps(state){
    return{
        books: state.books.books
    };
}

export default 
connect(mapStateToProps)(BooksList);
