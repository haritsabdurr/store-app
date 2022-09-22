import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

const Cart = ({ qty }) => {
  const url = 'https://fakestoreapi.com/products';

  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const location = useLocation();

  const fetchProductbyId = async () => {
    try {
      const response = await axios.get(`${url}/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProductbyId();
  }, []);

  return (
    <div class='container mx-auto px-4 sm:px-20 py-16'>
      <div>
        <p className='text-md sm:text-xl font-semibold'>My Cart</p>
      </div>
      <div className='flex justify-between mt-6'>
        <div className='flex justify-start'>
          <div className='flex items-center h-44 sm:h-72 w-36 sm:w-52 rounded-md border border-black/30 p-4'>
            <img
              src={product.image}
              alt='item cart'
              className='object-contain'
            />
          </div>

          <div className='ml-2 sm:ml-8'>
            <p className='text-md sm:text-2xl font-medium'>{product.title}</p>
            <p className='text-md sm:text-xl mt-4'>Quantity: {location.qty}</p>
            <p className='text-md sm:text-xl mt-14 sm:mt-24 font-bold'>
              Total: ${location.qty}
            </p>
          </div>
        </div>
      </div>
      <hr className='bg-gray-400 my-5' />
      <div className='flex justify-end'>
        <button className='py-2 px-3 bg-green-600 rounded-md text-white font-medium'>
          Go To Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
