import {
    Group116,
    Group117,
    Group118,
    Group119,
    Group122,
    Group123
} from "../assets/illust";
import { Mobile, Pc } from "../mediaQuery";
import styles from "./IntroduceArea.module.css";

function IntroduceArea() {
    return (
        <div className={styles.container}>
            <div className={styles.content_wrap}>
                <h1>
                    <Pc>
                        어린이집, 유치원을 위한 친절한 업무 메이트!
                    </Pc>
                    <Mobile>
                        어린이집, 유치원을 위한<br />친절한 업무 메이트!
                    </Mobile>
                </h1>
                <h2>
                    <Pc>
                        선생님이 직접 만든 유아교육 정보 플랫폼
                    </Pc>
                    <Mobile>
                        선생님이 직접 만든<br />유아교육 정보 플랫폼
                    </Mobile>
                </h2>

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
                    <Pc>
                        교사가 경험한, 교사가 원하는 정보. 티처클라우드는 알고 있으니까!
                    </Pc>
                    <Mobile>
                        교사가 경험한, 교사가 원하는 정보.<br />
                        티처클라우드는 알고 있으니까!
                    </Mobile>
                </p>
            </div>
        </div>
    );
}

export default IntroduceArea;