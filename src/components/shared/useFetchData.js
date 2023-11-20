
import { useState } from "react";
const useFetchData = () => {
    const [data, setData] = useState(null);
    const [errorMsg, setError] = useState(null);
    const get = (url) => {
         fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    console.error('Does not fetch data')
                }
            })
            .then((data) => {
                setData(data);
            }
            )
            .catch((err) => setError(err.message))
        
        return {data,errorMsg}
        }
    return { get };
}

export default useFetchData;