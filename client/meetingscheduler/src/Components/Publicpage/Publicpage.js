import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export const Publicpage = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({})


  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      // console.log(data);
      setUserData(data);
      // console.log(userData.name);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }


    } catch (err) {
      console.log(err)
      history.push('/login')
    }
  }
  useEffect(() => {
    callAboutPage();
  }, []);

  // const makeComment = (text,postId)=>{
  //   fetch('/comment',{
  //     method:"put",
  //     headers:{
  //       "Content-Type":"application/json",
  //       "Authorozation":"Bearer "+localStorage.getItem("jwt")
  //     },
  //     body:JSON.stringify({
  //       postId,
  //       text
  //     })
  //   })
  // }

  return (
    <div>
      <form action="GET">

      <div className='dta'>
        <p className="dtaitem" >Name : </p>
        <p className="dtaitemm" >{userData.name}</p>
      </div>
      <div className='dta'>
        <p className="dtaitem" >Email : </p>
        <p className="dtaitemm" >{userData.email}</p>
      </div>
      <div className='dta'>
        <p className="dtaitem" >Phone : </p>
        <p className="dtaitemm" >{userData.phone}</p>
      </div>
      <div className='dta'>
        <p className="dtaitem" >Work : </p>
        <p className="dtaitemm" >{userData.work}</p>
      </div>
 
      </form>
      <div>
        <p>You have following schedule : </p>
        <p> 9 : 15 : AM </p>
        <p> with Akash </p>
        <p> about abc is cba but in reverse order </p>
      </div>
      <div>
        <input type="text" />
      </div>
    </div>
  )
}
