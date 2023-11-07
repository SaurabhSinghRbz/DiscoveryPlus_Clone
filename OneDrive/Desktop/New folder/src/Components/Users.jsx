import React, { useEffect,useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Users = () => {
 const [users,setusers] = useState([])

 const [searchParam,setSearchParam] = useSearchParams()
 let initialPage = searchParam.get("page")

 const [page,setPage]= useState(initialPage)

 useEffect(()=>{
  getuser()
 },[users])
 useEffect(()=>{
  setSearchParam({
    page,
  })
 },[page])
 const getuser =  async  ()=>{
 
   var res = await fetch(`https://reqres.in/api/users?page=${page}`)
   var data = await res.json()
   console.log(data.data)
   setusers(data.data)
   
 }
 const handlepage = (value) =>{
      let PageNo= value + page
      setPage(PageNo)
 }
    return (
    <div>Users
     {
    users.length>0 &&<div>
        <table  style={{width:"80%" ,margin:"30px auto",boxShadow:"0 0 10px black" }}>
            <thead>
                <tr>
                    <th>
                     ID
                    </th>
                    <th>
                    IMAGE   
                    </th>
                    <th>
                    NAME 
                    </th>
                    <th>
                    EMAIL
                    </th>
                </tr>
            </thead>
            <tbody>
              {
                users.map((user)=>{
                  return (
                    <tr key={user.id}>
                      <td>
                      {user.id}
                      </td>
                      <td>
                        <img src={user.avatar} alt = {user.avatar}  width={70} height={70}/>
                      </td>
                      <td>
                     {user.first_name}
                     {user.last_name}
                      </td>
                     <td>
                      {user.email}
                     </td>

                    </tr>
                  )
                }
                
                )

              }
            </tbody>
        </table>
        <div style={{margin:"20px 0px 50px"}}>
        <button onClick={()=>handlepage(-1)} disabled={page===1}>Prev</button>&nbsp;&nbsp;
        <button>{page}</button>&nbsp;&nbsp;
        <button onClick={()=>handlepage(1)} disabled={page===2}>Next</button>

        </div>
       
    </div>
   }
    
    
    </div>
     
  

  )
}

export default Users