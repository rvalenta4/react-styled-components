import React from 'react'
import styled, {css} from 'styled-components'

const Button = ({className, children, click, hover}) => {
    return (
        <button 
            onClick={() => click()}
            onMouseEnter={() => hover()} className={className}>
            {children}
        </button>
    )
}

const StyledButton = styled(Button).attrs(({click, hover}) => ({click: click, hover: hover}))`
    color: palevioletred;
    font-size: 1.5rem;
    font-weight: bold;
    height: 2rem;
    cursor: pointer;
    ${props =>
        props.primary &&
        css`
            background: palevioletred;
            color: white;
        `
    };
`

export default StyledButton
