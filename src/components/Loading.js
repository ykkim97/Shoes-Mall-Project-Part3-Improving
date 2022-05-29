import React from "react";
import styles from "./Loading.module.css";

function Loading() {
    return (
        <div className={styles['loading-message']}>로딩중이에요...<br/>조금만 기다려주세요!</div>
    )
}

export default Loading;