import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import '../assets/css/products.css'
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate, useParams } from 'react-router-dom';

function Products() {

    const [productIdToDelete, setProductIdToDelete] = useState(null)
    const [shouldRefreshProducts, setShouldRefreshProducts] = useState(false);

    const navigate = useNavigate()

    let [products, setProducts] = useState([])

    const [open, setOpen] = useState(false);

    const handleClickOpen = (id) => {
        setProductIdToDelete(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const urlApiProducts = 'http://localhost:3030/api/products'
    const urlApiImage = 'http://localhost:3030/api/products/image/'

    useEffect(() => {
        fetch(urlApiProducts)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setShouldRefreshProducts(false);
            })
    }, [shouldRefreshProducts]);

    const prods = products.products || []

    function handleButtonDetail(id) {
        const url = 'http://localhost:3030/productos/detalle/' + id
        window.open(url, '_blank')
    }


    const handleButtonEdit = (id) => {
        navigate(`/admin/products/edit/${id}`)
    }

    const handleCreateProduct = () => {
        navigate('/admin/products/create');
    }


    const handleButtonDelete = () => {
        fetch(`http://localhost:3030/api/products/${productIdToDelete}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setOpen(false);
                setShouldRefreshProducts(true);
            })
            .catch(err => console.log(err));
    };


    let rows = prods.map(p => ({
        id: p.id,
        name: p.name,
        price: `$ ${p.price}`,
        stock: p.stock,
        category: p.category.name,
        photo: urlApiImage + p.image
    }))

    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'name', headerName: 'Nombre', flex: 1 },
        {
            field: 'price', headerName: 'Precio', width: 100,
            renderCell: (params) => (
                <div style={{ width: '100%', textAlign: 'center' }}>
                    {params.value}
                </div>
            ),
        },
        { field: 'stock', headerName: 'Stock', width: 100 },
        { field: 'category', headerName: 'Categoria', flex: 1 },
        {
            field: 'photo',
            headerName: 'Imagen',
            width: 200,
            renderCell: (params) => (
                <img src={params.value.toString()} alt={params.row.fullName} style={{ width: 'auto', height: '100%', padding: "7px" }} />
            ),
        },
        {
            field: 'ver',
            headerName: '',
            width: 120,
            renderCell: (params) => (
                <div className='buttonDashboardContainer'>
                    <Button
                        variant="contained"
                        color="info"
                        onClick={() => handleButtonDetail(params.row.id)}
                    >
                        Ver
                    </Button>
                </div>
            ),
        },
        {
            field: 'actionEdit',
            headerName: '',
            width: 120,
            renderCell: (params) => (
                <div className='buttonDashboardContainer'>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => handleButtonEdit(params.row.id)}
                    >
                        Editar
                    </Button>
                </div>
            ),
        },
        {
            field: 'actionDelete',
            headerName: '',
            width: 120,
            renderCell: (params) => (
                <div className='buttonDashboardContainer'>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleClickOpen(params.row.id)}
                    >
                        Eliminar
                    </Button>
                </div>
            ),
        }
    ];

    return (
        <div className='DataGridContainer'>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1>Productos</h1>

                <Button
                    variant="contained"
                    color="warning"
                    onClick={handleCreateProduct}
                >
                    Crear producto
                </Button>
            </div>
            <div style={{ height: '600', width: '100%', overflow: 'scroll' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    rowHeight={80}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                />
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
            >
                <DialogTitle id="alert-dialog-title">
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ¿Estas Seguro que deseas eliminar este producto?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="info"
                        onClick={handleClose}>Cancelar</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleButtonDelete} autoFocus>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Products