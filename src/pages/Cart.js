import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import CourierFilter from '../components/CourierFilter';

const Cart = () => {
  const url = 'https://fakestoreapi.com/products';

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [disableds, setDisableds] = useState(true);
  const [ongkir, setOngkir] = useState(0);
  const [kurir, setKurir] = useState('all');
  const { id } = useParams();

  const location = useLocation();
  const state = location.state;

  const fetchProductbyId = () => {
    try {
      setTimeout(async () => {
        const response = await axios.get(`${url}/${id}`);
        setProduct(response.data);
        setIsLoading(true);
      }, 700);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProductbyId();
  }, []);

  const courierSelected = (filterCourier) => {
    if (filterCourier === 'jne') {
      setOngkir(7.0);
      setDisableds(false);
    } else if (filterCourier === 'jnt') {
      setOngkir(6.75);
      setDisableds(false);
    } else if (filterCourier === 'sicepat') {
      setOngkir(7.25);
      setDisableds(false);
    } else if (filterCourier === 'wahana') {
      setOngkir(6.5);
      setDisableds(false);
    } else if (filterCourier === 'all') {
      setOngkir(0);
      setDisableds(true);
    }
  };

  return (
    <div class='container mx-auto px-4 sm:px-20 py-16'>
      <div>
        <p className='text-md sm:text-xl font-semibold'>My Cart</p>
      </div>

      {isLoading ? (
        <div className='flex justify-between mt-6'>
          <div className='flex justify-start'>
            <div className='flex items-center h-44 sm:h-72 w-[9rem] sm:w-[13rem] rounded-md border border-black/30 p-4'>
              <img
                src={product.image}
                alt='item cart'
                className='object-contain'
              />
            </div>

            <div className='ml-2 sm:ml-8'>
              <p className='text-md sm:text-2xl font-medium line-clamp-2 sm:line-clamp-0'>
                {product.title}
              </p>
              <p className='text-sm sm:text-xl mt-4'>Quantity: {state.qty}</p>
              <CourierFilter courier={courierSelected} />
              <p className='text-xs sm:text-lg mt-6 sm:mt-20 font-bold'>
                Shipping Fee: ${ongkir}
              </p>
              <p className='text-xs sm:text-lg mt-1 sm:mt-2 font-bold'>
                Total Product: ${state.total}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          role='status'
          class='space-y-8 animate-pulse md:space-y-0 md:space-x-8 flex'
        >
          <div class='flex justify-center items-center h-44 sm:h-72 w-32 sm:w-52 bg-gray-300 rounded p-4'>
            <svg
              class='w-12 h-12 text-gray-200'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 640 512'
            >
              <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
            </svg>
          </div>
          <div class='ml-8 sm:pt-8'>
            <div class='h-2.5 bg-gray-200 rounded-full w-32 sm:w-96 mb-4'></div>
            <div class='h-2 bg-gray-200 rounded-full w-24 sm:w-40 mb-2.5'></div>
            <div class='h-2 bg-gray-200 rounded-full w-24 sm:w-40 mb-2.5 mt-16 sm:mt-36'></div>
          </div>
        </div>
      )}
      <hr className='bg-gray-400 my-5' />
      <div className='flex justify-between items-center'>
        <p className='text-md sm:text-lg font-bold'>
          Total Payment: ${state.total + ongkir}
        </p>
        <button
          className='py-2 px-3 bg-green-600 rounded-md text-white font-medium disabled:bg-slate-200 disabled:text-gray-500'
          disabled={disableds ? 'disabled' : ''}
        >
          Go To Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
