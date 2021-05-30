import React, {useState, useEffect} from 'react';
import Link from "next/link";

export default function home() {
    return(
        <div>
            <header>
            <Link href="/landing">
                <a>Log out</a> 
            </Link>
            </header>
        </div>
    )
}