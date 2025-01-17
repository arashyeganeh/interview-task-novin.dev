import React, { useEffect, useContext } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import { UserContext } from "../../context/mainContext";
import { FooterComponent, HeaderComponent } from "../../components";

function ProtectLayout() {
    const navigate = useNavigate();
    const { userToken } = useContext(UserContext);

    useEffect(() => {
        !userToken && navigate("/login")
    }, []);

    return (
        <>
            <HeaderComponent />
            <main className="container grid justify-center items-center">
                <Outlet />
            </main>
            <FooterComponent />
        </>)
}

export default ProtectLayout;