import React from 'react';
import { Link } from 'react-router-dom';

const CartPopup = ({ cartAdd, qty, total, open, close }) => {
  return (
    <div
      id='defaultModal'
      tabIndex='-1'
      ariaHidden='true'
      className={`${
        open ? 'block' : 'hidden'
      } overflow-y-auto overflow-x-hidden pt-6 fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full bg-gray-800 bg-opacity-50`}
    >
      <div
        className='relative mx-auto mt-20 w-screen max-w-sm p-6 rounded-lg sm:px-12 bg-sky-800'
        ariaModal='true'
        ariaLabel='Item added to your cart'
        role='dialog'
        tabindex='-1'
      >
        <div className='flex justify-center'>
          <h2 className='flex items-center text-center font-semibold text-white'>
            Yay! Item added to your cart!
          </h2>
        </div>

        <div className='flex justify-center pt-8 pb-12'>
          <img
            alt='Tee'
            src={cartAdd.image}
            className='object-cover w-28 h-28 rounded-lg'
          />

          <div className='ml-4 text-white'>
            <h3 className='text-md line-clamp-3'>{cartAdd.title}</h3>

            <dl className='mt-2 space-y-1 text-xs'>
              <div>
                <dt className='inline'>
                  Qty: <span>{''}</span>{' '}
                </dt>
                <dd className='inline'>{qty}</dd>
              </div>

              <div>
                <dt className='inline'>
                  Total: <span>{''}</span>{' '}
                </dt>
                <dd className='inline'>${total}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className='space-y-4 text-center'>
          <Link to={`/cart/${cartAdd.id}`} state={qty}>
            <a
              href='#'
              className='block w-full p-3 text-sm rounded-lg bg-yellow-400 text-black'
            >
              Checkout
            </a>
          </Link>
        </div>

        <div className='text-center text-white mt-2'>
          <p className='text-xs'>Or</p>
          <p className='mt-2 underline' onClick={close}>
            Continue Shopping
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
