import React from 'react'
import { User } from '../../features/usersSlice'
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

interface UserCardProps {
    user: User;
}
const UsersCard = ({user}: UserCardProps) => {

    console.log("Users: ", user)
  return (
    <Link to={`/users/${user.id}`} style={{ textDecoration: "none"}}>
        <Card sx={{maxWidth: 345, margin: "1rem"}}>
            <CardContent>
                <Typography gutterBottom variant='h5' component="h2">
                    {user.name}
                </Typography>
                <Typography variant='body2' color="text.secondary" sx={{ mt:1}}>
                    {user.username} - {user.email}
                </Typography>
                <Typography variant='body2' color="text.secondary" sx={{ mt:1}}>
                    {user.address.street}, {user.address.suite}
                </Typography>
                <br />
                {user.address.city}, {user.address.zipcode}
            </CardContent>
        </Card>
    </Link>
    
  )
}

export default UsersCard