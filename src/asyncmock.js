const products = [ 
    {
        id: 1,
        title: 'Pantalón Carlitos',
        description: 'Sublimados y confeccionados en talleres responsables en Argentina. No decolora y es súper fácil de lavar directo al lavarropas con agua fría. No recomendamos lavar a mano. Tela modal con lycra 70%poliester 30% algodón ',
        price: 3490,
        pictureUrl: 'https://chumipijamas.com.ar/wp-content/uploads/2021/11/MG_5709-scaled.jpg'
    },
    {
        id: 2,
        title: 'Pantalón Agus',
        description: 'Sublimados y confeccionados en talleres responsables en Argentina. No decolora y es súper fácil de lavar directo al lavarropas con agua fría. No recomendamos lavar a mano. Tela modal con lycra 70%poliester 30% algodón ',
        price: 3490,
        pictureUrl: 'https://chumipijamas.com.ar/wp-content/uploads/2021/11/MG_5795-scaled.jpg'
    },
    {
        id: 3,
        title: 'Pantalón Simba',
        description: 'Sublimados y confeccionados en talleres responsables en Argentina. No decolora y es súper fácil de lavar directo al lavarropas con agua fría. No recomendamos lavar a mano. Tela modal con lycra 70%poliester 30% algodón ',
        price: 3490,
        pictureUrl: 'https://chumipijamas.com.ar/wp-content/uploads/2021/11/MG_8651-scaled.jpg'
    },
    {
        id: 4,
        title: 'Pantalón Andy',
        description: 'Sublimados y confeccionados en talleres responsables en Argentina. No decolora y es súper fácil de lavar directo al lavarropas con agua fría. No recomendamos lavar a mano. Tela modal con lycra 70%poliester 30% algodón ',
        price: 3490,
        pictureUrl: 'https://chumipijamas.com.ar/wp-content/uploads/2021/11/MG_8750-scaled.jpg'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}