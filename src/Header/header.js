import React, {useState, useRef} from "react";
import { setFilters } from '../../src/components/axios/axiosBookList';

import "./header.css";
import Select from "./Option/Selects.js";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetBooksActionCreator } from "../saga/asyncFindBookList";

const categories = [
    {id: 1, name:'all'},
    {id: 2, name:'computer'},
    {id: 3, name:'computers'}
]
const sorting = [
    {id: 1, name:'relevance'},
    {id: 2, name:'author'},
    {id: 3, name:'name'}
]
function Header (){

    const inputRef = useRef(); 
    const [category, setCategory] = useState("all");
    const dispatch = useDispatch();
    //const sortByRef = useRef();
    const onSearchHandler = (e) => { 
        setFilters(inputRef.current.value, category, "");
        dispatch(asyncGetBooksActionCreator());
    }


    return(
        <div className='Header'>
            <div className='Heading'>Search for books</div>
                <form className='FindSearch'>
                    <input className='Find' ref={inputRef}/>
                    <button className='Search'onClick={onSearchHandler} type='button'>🔎︎</button>
                </form>
            <div className='Selectors'>
                <div className='Categor'>
                    <p>Categories</p>
                        <Select items={categories} value={category} key = {categories.id} handleChange={setCategory}/>
                </div>
                <div className='Sorting'>
                    <p>Sorting By</p>
                        <Select items = {sorting} key = {sorting.id}/>
                </div>
            </div>
        </div>
    );
}


export default Header;