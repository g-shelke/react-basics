import { useState } from 'react';

const Counter = () => {
    
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1 className='display-6 mb-4'>Counter Page</h1>
            <div className='d-flex align-items-center justify-content-center gap-3'>        
                <button className="btn btn-outline-secondary" onClick={decrement}>
                    - Decrement
                </button>
                <p className="mb-0 fs-5">{count}</p>
                <button className="btn btn-outline-primary" onClick={increment}>
                    + Increment
                </button>
            </div>
        </div>
    );
}

export default Counter;