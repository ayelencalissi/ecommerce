import { db } from ".";
import { addDoc, getDocs, getDoc, doc, collection, query, where, documentId, writeBatch } from "firebase/firestore";

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId ?
            query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

            getDocs(collectionRef).then(response => {
                const products = response.docs.map(doc => {
                    return { 
                        id: doc.id,
                        ...doc.data()
                    }
                })
                resolve(products)
            }).catch(error => {
                reject(error)
            })         
    })
}

export const getProduct = (productId) => {
    return new Promise((resolve, reject) => {
        getDoc(doc(db, 'products', productId)).then(response => {
            const product = {
                id: response.id,
                ...response.data()
            }
            resolve(product)
        }).catch(error => {
            reject(error)
        })
    })
}

export const createOrder = (objOrder, cart) => {
    const fueraDeStock = []
    const collectionRef = collection(db, 'products')
    const batch = writeBatch(db)
    const idsDelCart = cart.map(prod => prod.id)

    return new Promise((resolve, reject) => {
        getDocs(query(collectionRef, where(documentId(), 'in', idsDelCart)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        fueraDeStock.push({ id: doc.id, ...dataDoc})
                    }
                    })
            }).then(() => {
                if(fueraDeStock.length === 0) {
                    const collectionRef = collection(db, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {                
                    alert('No hay stock suficiente')
                }
            }).then(({ id }) => {
                console.log('entre aca')
                batch.commit()
                resolve(id)
            }).catch(error => {
                reject(error)
            })
    })
}

export const getCategories = () => {
    const collectionRef = collection(db, 'categories')
    return new Promise((resolve, reject) => {
        getDocs(collectionRef).then(response => {
            const categories = response.docs.map(doc => {
                return { 
                    id: doc.id,
                    ...doc.data()
                }
            })
            resolve(categories)
        }).catch(error => {
            reject(error)
        }) 
    })
}