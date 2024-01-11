
import { useEffect } from "react";

function useCurrencyInfo(currency){
    useEffect (() => {
        fetch()
        .then ((res) => res.json())
        .then ((res) => setData (res[currency]))
        console.log(data);
        
    }, [currency])
    console.log(data);
    return data
}
export default useCurrencyInfo;




