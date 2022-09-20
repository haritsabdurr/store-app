const CategoryFilter = ({ filter }) => {
  const filterValue = (e) => {
    filter(e.target.value);
  };

  return (
    <div className='w-72 mt-6 mr-5'>
      <select
        id='countries'
        onChange={filterValue}
        class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
      >
        <option selected='' value='all'>
          All Products
        </option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value='electronics'>Electronics</option>
        <option value='jewelery'>Jewelery</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
