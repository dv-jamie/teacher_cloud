import {
    Group116,
    Group117,
    Group118,
    Group119,
    Group122,
    Group123
} from "../assets/illust";
import styles from "./IntroduceArea.module.css";

function IntroduceArea() {
    return (
        <div className={styles.container}>
            <div className={styles.content_wrap}>
                <h1>어린이집, 유치원을 위한 친절한 업무 메이트!</h1>
                <h2>선생님이 직접 만든 유아교육 정보 플랫폼</h2>

                <div className={styles.illust_wrap}>
                    <div className={styles.illust_group_1}>
                        <Group116 />
                        <Group117 />
                        <Group118 />
                    </div>
                    <div className={styles.illust_group_2}>
                        <Group119 />
                        <Group122 />
                        <Group123 />
                    </div>
                </div>

                <p>
                    교사가 경험한, 교사가 원하는 정보. 티처클라우드는 알고 있으니까!
                </p>
            </div>
        </div>
    );
}

export default IntroduceArea;