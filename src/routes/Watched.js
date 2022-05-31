import React, { useEffect, useState } from "react";
import MainNavbar from "../components/MainNavbar";
import styles from "./Watched.module.css";
import ItemHistory from "../components/ItemHistory";
import { get, getDatabase, onValue, ref, update } from "firebase/database";
import { getAuth } from "firebase/auth";

function Watched({popularShoes, isLogged, setIsLogged}) {
    // localstorage에서 가져온 id값을 저장할 state
    const [watchedItemID , setWatchedItemID] = useState([]);
    
    // localstorage에서 가져오는 과정
    useEffect(() => {
        if(isLogged) {
            const database = getDatabase();
            const auth = getAuth();
            const userId = auth.currentUser.uid;
            const Ref = ref(database, `users/${userId}/history`);

            onValue(Ref,(snapshot) => {
                let storage = snapshot.val();
                if (storage == null) storage = [];
                setWatchedItemID([...storage]);
            })
        } else {
            let storage = localStorage.getItem('watched');
            if (storage == null) storage = []; // localStorage가 비어있다면 빈 배열로
            else storage = JSON.parse(storage);
            setWatchedItemID([...storage]);
        }
    }, [])

    return (
        <div>
            <MainNavbar isLogged={isLogged} setIsLogged={setIsLogged}/>
            <h3 className={styles.watchedTitle}>최근 본 상품</h3>
            <hr />
            <div className={styles.watchedItemDiv}>
                {
                    watchedItemID.length === 0 
                    ? <h3 className={styles.emptyMessage}>최근 본 상품이 없어요!</h3> 
                    : (watchedItemID.map((idx) => {
                        return (
                            <ItemHistory shoes={popularShoes[idx]} key={idx} idx={idx} />
                        )
                    }))
                }
            </div>
        </div>
    )
}

export default Watched;
