import { SEARCH_BOOK } from "../type";

//import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [
        {id: 1, path:"https://img4.labirint.ru/rc/d12d671253d51c2a31737f6b1c8753cc/363x561/books83/823010/cover.png?1636565101", category: 'computer', name:"C# для дебилов и маленьких, а также для еще кого-то", author:"David"},
        {id: 2, path:"https://img4.labirint.ru/rc/d12d671253d51c2a31737f6b1c8753cc/363x561/books83/823010/cover.png?1636565101", category: 'computers', name:"C++", author:"Andry"},
        {id: 3, path:"https://img4.labirint.ru/rc/d12d671253d51c2a31737f6b1c8753cc/363x561/books83/823010/cover.png?1636565101", category: 'computer', name:"C# для дебилов и маленьких, а также для еще кого-то", author:"David"},
        {id: 4, path:"https://img4.labirint.ru/rc/d12d671253d51c2a31737f6b1c8753cc/363x561/books83/823010/cover.png?1636565101", category: 'computers', name:"C++", author:"Andry"}
    ],
    countBooks: 0
}


/*const booksSlice = createSlice({
    name: 'booksReducer',
    initialState: {
        list : []
    },
    reducers:{
        getBooks() {},
        setBooks(state, action) {
            state.list.push(...action.text)
        },
    },
});

export default booksSlice.reducer;*/


export const booksReducer = (state = initialState, action) => {
    switch(action.type){
        case SEARCH_BOOK:
            return {
                ...state,
                list: [...state.list, ...action.text],
                countBook: state.list.length
            }
        default:
            return state;
    }
}