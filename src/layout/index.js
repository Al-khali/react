import React from 'react'
import Nav  from './Nav'

const Layout = (props) => {
    return (
        <div>
            {props.children}
        </div>
    ) 
}

export { Layout, Nav }