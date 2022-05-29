import React from "react";
import MainNavbar from "../components/MainNavbar";
import styled from "styled-components"
import styles from "./MyPage.module.css";
import { useNavigate } from "react-router-dom";

// styled-components
const Bar = styled.div`
    background : rgb(233, 227, 227);
    width : 100%;
    max-width : 1000px;
    height : ${props => props.maxWidth};;
    border-right : 3px solid rgb(192, 181, 181);
    border-bottom : 3px solid rgb(192, 181, 181);
    border-radius : 5px;
    color : black;
    display : block;
    margin : auto;
    margin-bottom : 70px;
`

const Item = styled.li`
    list-style : none;
    padding-top : 5px;
    padding-right : 25px;
    font-size : 20px;
    cursor: pointer;
`


function MyPage({isLogged, setIsLogged}) {
    const navigate = useNavigate();
    return (
        <>
            <MainNavbar isLogged={isLogged} setIsLogged={setIsLogged}/>
            <h3 className={styles.mypageTitle}>마이 페이지</h3>
            <Bar maxWidth={"150px"}>
                <h5 className={styles.orderCheckTitle}>주문/배송조회</h5>
                <ul className={styles.orderCheckItem}>
                    <Item className={styles.item}>입금/결제</Item>
                    <Item className={styles.item}>배송중</Item>
                    <Item className={styles.item}>배송완료</Item>
                    <Item className={styles.item}>구매확정</Item>
                    <Item className={styles.item}>환불교환</Item>
                </ul>
            </Bar>
            <Bar maxWidth={"150px"}>
                <h5 className={styles.myShoppingTitle}>나의 쇼핑 활동</h5>
                <ul className={styles.myShoppingItem}>
                    <Item 
                        onClick={() => {navigate("/cart")}}
                        className={styles.item}
                    >장바구니</Item>
                    <Item className={styles.item}>주문내역조회</Item>
                    <Item className={styles.item}>1:1 문의</Item>
                    <Item 
                        onClick={() => {navigate("/watched")}}
                        className={styles.item}
                    >최근 본 상품</Item>
                </ul>
            </Bar>
            <Bar maxWidth={"150px"}>
                <h5 className={styles.userInfo}>회원 정보</h5>
                <ul className={styles.userInfoItem}>
                    <Item className={styles.item}>계정정보 확인</Item>
                    <Item className={styles.item}>비밀번호 재설정</Item>
                </ul>
            </Bar>
        </>
    )
}

export default MyPage;
