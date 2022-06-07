// 회원가입, 로그인 컴포넌트

import React, { useEffect, useState } from "react";
import { 
    // createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    // signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import styles from "./Auth.module.css";
import { useNavigate } from "react-router-dom";

function Auth({user, setUser, isLogged, setIsLogged}) {

    // 로그인 email, pw
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const navigate = useNavigate();
    
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    })

    // 로그인 함수
    const signin = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            // 로그인 성공시 true로
            setIsLogged(true);
            
            // sessionStorage.setItem("loginInfo",JSON.stringify({userId : loginEmail, userPassword : loginPassword}));
            
        } catch (error) {
            console.log(error.message);
            alert("이메일 혹은 비밀번호가 틀립니다.");
        }
    }

    return (
        <>
            {
                useEffect(() => {
                    // 로그인 성공시 이전페이지로 이동( navigate(-1)을 사용하면 이전페이지로 이동가능)
                    isLogged && navigate(-1)
                })
            }

            {/* 로그인 / 로그아웃 */}
            <div className={styles.loginDiv}>
                {/* 로그인 */}
                <div className={styles.loginForm}>
                    <h3>로그인</h3>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="이메일"
                        onChange={(e) => {setLoginEmail(e.target.value)}}
                        className={styles.loginEmailInput}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="비밀번호"
                        onChange={(e) => {setLoginPassword(e.target.value)}}
                        className={styles.loginPasswordInput}
                    />
                    <button onClick={signin} className={styles.loginBtn}>로그인</button>
                    <hr />
                    <button onClick={() => {navigate(`signup`)}} className={styles.signUpBtn}>회원가입</button>
                </div>
                <h5 className={styles.title}>카페슈 CafeShoe</h5>
            </div>

            {/* 현재 로그인된 사용자 이메일 출력 */}
            {/* <div>User Logged In : {user?.email}</div> */}

            {/* 로그아웃 */}
            {/* <button onClick={signout}>로그아웃</button> */}
        </>
    )
}

export default Auth;
