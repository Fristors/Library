import React from "react";
import Book from "./bookitem"; 
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ItemPage(){
    const {id} = useParams();
    const books = useSelector(state => state.books.list);
    debugger ;
    const book = books.find(book => book.id == id)
    return(
        <Book book = {book}/>
    )
}