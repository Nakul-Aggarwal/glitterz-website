import NavbarButton from './NavbarButton.js'
import imageResource from '../../assests/ImageResources.js'

const Navbar = () => {

    const navbarButtons = {
        "About Us": "#about",
        "Services": "#services",
        "Portfolio": "#portfolio",
        "Team": "#team",
        "Contact Us": "#contact"
    };

    return (
        <>
            <div className="container-fluid d-flex">

                <nav className="nav-menu d-none d-lg-block">
                    <a class="navbar-brand">
                        <img src={imageResource['glitterzLogo']} height="50" alt="Glitterz Logo" />
                    </a>
                    <div class="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="active"><a href="index.html">Home</a></li>
                            {/* console.log(key + " : " + navbarButtons[key]); */}
                            {
                                Object.keys(navbarButtons).map((key, index) => (
                                    <NavbarButton name={key} id={navbarButtons[key]} key={index}></NavbarButton>
                                ))
                            }
                            <li className="get-started"><a href="#about">Get Started</a></li>
                        </ul>
                    </div>
                </nav>

            </div>
        </>
    );
}

export default Navbar