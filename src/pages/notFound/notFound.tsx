import React from "react";
import { Link } from "react-router-dom";

import notFoundImage from "../../assets/other/notfound.png";

import styles from "./notFound.module.css";

function NotFoundPage() {
    return (
        <>
            <title>صفحه مورد نظر یافت نشد 404</title>
            <div className={styles.wrapper}>
                <img src={notFoundImage} alt="خطای 404" />
                <h1>خطای 404</h1>
                <p>متاسفانه صفحه مورد نظر شما یافت نشد</p>
                <Link to="/" className={styles.link}>بازگشت به صفحه اصلی</Link>
            </div>
        </>)
}

export default NotFoundPage;