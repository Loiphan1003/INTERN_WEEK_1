import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'
import { getListUser } from '../../store/reducers/userSlice'


export const ExampleSecond = () => {

  const { users, status} = useSelector((state: RootState) => state.user)

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getListUser())
  }, [dispatch])


  return (
    <div>
      <h1>{status}</h1> 
      {status === 'succeeded' && 
        users?.map(user => {
          return <p>Name {user.name}</p>
        })
      }
    </div>
  )
}