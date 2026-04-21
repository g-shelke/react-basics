import useFetch from './../hooks/fetchData';
import { useEffect } from 'react';

const Api = () => {

    const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

    useEffect(() => {
        if (data) {
            console.log('Fetched data:', data);
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            console.log('Fetch error:', error);
        }
    }, [error]);

    return (
        <div>
            <h1>API Page</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && data.map((item: { id: number; title: string; body: string }) => {
                return (
                    <div key={item.id} className="card mb-3">
                        <div className="card-body ">
                            <h2 className="card-title">{item.title}</h2>
                            <p className="card-text">{item.body}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Api;