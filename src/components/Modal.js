const Modal = ({ open, close }) => {
  if (!open) return null;
  return (
    <div
      id='defaultModal'
      tabIndex='-1'
      ariaHidden='true'
      className='block overflow-y-auto overflow-x-hidden pt-6 fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full bg-gray-800 bg-opacity-50'
    >
      <div className='relative mx-auto mt-32 p-4 w-full max-w-2xl h-full md:h-auto'>
        <div className='relative bg-white rounded-lg shadow dark:bg-sky-800'>
          <div className='flex justify-center items-start p-4 rounded-t border-b dark:border-gray-600'>
            <h3 className='text-xl text-center font-semibold text-gray-900 dark:text-white'>
              Attention!
            </h3>
          </div>

          <div className='p-6 space-y-6'>
            <p className='text-center font-light leading-relaxed text-white'>
              This website currently is still under development. give
              suggestions and opinions for further development
            </p>
          </div>

          <div className='flex justify-center items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
            <button
              dataModalToggle='defaultModal'
              type='button'
              onClick={close}
              className='text-black bg-yellow-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
