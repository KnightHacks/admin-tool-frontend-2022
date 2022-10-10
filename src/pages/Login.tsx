import React from "react"
import '../components/login/Login.css'
import { ReactComponent as KHLogo } from '../assets/logo.svg'

export default function Login() {
    return (
	    <div id='page-container'>
            <div id='header-container'>
                <KHLogo id='page-header-icon'/>
                <h1 id='page-header-text'>Admin Tool</h1>
            </div>
            <div className='break' />
            <div id='login-contianer'>
                
            </div>
        </div>
    )
}