import React from 'react'

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue)
  const [loading,setLoading] = React.useState(true)
  const [error,setError] = React.useState(false)


    React.useEffect(() => {
      setTimeout(()=> {
        try {
          const localStorageItem = localStorage.getItem(itemName);
      
          let parsedItem;
      
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem)
    
            setLoading(false)
          }
        }catch (error) {
          setLoading(false)
          setError(true)
        }
      }, 2000);
    },[])
  
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem)
    }

    console.log(item);
    return{
      item, 
      saveItem,
      loading,
      error
    };
  }
  export {useLocalStorage};

  // localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

// const defaultTodos = [
//   {text: 'Go to the gym', completed: true},
//   {text: 'Do Leetcode 75 interview challenges', completed: false},
//   {text: 'Take classes of React Fundaments', completed: false},
//   {text: 'Do Leetcode JS challenges', completed: false},
//   {text: 'Do Leetcode 150 interview challenges', completed: false},
//   {text: 'work with derivedes states', completed: true},
// ];
