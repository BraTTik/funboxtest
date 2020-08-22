import React from 'react';

const Circle = props => {
    const {
        backgroundColor,
        size
    } = props;
    const styles = {
        width: 80 + 'px',
        height: 80 + 'px',
        backgroundColor,
        borderRadius: 999+'px',
        position: 'absolute',
        right: '3%',
        bottom: '3%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all .2s ease-in-out',
    }
    return (
        <div style={styles}>
            <p style={ {fontSize: 2.625+'rem', color: 'white'} } >{size}</p>
            <p style={ {fontSize: '1.3125rem', color: 'white', lineHeight: '16px'} } >кг</p>
        </div>
    )
}

export default Circle;