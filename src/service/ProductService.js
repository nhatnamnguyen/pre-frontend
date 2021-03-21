import Axios from "axios"

const instance = Axios.create({
    baseURL: "http://localhost:8080",
})

function getProducts() {
    return instance({
        url: "/products",
        method: "GET"
    }).then(response => {
        return response.data
    })
}

function getProductDetails(id) {
    return { id: id, name: "Cacao" }
}

export { getProducts, getProductDetails }