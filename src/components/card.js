import React from "react"

import {Box, Card, Heading, Link, Text} from 'rebass'
import styled, {createGlobalStyle} from 'styled-components'

const BlogCard = () => {
    return (
        <Card
            fontSize={6}
            fontWeight='bold'
            width={[
            1, 1, 1 / 2
        ]}
            p={5}
            my={5}
            bg='#f6f6ff'
            borderRadius={8}
            boxShadow='0 2px 16px rgba(0, 0, 0, 0.25)'>
            Card
        </Card>
    )
}
export default BlogCard;