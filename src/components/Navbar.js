import React, { Component } from 'react';
import bank from '../Slogo.png';

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-dark fixed-top shadow p-0' style={{backgroundColor: 'white', height: '50px'}}>
                <div className='navbar-brand col-sm-3 col-md-2 mr-0'
                     style={{color: 'black', background: 'none', border: 'none', display: 'flex', alignItems: 'center', marginLeft: '5px'}}>
                    <img src={bank} width='50' height='30' className='d-inline-block align-top' alt='Slogo'/>
                    <span style={{marginLeft: '10px'}}>STAKEFI</span>
                </div>
                <div style={{marginLeft: '2px', display: 'flex', alignItems: 'center'}}>
                    <button className='btn btn-link' style={{color: 'black'}}>Markets</button>
                    <button className='btn btn-link' style={{color: 'black'}}>Trade</button>
                    <button className='btn btn-link' style={{color: 'black'}}>Discover</button>
                    <button className='btn btn-link' style={{color: 'black'}}>Buy Crypto</button>
                    <button className='btn btn-link' style={{color: 'black'}}>About</button>
                </div>
                <ul className='navbar-nav px-3 ml-auto'>
                    <li className='text-nowrap d-none nav-item d-sm-none d-sm-block'>
                        <small id='' style={{color: 'black'}}> ACCOUNT NUMBER: {this.props.account}</small>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
