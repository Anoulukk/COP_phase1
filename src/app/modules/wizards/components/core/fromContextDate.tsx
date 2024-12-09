import React, { useState, createContext, ReactNode } from 'react';
import { Horizontal } from '../Horizontal';

interface DataContextType {
    name: string;
    age: number;
    position: string;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

const FromContextDate: React.FC<{ children?: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<DataContextType>({
        name: 'data',
        age: 30,
        position: 'Full-Stack Developer',
    });

    return (
        <DataContext.Provider value={data}>
            {children}
            <Horizontal />
        </DataContext.Provider>
    );
};

export default FromContextDate;
