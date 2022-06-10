import React from "react";
import { Button } from "react-bootstrap";
import styles from "./Payment.module.css";

function Payment({onOpenModal}) {

    return (
        <div className={styles["payment-modal"]}>
            <div className={styles["bg"]}></div>
            <div className={styles["modalBox"]}>
                <h4 id={styles["title"]}>결제 진행</h4>
                <hr />
                <p>아래 입금 정보를 확인하신 후, 계좌로 송금해주세요.</p>
                <p>입금은행 : OO은행</p>
                <p>계좌번호 : 123123123123 </p>
                <p>예금주 : CAFESHOE</p>
                <p>입금액 : 0원</p>
                <p>3일 이내로 입금하지 않을 경우 결제가 취소됩니다.</p>
                <Button className={styles["closeBtn"]} onClick={onOpenModal}>취소하기</Button>
            </div>
        </div>
    )
}

export default Payment;