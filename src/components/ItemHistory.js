import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import styles from "./ItemHistory.module.css";

// styled-components
const ShoesTitle = styled.h4`
    width : 500px;
    margin-top : 10px;
    font-size : 30px;
    color : Black;

    @media only screen and (max-width: 1200px) {
        font-size : 15px;
    }
`
const ShoesContent = styled.p`
    font-size : 15px;
    color : grey;
`
const ShoesPrice = styled.p`
    font-size : 20px;
    color : grey;
`
// 최근 본 상품 컴포넌트
function ItemHistory({shoes, idx}) {
    const navigate = useNavigate();
    return (
        <>
            {
                idx < 21 
                ? (
                    <div className="col-md-12 populars" onClick={() => {navigate(`/detail/${shoes.id}`)}} id={styles.ItemDiv}>
                        <img 
                            src={`https://firebasestorage.googleapis.com/v0/b/shoes-shoppingmall.appspot.com/o/items%2Fshoes${idx}.jpg?alt=media`} 
                            width="80%" 
                            height="190px"
                            className={styles.img}
                        />
                        <div className={styles.content}>
                            <ShoesTitle>{shoes.title}</ShoesTitle>
                            <ShoesContent>{shoes.content}</ShoesContent>
                            <ShoesPrice>{shoes.price}원</ShoesPrice>
                        </div>
                    </div>
                ) : null
            }
        </>        
    )
}

export default ItemHistory;