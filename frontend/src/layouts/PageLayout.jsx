import {Navbar} from "../components/Navbar.jsx";

export const PageLayout = ({children}) => {
    return <>
        <Navbar/>
        <main className="flex justify-center">
            <div className="w-[900px]">
                {children}
            </div>
        </main>
    </>;
}
