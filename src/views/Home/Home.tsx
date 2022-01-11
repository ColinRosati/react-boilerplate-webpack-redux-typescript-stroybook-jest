import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addUser } from "store/users/actions";

const Home: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'ADD_USER' })
  },[])
  return (
  <div>
    Home
  </div>
)};

export default Home;
