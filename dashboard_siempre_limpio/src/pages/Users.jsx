import React from 'react'
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Maximize } from '@mui/icons-material';


function Users() {
    let [Users, setUsers] = useState([]);

    const urlApiUsers = 'http://localhost:3030/api/users';

    useEffect(() => {
        fetch(urlApiUsers)
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    console.log(Users.users);


    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'name', headerName: 'Nombre', width: 150 },
        { field: 'lastName', headerName: 'Apellido', width: 150 },
        { field: 'email', headerName: 'Email', width: 350 },
        // {
        //     field: 'photo',
        //     headerName: 'Imagen',
        //     width: 200,
        //     renderCell: (params) => (
        //         <img src={''} alt={params.row.fullName} style={{ width: 'auto', height: '100%', padding: "7px" }} />
        //     ),
        // },
      ];
      
      const usersMap = Users.users || []

      const rows = usersMap.map(u => (
        { id: u.id, name: u.name, lastName: u.surname, email: u.email }
      ))


      


    return (
        <div style={{ width: '100%' }}>
            <h1 style={{textAlign: 'center'}}>Usuarios</h1>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          sx={{margin: '10px auto', width: '700px', minHeight: '500px', height: 'auto',}}
        //   checkboxSelection
        />
      </div>
    )
}

export default Users






