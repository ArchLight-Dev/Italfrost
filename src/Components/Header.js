import React from 'react';
import logo from '../Art/logo-xs.png';

function Header(props) {
    return (
        <header className={'header'}>
            <img src={logo} alt={'logo'} className={'logo'}/>
            <div className={'subpages'}>
                <h2 className={'link subpage active'}>Home</h2>
                <h2 className={'link subpage active'}>Aktualności</h2>
                <h2 className={'link subpage active'}>Wiedza</h2>
                <h2 className={'link subpage active'}>O nas</h2>
                <h2 className={'link subpage active'}>Kontakt</h2>
            </div>
        </header>
    );
}

export default Header;