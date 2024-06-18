import React from 'react'

const Buttons = ({
    label,
    disabled = false,
    className = '',
    type = 'button',
}) => {
  return (
    <>
       <button
        type={type}
        disabled={disabled}
        className={className}
        >
            {label}
    </button>
    </>
  )
}

export default Buttons;
