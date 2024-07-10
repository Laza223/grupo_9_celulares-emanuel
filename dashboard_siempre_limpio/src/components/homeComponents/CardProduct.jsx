import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GlobalContext } from '../../contexts/globalContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function cardProduct({ title, description, img, id, price }) {

  const { cartData, fetchCartData } = useContext(GlobalContext)



  const handleCLickAddCart = () => {
    fetch(`http://localhost:3030/api/cart/add/${id}?userId=2`, { method: 'PATCH' })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.ok === true) {
          fetchCartData()
          toast.success("Producto agregado!")
        } else {
          alert("error")
        }
      })
  }

  return (
    <Card sx={{ height: 550, maxWidth: '350px', marginBottom: '40px' }}>
      
      <CardMedia
        sx={{ height: 350 }}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography sx={{ height: 30, overflow: 'hidden' }} gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary"
          sx={{ height: 80, overflow: 'hidden' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" >${price}</Button>
        <Button size="small" onClick={handleCLickAddCart}>Add to Cart</Button>
      </CardActions>
    </Card>
  )
}

export default cardProduct