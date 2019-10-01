function getProducts (req, res, next) {
    let products =
    [
        {
            "id": 1,
            "title": "title",
            "description": "description",
            "image": "https://image/url",
            "price": "10.99"
        }
    ];

    res.status(200).json(products)
}

function getProduct (req, res, next) {

}

export default {
    getProducts,
    getProduct
}
