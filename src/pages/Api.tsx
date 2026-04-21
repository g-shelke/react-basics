import { useState } from 'react';
import useFetch from './../hooks/fetchData';
import { debounce } from 'lodash';
import { useEffect } from 'react';

const Api = () => {

    const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

    const [filteredData, setFilteredData] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }, 500);

    useEffect(() => {
        if (searchTerm) {
            console.log("Filtering data: "+searchTerm);
            const filteredData = data?.filter((item: { title: string }) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilteredData(filteredData);
        } else {
            setFilteredData(data);
        }
    }, [searchTerm, data]);

    return (
        <div>
            <h1>API Page</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <div className="row">
                <div className="col-md-12">
                 <div className="col-12 d-flex w-50 form-group mb-3 d-block">
                    <input type="text" className="form-control" placeholder="Search..." onChange={handleSearch} />
                 </div>
                    
                {filteredData && filteredData.map((item: { id: number; title: string; body: string }) => {
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
            </div>
        </div>
    );
}

export default Api;