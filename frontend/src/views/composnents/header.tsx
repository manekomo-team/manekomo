import React from 'react';
import Logo from '../../img/logo/logo_ho-mu.png'

function HeaderMenu() {
    return (
        <div className="header">
            <div className="headerLogo">
                <img src={Logo} />
            </div>
            <nav>
                <ul>
                    <li><a href="#">まねこもについて</a></li>
                    <li><a href="#">保護者の皆様へ</a></li>
                    <li><a href="#">ヘルプ</a></li>
                    <li><a href="#">会員登録・ログイン</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderMenu;