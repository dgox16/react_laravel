import {Navbar} from "../components/Navbar.jsx";

export const PageLayout = ({children}) => {
    return <>
        <Navbar/>
        <main>{children}</main>
    </>;
}
