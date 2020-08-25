export function bookReducer(state={books:[]},action){
    switch(action.type){
      case "POST_BOOK":
        //return state=action.payload;
        return {books:[...state.books, ...action.payload]};
  
        //const books = state.books.concat(action.payload); //Concat twoo actions of same name
        //return {books};
        case "DELETE_BOOK":
          const currentBookToDelete = [...state.books]
         // Determine at which index in books
         const indexToDelete = currentBookToDelete.findIndex(function(book){
             return book.id === action.payload.id;
         })
         //use slice to remove the book at the specified index
         return {books: [...currentBookToDelete.slice(0, indexToDelete),
          ...currentBookToDelete.slice(indexToDelete +1)]};
        
        case "UPDATE_BOOK":
          const UpdateBook=[...state.books];
          const IndexUpdate=UpdateBook.findIndex(function(book){
            return book.id===action.payload.id;
          });
          const newBook={...UpdateBook[IndexUpdate],title: action.payload.title};
          return {books:[...UpdateBook.slice(0,IndexUpdate),newBook,
          ...UpdateBook.slice(IndexUpdate+1)]};

        default:
            return state;
    }
  }