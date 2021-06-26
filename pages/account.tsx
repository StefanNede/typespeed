import React, {useState, useEffect} from "react"
import Link from "next/link"

const getAccount = () => {
    const account = localStorage.getItem("account");
    return account;
}

export default function Account() {
    const [account, setAccount] = useState("");
    useEffect(() => {
        setAccount(getAccount());
    }, [account])
    return (
        <div>
            Name: {account}
            {/* now here get the person's typing speed from the database and display it to them, along with the date they got it */}
            <br/>
            <Link href="home">
                <a>back to home</a>
            </Link>
        </div>
    )
}