import React, { useEffect } from 'react'
import { getUsers } from '../../features/usersSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { Link, useParams } from 'react-router-dom';

const UserSingle = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.users.data);
    const { userId } = useParams();

    useEffect(()=> {
        if (users.length === 0) dispatch(getUsers())
    }, [dispatch, users])
  return (
    <Link to={`/users/${user.id}`} style={{ textDecoration: "none"}}>
    </Link>

  )
}

export default UserSingle