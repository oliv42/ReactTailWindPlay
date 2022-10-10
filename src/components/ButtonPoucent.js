import React from 'react'

export default function ButtonPoucent(props) {
    const styleTailwind =
    `block uppercase mx-auto my-3 shadow text-white bg-${props.bgColor} hover:bg-${props.hoverBgColor} focus:shadow-outline focus:outline-none text-xs py-3 px-10 rounded`
  return (
    <button className={styleTailwind}>+ %</button>
  )
}