import { useMediaQuery } from "react-responsive";

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 1024 })
    return <>{ isMobile && children }</>
}

const Pc = ({ children }) => {
    const isPc = useMediaQuery({ minWidth: 1025 })
    return <>{ isPc && children }</>
}

export { Mobile, Pc };