import React, { Fragment } from 'react'

const DeleteProduct = (props) => {
    const id = props.id
    function DeleteProduct() {
        fetch(`http://localhost:3030/api/products/${props.id}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(data => console.log(data));
    }
    DeleteProduct()
    return (
    <>
    </>
  )
}

export default DeleteProduct