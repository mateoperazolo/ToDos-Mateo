import React from "react";

function useLocalStorage (iteamName, initialValue) {
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue)
  
    React.useEffect (() => {
      setTimeout (() => {
        const localStorageItem = localStorage.getItem(iteamName)
        let parsedItem
      
      
        if(!localStorageItem) {
          localStorage.setItem(iteamName, JSON.stringify(initialValue))
          parsedItem = initialValue
      
        }else{
          parsedItem = JSON.parse(localStorageItem)
        }
  
        setItem(parsedItem)
        setLoading(false)
      }, 1000)
    })
  
   
  
    const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(iteamName, stringifiedItem)
      setItem(newItem)
    }
    
    return {
      item, 
      saveItem,
      loading,
    }
}
  
export { useLocalStorage }