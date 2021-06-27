import React, {useState, useEffect} from 'react';
import Link from "next/link";
import WordBox from "../components/WordBox";
import WordInput from "../components/WordInput";

const getAccount = ():any => {
    const account = localStorage.getItem("account");
    return account;
}

function getPhrase() {
    // call the api to get a phrase made up of the most commonly used words 
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
                                <a>{account === "guest" ? "Log in": "Log out"}</a> 
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