import {
    Service1,
    Service2,
    Service3,
    Service4,
    Service5,
    Service6,
    Service7,
    Service8,
    Service9,
    Service10,
    Service11,
    Service12,
} from '../assets/illust';
import styles from "./ServiceCard.module.css";

function ServiceCard({ serviceContent }) {
    return (
        <div className={styles.container}>
            <div className={styles.id}>Service {serviceContent.id}</div>
            <div className={styles.title}>{serviceContent.title}</div>
            <h4 className={styles.sub_title}>{serviceContent.subTitle}</h4>
            <p className={styles.description}>{serviceContent.description}</p>
            <div className={styles.illust}>
                {returnIcon(serviceContent.id)}
            </div>
        </div>
    );
}

const returnIcon = (id) => {
    switch(id) {
        case 1: return <Service1 />
        case 2: return <Service2 />
        case 3: return <Service3 />
        case 4: return <Service4 />
        case 5: return <Service5 />
        case 6: return <Service6 />
        case 7: return <Service7 />
        case 8: return <Service8 />
        case 9: return <Service9 />
        case 10: return <Service10 />
        case 11: return <Service11 />
        case 12: return <Service12 />
    }
}

export default ServiceCard;