import React from 'react';

const SingleComp = (props) => {


let colPos = props.colPos;

    return (
        <div >

            <input type="text" value={props.values.val1} onChange={(e) => props.change(e,colPos)} id ={1} />
            <input type="text" value={props.values.val2} onChange={(e) => props.change(e,colPos)} id ={2}/>
            <input type="text" value={props.values.val3} onChange={(e) => props.change(e,colPos)} id ={3} />
            <button onChange={(s)=> props.toggleEvent(s)}   > submit </button>
        </div>
    );
};

export default SingleComp;