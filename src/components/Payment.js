import React from "react";
import styles from "./Payment.module.css";

function Payment({onOpenModal}) {


    return (
        <div className={styles["payment-modal"]}>
            <div className={styles["bg"]}></div>
            <div className={styles["modalBox"]}>
                <h4>결제</h4>
                <p>계좌번호 : 123123123123 </p>
                <button className={styles["closeBtn"]} onClick={onOpenModal}>X</button>
            </div>
        </div>
    )
}

export default Payment;