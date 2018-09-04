// contain all the different type fo action creater it makes.
export function selectBook(book){
  //selectbook is an actioncreator, it need to return an actions
  //object with type property
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
  //type and payload
}
