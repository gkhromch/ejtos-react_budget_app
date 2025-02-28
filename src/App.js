import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js and other components
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import Currency from './components/Currency';

import { AppProvider } from './context/AppContext';
import AllocationForm from './components/AllocationForm';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-4'>Company's Budget Allocation</h1>
                    <div className='row mt-4'>
                        {/* Add Budget component here under */}        
                        <div className='col-sm'>
                            <Budget />
                        </div>
                        {/* Add Remaining component here under */}        
                        <div className='col-sm'>
                            <Remaining />
                        </div>
                        {/* Add ExpenseTotal component here under */}        
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                        {/* Add Currency component here under */}        
                        <div className='col-sm'>
                            <Currency />
                        </div>
                    <div/>
                    <h3 className='mt-3'>Allocation</h3>
                    <div className='row '>
                        {/* Add ExpenseList component here under */}         
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>
                    </div>
                    <h3 className='mt-3'>Change allocation</h3>
                    <div className='row mt-3'>    
                        {/* Add AllocationForm component here under */}        
                        <div className='col-sm'>
                            <AllocationForm />
                        </div>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
