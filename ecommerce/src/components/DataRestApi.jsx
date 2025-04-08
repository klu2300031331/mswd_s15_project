import axios from 'axios'
import React, { useEffect,useState } from 'react'

const DataRestApi = () => {
    const [id,setId] = useState(1)
    const [posts,setPosts] = useState({})
    const [buttonid, setButtonid] = useState(1)
    function clickHandler(){
        setButtonid(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonid}`)
        .then(
            res=>{
                console.log(res)
                setPosts(res.data)
            }
        )

        .catch(
            err=>{
                console.log(err)
            }
        )}, [buttonid]
    )
  return (
    <div>
        <input type='text' value={id} onChange={e=> setId(e.target.value)}/>
        <button onClick={clickHandler}>GetData</button><br/>
        {posts.title}
    </div>
  )
}

export default DataRestApi