import React, {useState, useEffect} from "react";


export default function WordInput(props) {
    const [char, setChar] = useState(0); // holds number of characters typed
    const [index, setIndex] = useState(0);
    const averageCharactersPerWord = 5;
    let words = props.phrase.split(" ");
    function checkCorrect(event) {
        if (event.key === " ") {
            // console.log("space pressed")
            const wordTyped = event.target.value.trim();
            if (wordTyped == words[index]) {
                setChar(char + words[0].length);
                setIndex(index+1);
                event.target.value = "";
            }
        }
    }
    useEffect(() => {
        if (index == words.length) {
            alert(`${char} characters typed`)
        }
    }, [index])
    return (
        <div>
            <input type="text" name="words" id="word" className="word_input" onKeyPress={() => checkCorrect(event)}/>
        </div>
    )
}