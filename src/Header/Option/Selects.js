import React from "react";
import './selects.css';
import SelectsItem from "./SelectsItem";

function Select({value, handleChange, key, ...props}){

    const OnChangeCategory = (e) => {
        handleChange(e.target.value)
    }
    const selectItemList = props.items.map(item => {
        return <SelectsItem item = {item} key = {key}/>;
    });
    return (
        <select onChange={OnChangeCategory} value = {value}> 
            {selectItemList}
        </select>
    );
}

export default Select;