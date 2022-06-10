import React,{useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import styles from "./SignUp.module.css";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignUp () {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const database = getDatabase();
    const auth = getAuth();
    const navigate = useNavigate();

    // 회원가입 함수
    const signup = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            )
            const userId = auth.currentUser.uid;
            set(ref(database, `users/` + userId), {
                email: registerEmail,
            })
            console.log(userId);
            alert("회원가입이 완료되었습니다!");
            navigate(-1);

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            {/* 회원가입 */}
            <div className={styles.signUpForm}>
                <h3>회원가입</h3>
                <label htmlFor="email">이메일</label>
                <input 
                    type="text"
                    id="email"
                    name="email" 
                    placeholder="Email..."
                    onChange={(e) => {
                        setRegisterEmail(e.target.value);
                    }}
                    className={styles.signUpEmailInput}
                />
                <label htmlFor="password">비밀번호(8자리 이상)</label>
                <input 
                    type="password" 
                    id="password"
                    name="password" 
                    placeholder="Password..."
                    onChange={(e) => {
                        setRegisterPassword(e.target.value);
                    }} 
                    className={styles.signUpPasswordInput}
                />
                <button onClick={signup} className={styles.signUpBtn}>가입완료하기</button>
            </div>
            <h5 className={styles.title}>카페슈 CafeShoe</h5>
        </div>
    )
}

export default SignUp;

