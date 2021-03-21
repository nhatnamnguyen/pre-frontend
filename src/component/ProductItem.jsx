import { Container, Typography } from '@material-ui/core'
import React from 'react'

function ProductItem({id, name}) {
    return (
        <Container>
            <Typography>{id}</Typography>
            <Typography>{name}</Typography>
        </Container>
    )
}

export default ProductItem