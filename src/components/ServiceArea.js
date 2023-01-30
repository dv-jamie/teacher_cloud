import serviceContents from "../data/serviceContents.json";
import ServiceCard from './ServiceCard';
import styles from "./ServiceArea.module.css";
import { Mobile, Pc } from "../mediaQuery";

function ServiceArea() {
    return (
        <div className={styles.container}>
            <div className={styles.text_wrap}>
                <h2>
                    <Pc>
                        전국 모든 선생님을 위한 단 하나의 통합서비스
                    </Pc>
                    <Mobile>
                        전국 모든 선생님을 위한<br />단 하나의 통합서비스
                    </Mobile>
                </h2>
                <p>
                    <Pc>
                        <span>티처클라우드</span>는 구름처럼 선생님 곁에 떠있겠습니다.<br />
                        아이들의 놀이와 선생님의 문서 작업에 필요한 정보가 있다면 바로 검색하세요.
                    </Pc>
                    <Mobile>
                        <span>티처클라우드</span>는 구름처럼 선생님 곁에 떠있겠습니다.<br />
                        아이들의 놀이와 선생님의 문서 작업에<br />
                        필요한 정보가 있다면 바로 검색하세요.
                    </Mobile>
                </p>
            </div>
            <div className={styles.card_wrap}>
                {serviceContents.data.map(serviceContent => {
                    return (
                        <ServiceCard
                            key={serviceContent.id}
                            serviceContent={serviceContent}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default ServiceArea;