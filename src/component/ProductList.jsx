import MaterialTable from 'material-table'
import React, { useEffect, useState } from 'react'
import { getProducts } from '../service/ProductService'
import materialTableIcons from './MaterialTableIcons'

function ProductList() {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data)
        })
    }, [])

    return (
        <MaterialTable
            columns={[
                { title: 'Id', field: 'id' },
                { title: 'name', field: 'name' }
            ]}
            data={products}
            title="Products liste"
            icons={materialTableIcons}
        />
    )
}

export default ProductList