import {useState} from 'react';
import {FaShoppingCart, FaTrash} from 'react-icons/fa';
import {useCart} from '../context/CartContext';

const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const {cart, removeFromCart} = useCart();
    const itemCount = cart.reduce((acc,item)=> acc + item.quantity, 0);
    const cartValue = cart.reduce((acc,item)=> acc + item.quantity * item.price, 0).toFixed(2);

    return(      
        <>
        <header className='bg-white shadow-md p-4 flex justify-between items-center'>
            <h1 className='text-2xl font-bold text-blue-600 '>
                ShopCart
            </h1>
            <div className='relative'>
                <button className='cursor-pointer' onClick={()=>setIsCartOpen(!isCartOpen)}>
                <FaShoppingCart className='text-blue-600 text-2xl' />
                {itemCount > 0 && (
                    <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>{itemCount}</span>
                )}
                </button>
                {isCartOpen && (
                    <div className='absolute right-0 w-80 bg-white p-4 shadow z-50 rounded'>
                        <div className='p-2'>
                            <h2 className='text-lg font-semibold mb-2'>Cart</h2>
                            {cart.length === 0 ? 
                                (<p className='text-gray-500 text-sm'> Your cart is empty</p>) : 
                                (<>
                                    <ul className='max-h-60 overflow-y-auto divide-y divide-gray-200'>
                                        {cart.map((item)=>(
                                            <li key={item.id} className='flex justify-between items-center py-2'>
                                                <div>
                                                    <p className='font-semibold'>{item.name}</p>
                                                    <p className='text-gray-500 text-sm'>{item.quantity} x ${item.price.toFixed(2)}</p>
                                                </div>
                                                <div>
                                                    <button onClick={()=>removeFromCart(item.id)} className='text-gray-500 hover:text-red-500'>
                                                        <FaTrash />
                                                    </button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </>)}
                        </div>                       
                        <div className='p-2 flex justify-between items-center'>
                            <p className='text-gray-500 text-sm'>Total: </p>
                            <span>${cartValue}</span>
                        </div>
                        <button className='w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>Checkout</button>
                    </div>
                )}
            </div>
        </header>
        </>
    )
}

export default Header;