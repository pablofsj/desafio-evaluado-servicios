import { Router } from "express";
import { products } from "../data/products.data.js";

const router = Router()

// path URL = /products

router.get('/', (req, res) => {
    
    // leer queries
    const {order} = req.query

    if (order === 'asc') {
        products.sort((a, b) => a.price - b.price)
    }

    if (order === 'desc') {
        products.sort((a, b) => b.price - a.price)
    }

    res.render('products', { products });


});


export default router