const Calculator = () => {
  const numbers = [];
  for (let i = 9; i > 0; i--) {
    numbers.push(
      <button
        className='border p-2 bg-white border-gray-100 hover:text-gray-900 hover:bg-gray-50'
        key={i}
      >
        {i}
      </button>
    );
  }
  return (
    <div className='grid grid-cols-4 rounded-2xl grid-flow-row-dense shadow-xl text-slate-600 font-my-font text-2xl m-auto'>
      <p className='col-start-1 col-end-5 text-right text-cyan-50 bg-black p-6 pb-4 rounded-t-2xl text-3xl'>
        0
      </p>
      <button className='bg-gray-200 p-4 hover:bg-gray-300' type='button'>
        C
      </button>
      <button className='bg-gray-200 p-4 hover:bg-gray-300' type='button'>
        +/-
      </button>
      <button
        className='border border-1  bg-gray-200 py-4 px-6 hover:bg-gray-300'
        type='button'
      >
        %
      </button>
      <button className='bg-red-400 p-4 hover:bg-red-500' type='button'>
        /
      </button>
      <button
        className='bg-red-400 col-start-4 col-end-5 p-4 hover:bg-red-500'
        type='button'
      >
        x
      </button>
      <button
        className='bg-red-400 col-start-4 col-end-5 p-4 hover:bg-red-500'
        type='button'
      >
        -
      </button>
      <button
        className='bg-red-400 col-start-4 col-end-5 p-4 hover:bg-red-500'
        type='button'
      >
        +
      </button>
      <button
        className='bg-purple-300 col-start-3 col-end-5 p-2 rounded-br-2xl hover:bg-purple-400'
        type='button'
      >
        =
      </button>
      {numbers}
      <button
        className='border border-1 p-2 rounded-bl-2xl bg-white hover:bg-gray-50'
        type='button'
      >
        0
      </button>
      <button
        className='border border-1 p-2 bg-white hover:bg-gray-50'
        type='button'
      >
        .
      </button>
    </div>
  );
};
export default Calculator;
