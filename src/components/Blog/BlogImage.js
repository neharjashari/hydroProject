import React from 'react'
import Image from "gatsby-image"

const BlogImage = (props) => {
    console.log("PROPS:",props.src);
    
    return (
        <Image fluid={props.src} />
    )
}

export default BlogImage
