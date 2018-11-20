import React from 'react';
import './menu.css'

export default class Menu extends React.Component {
    render() {
        return (
            <div>
                <ul className='menuList'>
                    <li className='lis'>Jogar</li>
                    <li className='lis'>Sair</li>
                </ul>
            </div>
        )
    }
}