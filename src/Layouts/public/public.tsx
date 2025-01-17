import React, { useEffect, useContext } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import { UserContext } from "../../context/mainContext";

function PublicLayout() {
    const navigate = useNavigate();
    const { userToken } = useContext(UserContext);

    useEffect(() => {
        userToken && navigate("/")
    }, []);

    return (
        <>
            <Outlet />
        </>)
}

export default PublicLayout;