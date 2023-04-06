import React from 'react'

interface ProductData {
    image: string,
    price: number,
    title: string
}

const Product = ({ image, title, price }: ProductData): JSX.Element => {

    return (
        <div className='flex flex-col gap-2 border border-slate-100 p-4 shadow rounded'>
            <img src={image} alt='product' />
            <h2 className='font-semibold text-slate-700'>{title}</h2>
            <span className='text-right text-slate-400'>$ {price}</span>
        </div>
    )
}

export default Product