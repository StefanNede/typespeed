import React, {useState, useEffect} from "react";

export default function WordBox(props:any) {
    return (
        <div className="word_box">
            {props.phrase}
        </div>
    )
}