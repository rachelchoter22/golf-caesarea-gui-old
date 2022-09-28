import '../css/golf-rtl.css'
import '../css/golfstyle.css'
import '../css/reset.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Rules(props) {
    const { setConnect, connect} = props;
    const handleOnChange = () => {
        debugger
        setConnect(!connect);
    };
    return (
        <div>
            Rules תקנון האתר

            <Link to="/Login">
                <button >
                    חזור
                </button>
            </Link>

            <Link to="/Login">
                <button onClick={handleOnChange}>
                    אישור
                </button>
            </Link>
        </div>
    )
}