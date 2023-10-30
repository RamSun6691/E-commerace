import React, { createContext, useContext, useEffect, useReducer } from 'react';
import axios from "axios"
import reducer from "../reducer/ProductReducer"

const AppContext = createContext()

const API="https://api.pujakaitem.com/api/products"

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
}

const AppProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initialState)

  const getProducts=async(url)=>{
    dispatch({type:"SET_LOADING"})
    try {
      const res= await axios.get(url)
      const products=await res.data
      dispatch({type:"SET_API-DATA",payload:products})
      // console.log("get the products data from api",products)
    } catch (error) {
      dispatch({type: "API_ERROR"})
      
    }
  }

  const getSingleproduct= async (url)=>{
    dispatch({type:"SET_SINGLE_LOADING"})
    try {
      const res= await axios.get(url)
      const products=await res.data
      dispatch({type:"SET_SINLE_API-DATA",payload:products})
      // console.log("get the products data from api",products)
    } catch (error) {
      dispatch({type: "SINGLE_API_ERROR"})
      
    }
  }
  useEffect(()=>{
    getProducts(API)
  },[])
  return (
    <AppContext.Provider value={{...state,getSingleproduct}}>
        {children}
    </AppContext.Provider>
  )
}

const useProductContext=()=>{
    return useContext(AppContext)
}

export { AppProvider,AppContext,useProductContext}