import React, {useState, useEffect} from 'react';
import Link from "next/link";
import WordBox from "./components/WordBox";
import WordInput from "./components/WordInput";

const getAccount = () => {
    const account = localStorage.getItem("account");
    return account;
}

export default function home() {
    const [account, setAccount] = useState("");
    useEffect(() => {
        setAccount(getAccount());
    }, [account])
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
                <WordBox />
                <WordInput />
            </main>
        </div>
    )
}