import React from "react";
import AccountBox from "../components/accountBox/index";
import '../style.css';
const Log = () => {
    return (
        <div className="auth_bg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'} }>
            <AccountBox/>
        </div>
    );
}

export default Log;