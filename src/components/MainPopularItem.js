import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import styles from "./MainPopularItem.module.css";

// styled-components
const ShoesTitle = styled.h4`
    margin-top : 10px;
    font-size : 19px;
    color : Black;
`
const ShoesContent = styled.p`
    font-size : 15px;
    color : grey;
`
const ShoesPrice = styled.p`
    font-size : 15px;
    color : grey;
`
// 인기상품 컴포넌트
function MainPopularItem({shoes, idx}) {
    const navigate = useNavigate();
    return (
        <>
            {
                idx < 21 
                ? (
                    <div className="col-md-4 populars" onClick={() => {navigate(`/detail/${shoes.id}`)}} id={styles.MainPopularItemDiv}>
                        <img 
                            src={`https://firebasestorage.googleapis.com/v0/b/shoes-shoppingmall.appspot.com/o/items%2Fshoes${idx}.jpg?alt=media`} 
                            width="80%" 
                            height="190px" 
                            className={styles.itemImage}
                        />
                        <ShoesTitle>{shoes.title}</ShoesTitle>
                        <ShoesContent>{shoes.content}</ShoesContent>
                        <ShoesPrice>{shoes.price}원</ShoesPrice>
                    </div>
                ) : null
            }
        </>        
    )
}

export default MainPopularItem;