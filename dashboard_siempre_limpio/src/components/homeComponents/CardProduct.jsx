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


function cardProduct({ title, description, img, id, price, user }) {

  const { cartData, fetchCartData } = useContext(GlobalContext)


  const handleCLickAddCart = () => {

    if (user) {      
      fetch(`http://localhost:3030/api/cart/add/${id}?userId=${user.id}`, { method: 'PATCH' })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.ok === true) {
            fetchCartData(user.id)
            toast.success("Producto agregado!")
          } else {
            alert("error")
          }
        })
    } else {
      toast.warn("Debe ingresar para usar el carrito")
    }
  }

  function toThousand(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <Card sx={{
      height: 550, maxWidth: '350px', marginBottom: '40px', position: "relative", '&:hover': {
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
      }
    }}>

      <CardMedia
        sx={{
          height: 350
        }}
        image={img}
        title={title}
      />
      <CardContent>
        <span
          style={{
            position: 'absolute',
            top: 300,
            right: 10,
            backgroundColor: "#93dee8",
            color: "black",
            padding: '5px 10px',
            borderRadius: '5px',
            fontWeight: "lighter",
            fontSize: 18
          }}
        >
          ${toThousand(price)}
        </span>
        <Typography sx={{ height: 30, overflow: 'hidden' }} gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary"
          sx={{ height: 80, overflow: 'hidden' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleCLickAddCart} sx={{ backgroundColor: "#93dee8", width: "80%", margin: "auto", color: "black", fontSize: 15 }}>Agregar al carrito <i className="fa-solid fa-cart-shopping"></i></Button>
      </CardActions>
    </Card>
  )
}

export default cardProduct