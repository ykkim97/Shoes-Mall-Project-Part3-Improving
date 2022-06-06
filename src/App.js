import React, { useState, useEffect, lazy, Suspense } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from "axios";
import popularData from './components/popularData';
import ScrollToTop from "./components/ScrollToTop";
import Loading from './components/Loading';
import './App.css';
import Home from './routes/Home';
import { getDatabase, onValue, ref } from "firebase/database";
import { auth } from './firebase';
import { onAuthStateChanged,signInWithEmailAndPassword } from 'firebase/auth';
const Detail = lazy(() => import("./routes/Detail.js"));
const Cart = lazy(() => import("./routes/Cart.js"));
const MyPage = lazy(() => import("./routes/MyPage.js"));
const Auth = lazy(() => import("./routes/Auth.js"));
const SignUp = lazy(() => import("./routes/SignUp.js"))
const ManShoes = lazy(() => import("./routes/ManShoes.js"));
const WomanShoes = lazy(() => import("./routes/WomanShoes.js"));
const KidsShoes = lazy(() => import("./routes/KidsShoes.js"));
// import Watched from './routes/Watched';
const Watched = lazy(() => import("./routes/Watched.js"));

function App() {
  const [popularShoes, setPopularShoes] = useState(popularData);
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [ax, setAx] = useState(false);

  // DB에서 데이터 불러오기
  useEffect(() => {
    if(!ax) {
      const database = getDatabase();
      const itemRef = ref(database, `anotherItem`);

      onValue(itemRef, (snapshot) => {
        let itemFromDB = snapshot.val();
        setPopularShoes([...popularShoes, ...itemFromDB]);
        setAx(true);
      })
    }
  }, [])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const loginInfo = JSON.parse(sessionStorage.getItem("loginInfo"));
        // const [userId, userPassword] = Object.values(loginInfo);
        // const user = signInWithEmailAndPassword(
        //   auth,
        //   userId,
        //   userPassword
        // );
        setIsLogged(true)
      }
    })
  }, [])


  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Suspense fallback={<Loading />}> 
          <Routes>
            {/* 메인 페이지 */}
            <Route exact path='/' element={
              <Home 
                popularShoes={popularShoes}
                isLogged={isLogged}
                setIsLogged={setIsLogged}
              />
            }></Route>

            {/* 로그인 페이지 */}
            <Route exact path='/auth' element={
                <Auth 
                  user={user} 
                  setUser={setUser}
                  isLogged={isLogged}
                  setIsLogged={setIsLogged}
                />
            }></Route>

            {/* 회원가입 페이지 */}
            <Route exact path='/auth/signup' element={
                <SignUp />
            }></Route>

            {/* 제품 별 상세페이지 */}
            <Route exact path='/detail/:id' element={
                <Detail 
                  popularShoes={popularShoes} 
                  setPopularShoes={setPopularShoes}
                  isLogged={isLogged}
                  setIsLogged={setIsLogged}
                />
            }></Route>

            {/* 남성신발 페이지 */}
            <Route exact path='/man' element={
                <ManShoes 
                  isLogged={isLogged}
                  setIsLogged={setIsLogged}
                  popularShoes={popularShoes}
                  setPopularShoes={setPopularShoes}
                  ax={ax}
                />
            }></Route>

            {/* 여성신발 페이지 */}
            <Route exact path='/woman' element={
                <WomanShoes 
                  isLogged={isLogged}
                  setIsLogged={setIsLogged}
                  popularShoes={popularShoes}
                  setPopularShoes={setPopularShoes}
                  ax={ax}
                />
            }></Route>

            {/* 키즈신발 페이지 */}
            <Route exact path='/kids' element={
                <KidsShoes 
                  isLogged={isLogged}
                  setIsLogged={setIsLogged}
                  popularShoes={popularShoes}
                  setPopularShoes={setPopularShoes}
                  ax={ax}
                />
            }></Route>

            {/* 장바구니 페이지 */}
            <Route exact path='/cart' element={
                <Cart 
                  isLogged={isLogged} 
                  setIsLogged={setIsLogged}
                />
            }></Route>

            {/* 마이 페이지 */}
            <Route exact path='/mypage' element={
                <MyPage isLogged={isLogged} setIsLogged={setIsLogged}/>
            }></Route>

            {/* 최근 본 상품 */}
            <Route exact path='/watched' element={
                <Watched 
                  isLogged={isLogged} 
                  setIsLogged={setIsLogged}
                  popularShoes={popularShoes}
                />
            }></Route>

            {/* 404에러 */}
            <Route path='*' element={
              <div>
                <img src='/img/404error.jpg'></img>
              </div>
            }></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
