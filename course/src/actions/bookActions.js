//Post books

export function postBooks(book){
    return{
        type:'POST_BOOK',
        payload: book
    };
}

//Delete books

export function deleteBooks(id){
    return{
        type:'DELETE_BOOK',
        payload: id
    }
}

//Update books

export function updateBooks(book){
    return{
        type:'UPDATE_BOOK',
        payload: book
    }
}