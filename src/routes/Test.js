import axios from "axios";
import React, { useEffect, useState } from "react";
import MainNavbar from "../components/MainNavbar";
import MainPopularItem from "../components/MainPopularItem";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";

const databaseURL = "https://shoes-shoppingmall-default-rtdb.asia-southeast1.firebasedatabase.app";

function Test({popularShoes, isLogged, setIsLogged}) {
    const [anotherItem, setAnotherItem] = useState([]);
    const [anotherItemTest, setAnotherItemTest] = useState([]);
    const count = [0];

    // axios로 json url에 요청해서 데이터를 불러오는 방법 (원래 쓰던 방법)
    // const getAnotherItem = () => {
    //     axios.get(`${databaseURL}/anotherItem.json`)
    //     .then((result) => {
    //         setAnotherItem([...popularShoes, ...result.data]);
    //         console.log(anotherItem);
    //     })
    //     .catch(() => {
    //         console.log('에러발생!')
    //     })
    // }


    //공식문서에 나와있는 firebase db에서 데이터를 읽는 방법 (새롭게 찾은 방법)
    // 공식문서 링크
    // https://firebase.google.com/docs/database/web/start (실시간 데이터베이스 초기설정)
    // https://firebase.google.com/docs/database/web/read-and-write (데이터쓰기, 읽기, 업데이트, 삭제 방법)

    const Ref = ref(database, 'anotherItem/');

    useEffect(() => {
        onValue(Ref,(snapshot) => {
            const tests = snapshot.val();
            console.log(tests); // DB에서 불러온 Array
            setAnotherItemTest([...popularShoes, ...tests])
        })
    }, [])
    // 여기까지

    return (
        <>
            <MainNavbar isLogged={isLogged} setIsLogged={setIsLogged}/>
            <h3>테스트해보는 페이지</h3>
            <button>이 버튼 누르면 DB에서 데이터 불러옴</button>

            {/* axios로 json url에 요청해서 불러오는 방법으로 불러오는 것  */}
            {/* <div>
                {anotherItem.map((shoes, idx) => {
                    return (
                        <MainPopularItem shoes={shoes} idx={idx} key={idx}/>
                    )
                })}
            </div> */}

            {/* 공식문서에 나와있는 firebase db에서 데이터를 읽는 방법으로 불러온 것 */}
            <div>
                {anotherItemTest.map((shoes, idx) => {
                    return (
                        <MainPopularItem shoes={shoes} idx={idx} key={idx}/>
                    )
                })}
            </div>
        </>
    )
}

export default Test;