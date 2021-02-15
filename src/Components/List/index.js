import React from 'react';
import ListItem from '../ListItem';
import './index.css';

const List = ({item, handleDelete, handleUpdate}) => {
    return(
        <div id="myList">
          {item.map((obj) => <ListItem key={obj.id} obj={obj} handleDelete={handleDelete} handleUpdate={handleUpdate}/>)}  
        </div>
    );
};

export default List;