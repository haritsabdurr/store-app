import React from 'react';

const CourierFilter = ({ courier }) => {
  const filterCourier = (e) => {
    courier(e.target.value);
  };

  return (
    <div className='w-36 sm:w-44 mt-6 mr-5'>
      <select
        id='countries'
        onChange={filterCourier}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2'
      >
        <option selected='' value='all'>
          Pilih Kurir ...
        </option>
        <option value='jne'>JNE</option>
        <option value='jnt'>J&T</option>
        <option value='sicepat'>SiCepat</option>
        <option value='wahana'>Wahana</option>
      </select>
    </div>
  );
};

export default CourierFilter;
