import React, { useState, useEffect } from 'react';
import { Input } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function CreateProduct() {
  const [categorys, setCategorys] = useState([]);
  const [preview, setPreview] = useState('');
  const [fileImgSelected, setFileImgSelected] = useState();
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    stock: '',
    categoryId: '',
    description: '',
  });

  const urlApiCategorys = 'http://localhost:3030/api/categorys';
  const urlApiCreateProduct = 'http://localhost:3030/api/products/create';

  useEffect(() => {
    fetch(urlApiCategorys)
      .then((response) => response.json())
      .then((data) => setCategorys(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleChangueInputImg = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
      setFileImgSelected(file);
    }
  };

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append('name', newProduct.name);
    formData.append('price', newProduct.price);
    formData.append('stock', newProduct.stock);
    formData.append('categoryId', newProduct.categoryId);
    formData.append('description', newProduct.description);
    formData.append('imageProduct', fileImgSelected);

    fetch(urlApiCreateProduct, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location = '/admin/products';
      })
      .catch((error) => console.error('Error:', error))
      
  };

  if (categorys.length < 1) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <CircularProgress color="inherit" />
      </div>
    );
  } else {
    return (
      <Box sx={{ width: '90%', maxWidth: '700px', display: 'flex', flexWrap: 'wrap', margin: '50px auto' }}>
        <h1 style={{ width: '100%', textAlign: 'center' }}> Crear Producto </h1>
        <img src={preview} alt="img-product" className="editProductImg" />
        <TextField
          id="outlined-required"
          label="Nombre del producto"
          name="name"
          value={newProduct.name}
          sx={{ width: '95%', margin: '2.5%' }}
          onChange={handleChange}
        />
        <TextField
          id="outlined-required"
          label="Precio"
          name="price"
          value={newProduct.price}
          type="number"
          sx={{ width: '45%', margin: '2.5%' }}
          onChange={handleChange}
        />
        <TextField
          id="outlined-required"
          label="Stock"
          name="stock"
          value={newProduct.stock}
          type="number"
          sx={{ width: '45%', margin: '2.5%' }}
          onChange={handleChange}
        />
        <FormControl sx={{ width: '45%', margin: '2.5%' }}>
          <InputLabel id="demo-simple-select-label" sx={{ margin: '2.5%' }}>
            Categoria
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Categoria"
            name="categoryId"
            value={newProduct.categoryId}
            sx={{ width: '100%' }}
            onChange={handleChange}
          >
            {categorys.data.map((p) => {
              return (
                <MenuItem key={p.id} value={p.id}>
                  {p.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Input
          id="file-upload"
          type="file"
          name="imageProduct"
          onChange={handleChangueInputImg}
          inputProps={{ accept: 'image/*' }}
          sx={{ width: 230, height: 70, margin: '10px' }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Descripción"
          name="description"
          multiline
          rows={10}
          value={newProduct.description}
          sx={{ width: '95%', margin: '2.5%' }}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          size="large"
          onClick={handleSubmit}
          sx={{ marginLeft: 'auto', marginRight: '2.5%' }}
        >
          Crear Producto
        </Button>
      </Box>
    );
  }
}

export default CreateProduct;