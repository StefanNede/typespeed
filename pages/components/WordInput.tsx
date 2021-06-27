import React, {useState, useEffect} from "react";


export default function WordInput(props) {
    const [char, setChar] = useState(0); // holds number of characters typed
    const [index, setIndex] = useState(0); // holds the index of the word the person is on
    const [startTime, setStartTime] = useState(0);
    const [timeTaken, setTimeTaken] = useState(0);
    const [wpm, setWpm] = useState(0);
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
        else if (index == 0 && startTime === 0) {
            let start = new Date();
            setStartTime(start.getTime());
        }
    }
    useEffect(() => {
        if (index === words.length) {
            console.log(`${char} characters typed`)
            let finish = new Date();
            let difference = new Date();
            difference.setTime(finish.getTime() - startTime);
            setTimeTaken(difference.getSeconds());
            console.log(difference.getMilliseconds())
            console.log(difference.getSeconds())
        }
    }, [index])
    useEffect(() => {
        if (timeTaken !== 0) {
            const wordsTyped = char/averageCharactersPerWord;
            setWpm(wordsTyped/(timeTaken) * 60);
        }
    }, [timeTaken])
    return (
        <div>
            <input type="text" name="words" id="word" className="word_input" onKeyPress={() => checkCorrect(event)}/>
            <button onClick={() => location.reload()}>redo</button>
            <br/>
            <p>{wpm} wpm</p>
        </div>
    )
}