import React, {FC} from 'react';
import '../styles/Nav.scss'

const Nav: FC = () => {
    return (
        <div className="nav">
            <div>
                <img src={'/logo-red.png'} alt={'L\'avenir en commun'}/>
                <h1>Le contre mandat</h1>
            </div>
        </div>
    );
}

export default Nav;
