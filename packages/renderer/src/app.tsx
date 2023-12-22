import React, { useState } from 'react';
import './app.css';

const App:React.FC = () => {
    const [count, setCount] = useState(0)

    return (
        <div className='app'>
            <p>Hello Vite + React!</p>
            <p>
                <button onClick={() => setCount((count) => count + 1)}>
                    Count is: {count}
                </button>
            </p>
        </div>
    );
}

export default App;