import React from 'react'
import PropType from 'prop-types'

function Button({ onClick, text, className })
{

    return (
        <>
            <button
                onClick={onClick}
                className={className}>{text}
            </button>
        </>
    )
}

Button.protoType = {
    text: PropType.string.isRequired,
    className: PropType.object,
    onClick: PropType.func
}

export default Button