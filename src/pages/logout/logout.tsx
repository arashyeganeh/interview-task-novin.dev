import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/mainContext";

function LogoutPage() {
    const navigate = useNavigate();
    const { dispatch } = useContext(UserContext);

    useEffect(() => {
        dispatch("userToken", "")
        localStorage.removeItem("token");
        navigate("/login");
    }, []);
}

export default LogoutPage;