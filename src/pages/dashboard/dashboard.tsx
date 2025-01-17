import React, { useEffect, useState, memo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { getUsers } from '../../service';
import { IUsers } from '../../types';

import styles from "./dashboard.module.css";

function DashboardPage() {
    const [searchParams] = useSearchParams();
    const [data, setData] = useState<IUsers>();

    useEffect(() => {
        (async () => {
            try {
                const page: number = Number(searchParams.get('page')) || 1;
                const res: IUsers = await getUsers(page);
                setData(res);

            } catch (error) {
                console.error('There is a problem!');
            }
        })();
    }, [searchParams])

    return !data ? <></> : <>
        <title>داشبورد</title>
        <div className='space-y-5 my-10'>
            <div className="card p-0">
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>
                                Action
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Family
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Avatar
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.data.map((entity, index) => {
                                return <tr key={index}>
                                    <td>
                                        <Link to={`/user/${entity.id}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" />
                                            </svg>
                                        </Link>
                                    </td>
                                    <td>{entity.email}</td>
                                    <td>{entity.last_name}</td>
                                    <td>{entity.first_name}</td>
                                    <td><img src={entity.avatar} alt="" loading='lazy' /></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div >
            <ul className={styles.pagination}>
                {Array.from({ length: data.total_pages }, (_, i) => (
                    <li key={i}>
                        <Link
                            className={data.page === i + 1 ? styles.currentPage : ""}
                            to={i + 1 === 1 ? "/" : `/?page=${i + 1}`}
                        >
                            {i + 1}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </>
}

export default memo(DashboardPage);