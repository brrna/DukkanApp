//çağrıldığı anda çalışması gereken bir fonksiyon olması gerekiyor bu yüzden useEffect kullanılmalıdır.

import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true); // Yükleniyor durumunu başlat
        try {
            const { data: responseData } = await axios.get(url);
            setData(responseData);
        } catch (err) {
            console.error("Error fetching data:", err.response?.data || err.message);
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {data, loading, error}
}

export default useFetch;