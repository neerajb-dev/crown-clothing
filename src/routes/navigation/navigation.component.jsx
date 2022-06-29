import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <div className="nav-links-container">
                    <Link className="logo-container" to="/">
                        <CrownLogo className="logo" />
                    </Link>
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        SignIn
                    </Link>
                </div>
                <Outlet />
            </div>
        </>
    )
};

export default Navigation;
