import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
    // State
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string | null>(null);

    // useEffect runs on component mount
    useEffect(() => {
        console.log('Component mounted');
    }, []); // empty dependency = run once

    // useEffect runs whenever `count` changes
    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log(`Count changed to ${count}`);
    }, [count]); // dependency array = run when count changes

    // useEffect runs whenever `name` changes
    useEffect(() => {
        console.log(`Name changed to ${name}`);
    }, [name]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <input
                type="text"
                value={name ?? ''}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
        </div>
    );
};

export default Counter;
