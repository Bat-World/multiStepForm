import React from 'react'

export const Input = (props) => {
  const {className, name, onchange, ...rest} = props;
  return (
 <input
 className={className}
 onchange={onchange}
 name={name}
 {...rest} />
  )
}

