import { useEffect, useState } from "react"

//custom hooks used to fetch data
  const useFetch = (url)=>{

    const [data ,setData]=useState(null) 

    useEffect (()=>{
        fetch(url).then((result)=>{
            result.json().then((response)=>{
               setData(response);
            })
        })

    },[])
    return data
  }

  export default useFetch

