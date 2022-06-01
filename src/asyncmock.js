const products = [ 
    {
        id: 1,
        title: 'Pantalón Carlitos',        
        description: 'Sublimados y confeccionados en talleres responsables en Argentina. Tela modal con lycra 70%poliester 30% algodón ',
        price: 3490,
        category: 'pijamas',
        pictureUrl: 'https://chumipijamas.com.ar/wp-content/uploads/2021/11/MG_5709-scaled.jpg'
    },
    {
        id: 2,
        title: 'Pantalón Agus',
        description: 'Sublimados y confeccionados en talleres responsables en Argentina. Tela modal con lycra 70%poliester 30% algodón ',
        price: 3490,
        category: 'pijamas',
        pictureUrl: 'https://chumipijamas.com.ar/wp-content/uploads/2021/11/MG_5795-scaled.jpg'
    },
    {
        id: 3,
        title: 'Pantalón Simba',
        description: 'Sublimados y confeccionados en talleres responsables en Argentina. Tela modal con lycra 70%poliester 30% algodón ',
        price: 3490,
        category: 'pijamas',
        pictureUrl: 'https://chumipijamas.com.ar/wp-content/uploads/2021/11/MG_8651-scaled.jpg'
    },
    {
        id: 4,
        title: 'Pantalón Andy',
        description: 'Sublimados y confeccionados en talleres responsables en Argentina. Tela modal con lycra 70%poliester 30% algodón ',
        price: 3490,
        category: 'Pijama',
        pictureUrl: 'https://chumipijamas.com.ar/wp-content/uploads/2021/11/MG_8750-scaled.jpg'
    },
    {
        id: 5,
        title: 'Wide Leg Shuli',
        description: 'Jean tipo Wide Leg con roturas. Liso. Tiro medio. 85% algodón, 15% poliéster. No-elástico.',
        price: 6180,
        category: 'jeans',
        pictureUrl: 'https://img.ltwebstatic.com/images3_pi/2021/11/24/16377231050fe8969fa51497e359923b9ac30404ae_thumbnail_600x.webp'
    },
    {
        id: 6,
        title: 'Mom Sasha',
        description: 'Jean tipo Mom, con estampado de mariposas. 85% algodón, 15% poliéster. Tiro alto. No-elástico. Gris.',
        price: 6180,
        category: 'jeans',
        pictureUrl: 'https://img.ltwebstatic.com/images3_pi/2021/10/08/1633665756556ec8d582116262e689d205fa39300d_thumbnail_600x.webp'
    },
    {
        id: 7,
        title: 'Boyfriend Zoe',
        description: 'Jean tipo Boyfriend con desgarre. Tiro alto. No-elástico. 93% algodón, 4% poliéster. ',
        price: 6180,
        category: 'jeans',
        pictureUrl: 'https://img.ltwebstatic.com/images3_pi/2021/10/26/1635242202aabe360b9dd92726f2f3db241f593066_thumbnail_600x.webp'
    },
    {
        id: 8,
        title: 'Top Harry',
        description: 'Top corto de leopardo, con aro. 100% poliéster.',
        price: 1400,
        category: 'tops',
        pictureUrl: 'https://img.ltwebstatic.com/images3_pi/2022/02/23/1645595486f832b6d297b9eb406a87c3d47b8a1c8a_thumbnail_600x.webp'
    },
    {
        id: 9,
        title: 'Top Federica',
        description: 'Top escote un hombro, sin mangas, liso, composición: 96% rayón, 4% spandex.',
        price: 1590,
        category: 'tops',
        pictureUrl: 'https://img.ltwebstatic.com/images3_pi/2022/01/12/1641965440038fdf8126dadbdb369279d1d84878aa_thumbnail_600x.webp'
    },
    {
        id: 10,
        title: 'Top Alba',
        description: 'Top con hombros descubiertos, mangas con volante, corto, 100% poliéster.',
        price: 1900,
        category: 'tops',
        pictureUrl: 'https://img.ltwebstatic.com/images3_pi/2021/06/03/16226882941075bd228eeab7e59d487f3f892f7b79_thumbnail_600x.webp'
    },
    {
        id: 11,
        title: 'Top Corset',
        description: 'Top corset floral, no elástico. 100& poliéster.',
        price: 2800,
        category: 'tops',
        pictureUrl: 'https://img.ltwebstatic.com/images3_pi/2021/05/18/1621323330ceb5d89057ab2b7ec239b79fcea94e20_thumbnail_600x.webp'
    },
    {
        id: 12,
        title: 'Pulseras',
        description: 'Set 6 piezas pulseras de cadena simple.',
        price: 600,
        category: 'accesorios',
        pictureUrl: 'https://img.ltwebstatic.com/images3_pi/2021/10/21/16348088674d5f985743f5a891eaabfcfc05b18d09_thumbnail_600x.webp'
    },
    {
        id: 13,
        title: 'Caderin mariposas',
        description: 'Cadena de cintura de color metálico con diseño de mariposas. Dorado.',
        price: 450,
        category: 'accesorios',
        pictureUrl: 'https://img.ltwebstatic.com/images3_pi/2021/11/16/1637060623411128fd6a9d6fbbaecd557b87e49144_thumbnail_600x.webp'
    },
    {
        id: 14,
        title: 'Collar geométrico',
        description: 'Colgante a capas con diseño geométrico. 1 pieza',
        price: 450,
        category: 'accesorios',
        pictureUrl: 'https://img.ltwebstatic.com/images3_pi/2020/07/29/15960060930efcb4fdf28f48f4c1bc4e5ba0f57386_thumbnail_600x.webp'
    },
    {
        id: 15,
        title: 'Set 5 pares de aros',
        description: '20 piezas de aros con diseño de perla artificial. Dorado. Tipo de material: Aleación de Zinc.',
        price: 1070,
        category: 'accesorios',
        pictureUrl: 'https://img.ltwebstatic.com/images3_pi/2022/04/13/16498454150b5ca7ea7041d9fcaa041d0583d22005_thumbnail_600x.webp'
    },
    

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

/* export const getItem = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products[0])
        }, 2000)
    })
} */

export const getItem = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.filter((product) => {
                    return product.id == itemId
                })
            resolve(product)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.filter((product) => {
                    return product.category == categoryId
                })
            resolve(product)
        }, 500)
    })
}