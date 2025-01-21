import React from 'react'

export const Input = (props) => {
  const {className, ...rest} = props;
  return (
 <input
 className={className}
 {...rest} />
  )
}

