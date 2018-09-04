import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
         key={book.title}
         onClick= { () =>  this.props.selectBook(book) }
         className = "list-group-item">
         {book.title}</li>
      );
    });
  }

  render(){
    return (
      <ul className = "list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}


function mapStateToProps(state){
  //whatever is returned form here will show up as props inside of booklist
  return{
    books: state.books
  };
}

//anything returned in function will end up as poprs on the booklist container
function mapDispatchToProps(dispatch){
  //whenver selct book is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//promote booklist from a Component to a container - it need to know about new dispatch method, selectBook
//make available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
