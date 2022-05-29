import React from "react";
import styles from "./DetailTab.module.css";

// 상품 상세 탭
function DetailTab() {
    return (
        <div className={styles["detailtab-div"]}>
            <h5 className={styles["detailtab-title"]}>필수 표기 정보</h5>
            <table className={styles["table-frame"]}>
                <colgroup>
                    <col width="25%" />
                    <col width="25%" />
                    <col width="25%" />
                    <col width="25%" />
                </colgroup>

                <tbody>
                    <tr>
                        <td className={styles.itemKey}>제품의 주 소재</td>
                        <td>컨텐츠 참조</td>
                        <td className={styles.itemKey}>제조국</td>
                        <td>대한민국</td>
                    </tr>
                    <tr>
                        <td className={styles.itemKey}>치수</td>
                        <td>230~260</td>
                        <td className={styles.itemKey}>품질보증기준</td>
                        <td>제품 이상 시 공정거래위원회 고시 소비자분쟁해결기준에 의거 보상합니다.</td>
                    </tr>
                    <tr>
                        <td className={styles.itemKey}>색상</td>
                        <td>화이트/블랙</td>
                        <td className={styles.itemKey}>취급시 주의사항</td>
                        <td>화기주의</td>
                    </tr>
                    <tr>
                        <td className={styles.itemKey}>제조자(수입자)</td>
                        <td>땡땡스니커즈(주)</td>
                        <td className={styles.itemKey}>A/S 책임자와 전화번호</td>
                        <td>010-****-****</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DetailTab;