import React from 'react'
import styled, {css} from 'styled-components'

let Button = ({className, children, click, hover}) => {
    return (
        <button 
            onClick={() => click()}
            onMouseEnter={() => hover()} className={className}>
            {children}
        </button>
    )
}

const colors = {
    blue: '#4f7aab',
    red: 'dd1e15'
}

Button = styled(Button).attrs(({click, hover}) => ({click: click, hover: hover}))`
    color: ${colors.blue};
    font-size: 1.5rem;
    font-weight: bold;
    height: ${props => props.primary ? '3rem' : '2rem'};
    cursor: pointer;
    border: none;
    border-radius: 5px;
    ${props =>
        props.primary &&
        css`
            background-color: #4f7aab;
            color: white;
        `
    };
`

export default Button
