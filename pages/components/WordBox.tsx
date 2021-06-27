import React, {useState, useEffect} from "react";

export default function WordBox(props) {
    return (
        <div className="word_box">
            {props.phrase}
        </div>
    )
}