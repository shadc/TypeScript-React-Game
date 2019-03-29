import React from 'react';

interface IProps{
    name?: string,
    msg?: string
}

const Header = (props: IProps): any => {
    return (
    <h1 className='App-header'>Welcome, {props.name}! {props.msg}.</h1>
    )
}

Header.defaultProps = {
    name: 'user',
    msg: "let's play the game!"
}

export default Header;