import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getUser } from '../../service';
import { IUser } from '../../types';

import styles from "./user.module.css";

function UserPage() {
    const { userId } = useParams();
    const [data, setData] = useState<IUser>();

    useEffect(() => {
        (async () => {
            try {
                const res: IUser = await getUser(Number(userId));
                setData(res);

            } catch (error) {
                console.error('There is a problem!');
            }
        })();
    }, [])

    return !data ? <></> : <>
        <title>{data.first_name}</title>
        <div className='space-y-5 my-10'>
            <img src={data.avatar} className={styles.avatar} alt="" loading="lazy" />
            <ul className={`card ${styles.info}`}>
                <li>
                    <span>نام:</span> {data.first_name}
                </li>
                <li>
                    <span>نام خانوادگی:</span> {data.last_name}
                </li>
                <li>
                    <span>ایمیل:</span> {data.email}
                </li>
            </ul>
            <Link to="/" className={styles.returnBtn}>بازگشت</Link>
        </div>
    </>
}

export default UserPage;