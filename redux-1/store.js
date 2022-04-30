import { legacy_createStore as createStore } from "redux";

//action type
const ADD_COUNT="ADD_COUNT";
const ADD_TODO="ADD_TODO"


//action creator

const addtodo=(title)=>{
    return {
        type:"ADD_TODO",
        paylod:{
            title:title,
            status:false
        }
    }
}


//how to update store
const reducer=(store,action)=>{
    switch(action.typ){
        case "ADD_COUNT":
        return {...store,counter:store.counter+action.payload}
        case "ADD_TODO":
            return  {...store,todos:[...store.todos,action.payload]}
            default:
                 return store
    }
    
}

const initstate={
    counter:0,
    todos:[]
}

const store=createStore(reducer,initstate);

console.log("initial store",store.getState( ))

store.dispatch({type:"ADD_COUNT",payload:1})

store.dispatch({
    type:"ADD_TODO",
    payload:{title:"Learn redux",status:false}
})
console.log("after dispatch",store.getState())

store.dispatch(addtodo("learn javascript"))

console.log("after dispatch",store.getState())
