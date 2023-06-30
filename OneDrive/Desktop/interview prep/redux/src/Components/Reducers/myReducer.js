let initialdata={
    name:"MASAI",
    city:"",
}
const myReducer = (state=initialdata,action) =>{
 if(action.type==="NAME"){
    return (state={
    ...state,
    name:action.payload,
    })
 }  
}
export default myReducer;