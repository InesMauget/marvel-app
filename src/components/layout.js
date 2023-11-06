import { NavLink, Outlet } from "react-router-dom";

function Root() {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/characters">Characters</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </header>
            <div className="content">
                <Outlet />
            </div>
        </>
    );
}

export default Root;