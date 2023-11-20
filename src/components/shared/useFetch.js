
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [errorMsg, setError] = useState(null);
    useEffect(() => {
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
                //console.log(data);
            }
            )
            .catch((err) => setError(err.message));
    }, [url])
    return { data, errorMsg ,setData}
}

export default useFetch;
