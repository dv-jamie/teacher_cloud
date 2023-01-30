import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li>주식회사 옐로우보드</li>
                <li>대표이사 : 이재필</li>
                <li>사업자 번호 : 672-87-02347</li>
            </ul>
            <ul>
                <li>
                    주소 : 서울특별시 강남구 강남대로 314(역삼동, 서우빌딩) 별관 3층
                </li>
                <li>
                    통신판매업신고번호 : 2022-서울강남-04885
                </li>
            </ul>
        </div>
    );
}

export default Footer;