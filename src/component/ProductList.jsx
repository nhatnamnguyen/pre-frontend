import MaterialTable from 'material-table'
import React, { useEffect, useState } from 'react'
import { getProducts } from '../service/ProductService'

function ProductList({searchText}) {

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
        />
    )
}

export default ProductList