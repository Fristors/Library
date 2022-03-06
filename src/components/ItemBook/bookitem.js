import React from "react";
import './bookitem.css';
import { NavLink } from "react-router-dom";

export default function Book({book}) {
    debugger;
    return (
        <div className='BgBook'>
            <div className='RabZone'>
            <div className='ImgBook'>
                <img src={book?.path} alt=''/>
                {/* <button onClick={()=>{console.log(book.path); console.log(book.category)}}/> */}
                <a>{book?.category}</a>
                {/* <a href="#">{category?.category === undefined ? 'Нет категории' : category.category}</a> */}
            </div>
            <div className='Bookinf'>
                    <a href={'/' + book.id} className='BookName'><NavLink to={'/' + book?.id}>{book?.name}</NavLink></a>
                    <p className='BookAuthor'>{book?.author}</p>
            </div>
            </div>
        </div>
    );
}