
import React from 'react'

const Container = ({
    children,
    className
}:{children:React.ReactNode,className?:string}) => {
  return (
    <div className={`${className} max-w-[1920px] p-4 mx-auto`}>
        {children}
    </div>
  )
}

export default Container