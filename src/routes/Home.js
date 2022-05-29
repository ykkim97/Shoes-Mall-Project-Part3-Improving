// 메인 홈 화면

import React, { useState } from "react";
import MainCarousel from "../components/MainCarousel";
import MainNavbar from "../components/MainNavbar";
import MainPopularItem from "../components/MainPopularItem";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";
import styles from "./Home.module.css";

function Home({popularShoes, isLogged, setIsLogged}) {
    const [visible, setVisible] = useState(false); // 다른상품보기
    
    return (
        <div>

            <MainNavbar isLogged={isLogged} setIsLogged={setIsLogged}/>

            <MainCarousel />

            <div className={styles["popular-item"]}>
                <h3 className={styles["popular-title"]}>인기 상품</h3>
                <div className="container">
                    <div className="row" id={styles["popular-list"]}>
                        {popularShoes.map((shoes, idx) => {
                            if(!visible && idx > 2) return null;
                            return (
                                <MainPopularItem shoes={shoes} key={idx} idx={idx} />
                            )
                        })} 
                    </div>
                </div>
            </div>

            {
                !visible && 
                (<div className={styles["another-item"]}>
                    <button 
                        className={`${styles.customBtn} ${styles.anotherClickButton}`} 
                        onClick={() => {setVisible(true)}}
                    >다른상품 보기</button>{' '}
                </div>)
            }

            <Footer />

        </div>
    )
}

export default Home;