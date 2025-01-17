import React, { useState, useEffect, useRef, useContext, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/mainContext";
import { auth } from "../../service";

import styles from "./login.module.css";

function LoginPage() {
    const navigate = useNavigate();

    const { dispatch } = useContext(UserContext);

    const inputUserRef = useRef<HTMLInputElement>(null!);
    const [inputUserValue, setInputUserValue] = useState<string | undefined>();

    const inputPassRef = useRef<HTMLInputElement>(null!);
    const [inputPassValue, setInputPassValue] = useState<string | undefined>();

    const submitButtonRef = useRef<HTMLButtonElement>(null!);

    const [errorMsg, setErrorMsg] = useState<string>("");
    const [allowSubmit, setAllowSubmit] = useState<boolean>(false);

    // Change focus
    useEffect(() => {
        inputUserRef.current.focus();
    }, [])

    // Checking the user has filled in all the fields
    useEffect(() => {
        if (inputUserRef.current.checkValidity() && inputPassRef.current.checkValidity()) {
            setAllowSubmit(true);
        } else {
            setAllowSubmit(false);
        }
    }, [inputUserValue, inputPassValue]);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (inputUserValue && inputPassValue) {
            try {
                const result = await auth({
                    email: inputUserValue,
                    password: inputPassValue
                });

                if (result && result.token) {
                    dispatch("userToken", result.token)
                    localStorage.setItem("token", result.token);
                    navigate("/");
                }

            } catch (e) {
                setErrorMsg("نام کاربری یا رمز عبور اشتباه است.")
            }
        }
    }

    return (
        <main className={`grid justify-center items-center ${styles.bgColorful}`}>
            <title>ورود</title>
            <section className="card">
                <h1>ورود</h1>
                <span>لطفا برای ورود ایمیل و رمز عبور خود را وارد کنید.</span>
                {
                    errorMsg && <p className={styles.error}>{errorMsg}</p>
                }
                <details dir="ltr">
                    Email: eve.holt@reqres.in
                    <br />
                    Pass: pistol
                </details>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>ایمیل</span>
                        <input type="email" ref={inputUserRef} onChange={(event) => setInputUserValue(event.target.value)} placeholder="eve.holt@reqres.in" dir="ltr" required />
                    </label>
                    <label>
                        <span>رمز عبور</span>
                        <input type="password" ref={inputPassRef} onChange={(event) => setInputPassValue(event.target.value)} dir="ltr" required />
                    </label>
                    <button ref={submitButtonRef} type="submit" disabled={!allowSubmit}>ورود</button>
                </form>
            </section>
        </main>
    )
}

export default LoginPage;