import React from 'react';
import {useState} from 'react';

function EventMouse({beforeSrc, afterSrc, alt, className}) {
    // 現在表示している画像
    const [current, setCurrent] = useState(beforeSrc);
    // イベントハンドラーを準備
    // カーソルが入った時afterSrc
    const handleEnter = () => setCurrent(afterSrc);
    // カーソルが出た時beforeSrc
    const handleLeave = () => setCurrent(beforeSrc);
    return(
        <img src={current} alt={alt} className={className} onMouseEnter={handleEnter} onMouseLeave={handleLeave} />
    )
}

export default EventMouse;