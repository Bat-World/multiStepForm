import React from 'react'

export const Input = (props) => {
  const {className, name, onChange, ...rest} = props;
  return (
 <input
 className={className}
 onChange={onChange}
 name={name}
 {...rest} />
  )
}

