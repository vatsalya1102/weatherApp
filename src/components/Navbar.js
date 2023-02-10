import "./Navbar.css"

export default function Navbar() {
    return (
        <div>
        <nav>
            <h1>Thunder</h1>
            <div>
                <ul>
                    <li><a className="nav-option" href="index.html">About</a></li>
                    <li><a className="nav-option" href="index.html">Live</a></li>
                </ul>
            </div>
        </nav>
        </div>
    )
}

