import mystore from "../ReduxStore/Store"

const myAction = (data) =>{
mystore.dispatch({
    type:"Name",
    payload:data,
})
}
export default myAction