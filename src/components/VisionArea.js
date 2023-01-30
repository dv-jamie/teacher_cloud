import { Mobile, Pc } from "../mediaQuery";
import { Illust127 } from "../assets/illust";
import styles from "./VisionArea.module.css";

function VisionArea() {
    return (
        <div className={styles.container}>
            <div className={styles.content_wrap}>
                <span>선생님의 최고 메이트가</span>
                <span>되고자 합니다.</span>

                <p>
                    교사는 아이들과의 시간 외에 많은 업무를 합니다. <br />
                    그 시간을 1초라도 줄일 수 있도록 아이들과의 <br />
                    <Pc>
                        시간을 소중히 여기는 선생님의 메이트가 되고자 합니다.
                    </Pc>
                    <Mobile>
                        시간을 소중히 여기는 선생님의 메이트가<br />
                        되고자 합니다.
                    </Mobile>
                </p>

                <div className={styles.illust}>
                    <Illust127 />
                </div>
            </div>
        </div>
    );
}

export default VisionArea;