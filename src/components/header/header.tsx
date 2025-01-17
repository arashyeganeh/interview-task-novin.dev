import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

function HeaderComponent() {
    return (
        <header className={styles.header}>
            <div className="container text-left">
                <Link to="/logout">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" />
                    </svg>
                    خروج
                </Link>
            </div>
        </header >
    )

}

export default HeaderComponent;