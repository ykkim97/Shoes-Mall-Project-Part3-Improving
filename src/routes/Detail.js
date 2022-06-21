// 상품 상세 정보 Page(상품별 정보)

import React,{useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import styles from "./Detail.module.css"
import { Nav } from "react-bootstrap";
import Footer from "../components/Footer";
import TabContent from "../components/TabContent";
import { useDispatch, useSelector } from "react-redux";
import { getDatabase, onValue, ref, update } from "firebase/database";
import { getAuth } from "firebase/auth";
import AddBasketModal from "../components/AddBasketModal";

function Detail({popularShoes,setPopularShoes,isLogged,setIsLogged}) {
    const [tabs, setTabs] = useState(0);
    const [isAlert, setIsAlert] = useState(true);
    const [itemCount, setItemCount] = useState(1);

    // 장바구니 클릭 Modal Switch
    const [addBasketModalOn, setAddBasketModalOn] = useState(false);

    let { id } = useParams();
    let findItem = popularShoes.find(item => item.id == id);

    const basketState = useSelector(state => state.basketReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const onOpenModal = () => {
        setAddBasketModalOn(!addBasketModalOn)
    }
    
    const addBasket = () => {
        if (isLogged) {
            const database = getDatabase();
            const auth = getAuth();
            const userId = auth.currentUser.uid;
            

            // 경로 => users/${userId}/cart
            const cartRef = ref(database, `users/${userId}/cart`);

            // 장바구니에 넣을 Object형식 - cartFormat
            let cartFormat = {id : findItem.id, name : findItem.title, quan : itemCount, price : findItem.price};
            // DB에서 가져온것을 저장할 변수 - cartArray
            let cartArray;
            onValue(cartRef, (snapshot) => {
                cartArray = snapshot.val();
            })
            // cartArray가 비어있다면 []로 만들기
            if (cartArray == null) {
                cartArray = [];
            }

            // 장바구니에 동일한 상품이 있는지 확인하기 위한 addFound
            // 동일한 상품이 있으면 수량을 1 증가하고 상품이 없으면 cartFormat을 넣기
            let addFound = cartArray.findIndex((item) => item.id === cartFormat.id);
            if (addFound >= 0) {
                cartArray[addFound].quan = parseInt(cartArray[addFound].quan) + parseInt(itemCount); 
            } else {
                cartArray.push(cartFormat);
            }
            // cartArray를 실제 DB에 업데이트 하기
            update(ref(database, `users/` + userId), {
                cart: cartArray,
            })
            
        } else {
            dispatch({type : "항목추가", payload : {id : findItem.id, name : findItem.title, quan : itemCount, price : findItem.price}});
        }
        onOpenModal();
    }

    const onChange = (e) => {
        setItemCount(e.target.value);
        console.log(itemCount)
    }

    const addItemCount = () => {
        setItemCount(itemCount+1)
    }

    const minusItemCount = () => {
        if (itemCount > 1) setItemCount(itemCount-1)
    }
    
    // 최근 본 상품 ID값 넣기
    useEffect(() => {
        if(isLogged) {
            const database = getDatabase();
            const auth = getAuth();
            const userId = auth.currentUser.uid;

            const Ref = ref(database, `users/${userId}/history`);
            let watchedArray;

            onValue(Ref,(snapshot) => {
                watchedArray = snapshot.val();
            })

            if (watchedArray == null) {
                watchedArray = []; // localStorage가 비어있을 경우 빈 array로 만듬
            }

            watchedArray.unshift(findItem.id); // 가져온 기존 array에 상품 ID값을 푸시
            watchedArray = new Set(watchedArray); // 상품 ID가 중복되는 것을 막기위해 Set으로 중복 제거
            watchedArray = [...watchedArray]; // Set자료형에서 다시 Array로 변환

            update(ref(database, `users/` + userId), {
                history: watchedArray,
            })
        }
        else {
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
        }
        
    }, [])

    // 품절 임박 메세지 타이머 실행
    useEffect(() => {
        const timer = setTimeout(() => setIsAlert(false),3000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <MainNavbar isLogged={isLogged} setIsLogged={setIsLogged}/>

            <h1 className={styles.detailInfoTitle}>상품 정보</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 detailInfo">
                        <img src={`https://firebasestorage.googleapis.com/v0/b/shoes-shoppingmall.appspot.com/o/items%2Fshoes${findItem.id}.jpg?alt=media`} width="100%" />
                    </div>
                    <div className="col-md-12" id={styles.detailInfo}>
                        <h4 className="pt-5">{findItem.title}</h4>
                        <p>{findItem.content}</p>
                        <p id={styles.detailPrice}>판매가 : {findItem.price}원</p>

                        <div className={styles.menu}>
                            {/* 수량 */}
                            <div className={styles.countDiv}>
                                <input type="text" value={itemCount} onChange={onChange} id={styles.itemCount}></input>
                                <button onClick={addItemCount} id={styles.plusBtn}>+</button>
                                <button onClick={minusItemCount} id={styles.minusBtn}>-</button>
                            </div>

                            <button className="btn btn-primary" id={styles.putIn}
                                onClick={addBasket}
                            >장바구니담기</button>

                            {/* 장바구니담기 클릭 시 Modal창 띄우기 */}
                            {
                                addBasketModalOn ? <AddBasketModal onOpenModal={onOpenModal}/> : null
                            }

                            <button className="btn btn-primary" id={styles.goBasket}
                                onClick={() => navigate('/cart')}
                            >장바구니로</button>
                            <button className="btn btn-success" id={styles.goPurchase}>바로구매</button> 
                            <button className="btn btn-danger" id={styles.goBack} onClick={() => navigate(-1)}>뒤로가기</button> 
                        </div>
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
            <Footer addBasketModalOn={addBasketModalOn}/>
            
        </>
    )
}

export default Detail;