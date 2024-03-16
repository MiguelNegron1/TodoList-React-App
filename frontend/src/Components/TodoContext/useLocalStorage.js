import React from 'react';
function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                }
                else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                    setLoading(false);
                }
            }
            catch (error) {
                setLoading(false);
                if (error instanceof Error) {
                    setError(error.message);
                }
                else {
                    setError('An unknown error occurred');
                }
            }
        }, 2000);
    }, []);
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };
    console.log(item);
    return {
        item,
        saveItem,
        loading,
        error,
    };
}
export { useLocalStorage };
