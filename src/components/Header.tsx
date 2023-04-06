import React from 'react';

interface HeaderProps {
    name: string
};

const Header = ({ name }: HeaderProps): JSX.Element => {
    return (
        <div>
            <div className='flex p-4 h-20 items-center justify-between bg-slate-100'>
                <h1 className='text-blue-600 font-semibold text-xl'>{name}</h1>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </button>
            </div>
        </div>
    )
}

export default Header