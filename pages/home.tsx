import React, {useState, useEffect} from 'react';
import Link from "next/link";
import WordBox from "./components/WordBox";
import WordInput from "./components/WordInput";

const getAccount = () => {
    const account = localStorage.getItem("account");
    return account;
}

// times how long it takes for the person to get the 
function time() {
    let start = new Date();
    // Do things here
    let finish = new Date();
    let difference = new Date();
    difference.setTime(finish.getTime() - start.getTime());
    alert(difference.getMilliseconds());
}

export default function home() {
    const [account, setAccount] = useState("");
    useEffect(() => {
        setAccount(getAccount());
    }, [account])
    let phrase = "hello there people";
    return(
        <div>
            <header>
                <nav>
                    <ul>
                        <li>                    
                            <Link href="/landing">
                                <a>Log out</a> 
                            </Link>
                        </li>
                        <li>
                            {account === "guest" ? <div>Account: {account}</div> : <Link href="/account"><a>Account: {account}</a></Link>}
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <WordBox phrase={phrase} />
                <WordInput phrase={phrase} />
            </main>
        </div>
    )
}