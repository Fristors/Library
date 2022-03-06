import "./books.css";
import Book from "./bookitem.js";
import { useSelector } from "react-redux";


export default function BooksList(){
    const books = useSelector(state => state.books.list);
    const count = useSelector(state => state.books.countBooks);
    const booksItemList = books.map(book => {
        return <Book book = {book} key = {book.id}></Book>})
    return(
        <div className='Books'>
            {booksItemList}
        </div>
    )        
}