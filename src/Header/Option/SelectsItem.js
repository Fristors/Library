import React from "react";

const styles = {
    option: {
        padding: 10,
        fontFamily: 'Times',
        fontWeight: 'bold',
        color: 'gray'
    }
}
export default function SelectsItem (props){
    return (
        <option style={styles.option}>{props.item.name}</option>
    );
};