import Item from '../Item/Item'
import { useEffect, useState } from "react"
import { Container, Row, Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemList = () => {

    const { categoryId } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {

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
            setProduct(products)
        }).catch(error => {
            console.log(error)
        }).finally(
            <div style={{textAlign: 'center', marginTop: 250}}>
                <Spinner animation="grow"/>
            </div>
        )

        /* if(!categoryId){
            getProducts().then((response) => {
                setProduct(response)
            })
        }else{
            getProductsByCategory(categoryId).then((response) => {
                setProduct(response)
            })
        } */
    },[categoryId])

    return(
        <div>
            <Container>
                <Row>
                    {   
                    product.length == 0 ?
                        <div style={{textAlign: 'center', marginTop: 250}}>
                            <Spinner animation="grow"/>
                        </div> :
                        product.map((prod) => {
                            return <Item key={prod.id} item={prod} />
                        })
                    }
                </Row>
            </Container>            
        </div>
    )
}

export default ItemList