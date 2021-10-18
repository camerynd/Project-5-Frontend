import {createStore} from 'redux'

const defaultStore = {character : ''}

function reducer(store = defaultStore, action) {
    // console.log("in reducer", action)
    switch (action.type) {
        case "SETCHARACTER" :
            return {...store, character: action.payload}
        default : 
            return store 
    }

}

export const store = createStore(reducer, defaultStore)