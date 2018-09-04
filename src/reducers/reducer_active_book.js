//State argument in not application state.only State
//this reducer is responsible for
export default function(state = null, action){
  swtich(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }



  return state
}
