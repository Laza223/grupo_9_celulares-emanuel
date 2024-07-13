import { useState, useEffect } from 'react';

const useDeleteProduct = () => {
  const [products, setProducts] = useState([]);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (id) => {
    setProductIdToDelete(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleButtonDelete = () => {
    fetch(`http://localhost:3030/api/products/${productIdToDelete}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProducts(products.filter(product => product.id !== productIdToDelete));
        setOpen(false);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetch('http://localhost:3030/api/products')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  return {
    products,
    handleClickOpen,
    handleClose,
    handleButtonDelete,
    open,
    productIdToDelete
  };
};

export default useDeleteProduct;