import './RootLayout.css'

import { Link, NavLink, Outlet } from "react-router-dom";
import image from './details/pokemon.png'



export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <Link to="/">
                    <img src={image} alt="" />
                </Link>

                <nav>







                    <NavLink to="/">Home</NavLink>




                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>

    )
}