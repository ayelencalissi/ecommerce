import { useState, useEffect } from 'react'

export const useFirestore = ( asyncFn, dependencies = [] ) => {
    const [ data, setData ] = useState()
    const [ error, setError ] = useState()
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        setLoading(true)

        asyncFn().then(response => {
            setData(response)
        }).catch(error => {
            setError(error)
        }).finally(() => {
            setLoading(false)
        })
    }, dependencies)

    return {
        loading,
        data,
        error
    }
}