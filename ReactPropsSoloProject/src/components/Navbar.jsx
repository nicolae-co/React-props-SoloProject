import earthLogo from "../svg/earth.svg"

function Navbar() {
    return (
        <nav className="nav">
            <img src={earthLogo} className="nav--earth" alt="Earth logo" />
            <h3 className="nav--title">my travel journal</h3>
        </nav>
    )
}

export default Navbar
