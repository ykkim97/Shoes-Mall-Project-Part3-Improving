// 상품 상세 정보 Page(상품별 정보)

import React,{useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import styles from "./Detail.module.css"
import { Nav } from "react-bootstrap";
import Footer from "../components/Footer";
import TabContent from "../components/TabContent";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// styled-components
const Btn = styled.button`
    background : ${ props => props.bg };
    color : black;
    padding : 10px;
    border-radius : 5px
`

const GreyBox = styled.div`
    background : grey;
    padding : 20px;
    text-align : center;
`

function Detail({popularShoes,setPopularShoes,isLogged,setIsLogged}) {
    const [tabs, setTabs] = useState(0);
    const [isAlert, setIsAlert] = useState(true);

    const navigate = useNavigate();
    let { id } = useParams();
    let findItem = popularShoes.find(item => item.id == id);
    
    const basketState = useSelector(state => state.basketReducer);
    const dispatch = useDispatch();
    const addBasket = () => {
        dispatch({type : "항목추가", payload : {id : findItem.id, name : findItem.title, quan : 1, price : findItem.price}});
        alert('장바구니에 상품이 담겼습니다.')
    }

    // localStorage에 최근 본 상품 ID값 넣기
    useEffect(() => {
        let watchedArray = localStorage.getItem('watched');

        if (watchedArray == null) {
            watchedArray = []; // localStorage가 비어있을 경우 빈 array로 만듬
        } else {
            watchedArray = JSON.parse(watchedArray); // JSON자료를 Array로 변환해서 가져옴
        }

        watchedArray.unshift(findItem.id); // 가져온 기존 array에 상품 ID값을 푸시
        watchedArray = new Set(watchedArray); // 상품 ID가 중복되는 것을 막기위해 Set으로 중복 제거
        watchedArray = [...watchedArray]; // Set자료형에서 다시 Array로 변환

        localStorage.setItem('watched', JSON.stringify(watchedArray)) // localStorage에 다시 JSON자료형으로 넣어줌 
    }, [])

    // 품절 임박 메세지 타이머 실행
    useEffect(() => {
        const timer = setTimeout(() => setIsAlert(false),3000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <MainNavbar isLogged={isLogged} setIsLogged={setIsLogged}/>

            {/*  쿠폰증정 광고창    
            <GreyBox>
                <h3>신규 고객 대상 30% 할인 쿠폰 증정</h3>
                <Btn bg="yellow">쿠폰발급받기</Btn>
            </GreyBox> */}

            <h1 className={styles.detailInfoTitle}>상품 정보</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 detailInfo">
                        <img src={`https://raw.githubusercontent.com/younggwons/younggwons.github.io/master/item/shoes${findItem.id}.jpg`} width="100%" />
                    </div>
                    <div className="col-md-12" id={styles.detailInfo}>
                        <h4 className="pt-5">{findItem.title}</h4>
                        <p>{findItem.content}</p>
                        <p id={styles.detailPrice}>판매가 : {findItem.price}원</p>

                        <button className="btn btn-primary" id={styles.putIn}
                            onClick={addBasket}
                        >장바구니담기</button>
                        <button className="btn btn-primary" id={styles.goBasket}
                            onClick={() => navigate('/cart')}
                        >장바구니로</button>
                        <button className="btn btn-success" id={styles.goPurchase}>바로구매</button> 
                        <button className="btn btn-danger" id={styles.goBack} onClick={() => navigate(-1)}>뒤로가기</button> 
                    </div>
                </div>

                {
                    isAlert === true 
                    ? (
                        (<div className={styles.salesAlert}>
                            <p>🔴 품절임박 : 재고가 얼마남지 않았습니다. 🔴</p>
                        </div>)
                    ) : null
                }

                <Nav className="mt-5" variant="tabs" defaultActiveKey="/link-0">
                    <Nav.Item>
                        <Nav.Link eventKey="link-0" onClick={() => {setTabs(0)}}>상품상세</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={() => {setTabs(1)}}>상품평</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={() => {setTabs(1)}}>배송/교환/반품 안내</Nav.Link>
                    </Nav.Item>
                </Nav>
                
                <TabContent tabs={tabs} />
            </div> 

            <Footer />
        </>
    )
}

export default Detail;