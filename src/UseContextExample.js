import React, { useState } from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import ClassContextComponent from './ClassContextComponent';
import { ThemeProvider } from './ThemeContext';

const UseContextExample = () => {
    return (
        <>
            <div>
                <h1>UseContextExample</h1>
            </div>
            <ThemeProvider>
                <FunctionContextComponent />
            </ThemeProvider>
        </>
    )
}

export default UseContextExample;