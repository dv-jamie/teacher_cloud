import { Illust130 } from '../assets/illust';
import styles from "./JoinArea.module.css";

function JoinArea() {
    return (
        <div className={styles.container}>
            <div className={styles.content_wrap}>
                <div className={styles.text_wrap}>
                    <div className={styles.title}>신학기 전에</div>
                    <div className={styles.title}>미리 만나요!</div>
                    <div className={styles.date}>2023.02.16</div>
                    <div className={styles.coming}>COMING SOON</div>
                </div>
                <Illust130 />
            </div>
                <button className={styles.join_button}>회원 가입하기</button>
        </div>
    );
}

export default JoinArea;