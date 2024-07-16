import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../assets/css/orders.css';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography,
    
   } from '@mui/material';


function Orders() {
    const [orders, setOrders] = useState([])
    const [selectedOrder, setSelectedOrder] = useState(null)
    const [open, setOpen] = useState(false)

    const urlApiOrders = 'http://localhost:3030/api/orders'

    useEffect(() => {
        fetch(urlApiOrders)
            .then(response => response.json())
            .then(data => {
                setOrders(data);
            })
            .catch(err => console.log(err))
    }, [])

    const handleButtonDetail = (id) => {
        fetch(`http://localhost:3030/api/orders/${id}`)
            .then(response => response.json())
            .then(data => {
                setSelectedOrder(data)
                setOpen(true)
            })
            .catch(err => console.log(err))
    }

    const handleClose = () => {
        setOpen(false);
        setSelectedOrder(null)
    }

    const rows = orders.map(order => ({
        id: order.id,
        user: `${order.user.name} ${order.user.surname}`,
        total: `$ ${order.total}`,
        status: order.state,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt
    }))

    const getColor = (status) => {
        switch (status) {
            case "pending":
                return "warning";
            case "canceled":
                return "error"
            case "completed":
                return "success";
            default:
                return "info";
        }
    }

    const columns = [
        { field: "id", headerName: "ID", width: 80 },
        { field:"user", headerName: "Usuario", flex: 1, width: 150 },
        {
            field: "total", headerName: "Total", width: 100,
            renderCell: (params) => (
                <div style={{ width: '100%', textAlign: "center" }}>
                    {params.value}
                </div>
            ),
        },
         {
            field: "status", headerName: "Estado", width: 150,
            renderCell: (params) => (
               
                   <div className="buttonDashboardContainer">
                    <Button
                        variant="contained"
                        color={getColor(params.value)}
                      
                    >
                       {params.value}
                    </Button>
                </div>
            ),
        },
        { field: "createdAt", headerName: "Fecha de Creación", width: 150 },
        { field: "updatedAt", headerName: "Última Actualización", width: 150 },
        {
            field: 'ver',
            headerName: '',
            width: 120,
            renderCell: (params) => (
                <div className="buttonDashboardContainer">
                    <Button
                    variant="contained"
                    color="info"
                    onClick={() => handleButtonDetail(params.row.id)}
                    >
                        Ver
                    </Button>
                </div>
            )}
    ]
   
    return (
        <div className='DataGridContainer'>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1>Órdenes</h1>
            </div>
            <div style={{ height: '600', width: '100%', overflow: 'scroll' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    rowHeight={80}
                    initialState={{
                        pagination: { paginationModel: { page: 0, pageSize: 10 }},
                    }}
                />
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="md"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    Detalle de la Orden
                </DialogTitle>
                <DialogContent>
                    {selectedOrder && (
                        <>
                            <div className="orderDetailSection">
                            <Typography variant="h5" gutterBottom>Cliente</Typography>
                                <p>Nombre: {selectedOrder.user.name} {selectedOrder.user.surname}</p>
                                <p>Email: {selectedOrder.user.email}</p>
                               </div>
                            <div>
                            <Typography variant="h5" gutterBottom>Productos</Typography>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                            <TableCell>Nombre del producto</TableCell>
                                            <TableCell align="right">Precio</TableCell>
                                            <TableCell align="right">Cantidad</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {selectedOrder.products.map(product => (
                                                <TableRow key={product.id}>
                                                <TableCell component="th" scope="row">
                                                {product.name}
                                                </TableCell>
                                                <TableCell align="right">${product.price}</TableCell>
                                                <TableCell align="right">{product.orderProducts.quantity}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                           
                            </div>
                            <div className="orderDetailSection">
                            <Typography variant="h5" gutterBottom>Información de la orden</Typography>
                                <p>Total: ${selectedOrder.total}</p>
                                <p>Estado: {selectedOrder.state}</p>
                                <p>Fecha de Creación: {selectedOrder.createdAt}</p>
                                <p>Última Actualización: {selectedOrder.updatedAt}</p>
                            </div>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Orders