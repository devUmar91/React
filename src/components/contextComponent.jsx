import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export function ContextComponent({ children }) {
    const [color, setColor] = useState('black');

    const chngColor = () => {
       setColor("green");
    }

    return (
        <Context.Provider value={{ color, chngColor }}>
            {children}
        </Context.Provider>
    );
}

export function ChildComponent() {
    const { color, chngColor } = useContext(Context);

    return (
        <div style={{ color: color }}>
            <button onClick={chngColor}>Change Color</button>
        </div>
    );
}
