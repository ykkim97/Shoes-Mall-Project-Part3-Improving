import React from "react";
import DetailTab from "./DetailTab";
import ShipInfo from "./ShipInfo";


// 상품상세 , 상품평 , 배송안내 Part
function TabContent({tabs}) {
    if (tabs === 0) return <div><DetailTab /></div>
    else if (tabs === 1) return <div><ShipInfo /></div>
}

export default TabContent;  