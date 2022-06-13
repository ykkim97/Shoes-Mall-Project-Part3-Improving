import React, { useState } from "react";
import Footer from "../components/Footer";
import MainNavbar from "../components/MainNavbar";
import MainPopularItem from "../components/MainPopularItem";
import styles from "./WomanShoes.module.css";

function WomanShoes({popularShoes, isLogged, setIsLogged, ax}) {
    const count = [0];

    return(
        <>
            <div className={styles.womanShoesDiv}>
                <MainNavbar isLogged={isLogged} setIsLogged={setIsLogged}/>
                <h3 className={styles.title}>여성신발 ({count}개의 상품)</h3>
                <div className="container">
                    <div className="row" id={styles["item"]}>
                        {ax && popularShoes.map((shoes, idx) => {
                            if(shoes.classify == "woman") {
                                count[0] += 1;
                                return (
                                    <MainPopularItem shoes={shoes} key={idx} idx={idx} />
                                )
                            } 
                        })}
                    </div>
                </div>
                
            </div>
            <Footer />
        </>
    )
}

export default WomanShoes; 