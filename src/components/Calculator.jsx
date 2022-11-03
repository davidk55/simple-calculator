import { useState } from 'react';
const Calculator = () => {
  const numberElements = [];
  for (let i = 9; i > 0; i--) {
    numberElements.push(
      <button
        onClick={() => addInput(i.toString())}
        className='border p-1 bg-white border-gray-100 hover:text-gray-900 hover:bg-gray-50'
        key={i}
      >
        {i}
      </button>
    );
  }

  const [calc, setCalc] = useState('0');

  function isNumberOrDot(char) {
    return /[0-9.]/.test(char);
  }

  function lastNumberContainsDot(expr) {
    let pos = expr.length - 1;
    while (isNumberOrDot(expr[pos])) {
      if (expr[pos] == '.') return true;
      pos--;
    }
    return false;
  }

  function addInput(input) {
    if (input.length > 1) return;
    if (calc.length > 10) return;
    if (!isNumberOrDot(input) && !isNumberOrDot(calc[calc.length - 1])) return;
    if (!isNumberOrDot(input) && calc == '0') return;
    if (input == '.' && lastNumberContainsDot(calc)) return;

    if (calc == '0' && input != '.') setCalc(input.toString());
    else setCalc((prevCalc) => prevCalc + input);
  }

  function clearCalc() {
    setCalc('0');
  }

  function evalCalc() {
    setCalc((prevCalc) => (+eval(prevCalc).toFixed(5)).toString());
  }

  function toggleSign() {
    // position before number
    let pos = calc.length - 1;
    while (isNumberOrDot(calc[pos])) {
      pos--;
    }

    if (calc[pos] == '+') {
      setCalc((prevCalc) => {
        return prevCalc.substring(0, pos) + '-' + prevCalc.substring(pos + 1);
      });
    } else if (calc[pos] == '-') {
      setCalc((prevCalc) => {
        return prevCalc.substring(0, pos) + '+' + prevCalc.substring(pos + 1);
      });
    } else {
      setCalc((prevCalc) => {
        return (
          prevCalc.substring(0, pos + 1) + '+' + prevCalc.substring(pos + 1)
        );
      });
    }
  }

  return (
    <div className='grid grid-cols-4 rounded-2xl grid-flow-row-dense shadow-xl text-slate-600 font-my-font text-2xl m-auto'>
      <p className='col-start-1 col-end-5 text-right text-cyan-50 bg-black p-6 pb-4 rounded-t-2xl text-3xl'>
        {calc}
      </p>
      <button
        onClick={clearCalc}
        className='bg-gray-200 p-4 hover:bg-gray-300'
        type='button'
      >
        C
      </button>
      <button
        onClick={toggleSign}
        className='bg-gray-200 p-4 hover:bg-gray-300'
        type='button'
      >
        +/-
      </button>
      <button
        onClick={() => addInput('%')}
        className='border border-1  bg-gray-200 py-4 px-6 hover:bg-gray-300'
        type='button'
      >
        %
      </button>
      <button
        onClick={() => addInput('/')}
        className='bg-red-400 p-4 hover:bg-red-500'
        type='button'
      >
        /
      </button>
      <button
        onClick={() => addInput('*')}
        className='bg-red-400 col-start-4 col-end-5 p-4 hover:bg-red-500'
        type='button'
      >
        x
      </button>
      <button
        onClick={() => addInput('-')}
        className='bg-red-400 col-start-4 col-end-5 p-4 hover:bg-red-500'
        type='button'
      >
        -
      </button>
      <button
        onClick={() => addInput('+')}
        className='bg-red-400 col-start-4 col-end-5 p-4 hover:bg-red-500'
        type='button'
      >
        +
      </button>
      <button
        onClick={evalCalc}
        className='bg-purple-300 col-start-3 col-end-5 p-2 rounded-br-2xl hover:bg-purple-400'
        type='button'
      >
        =
      </button>
      {numberElements}
      <button
        onClick={() => addInput('0')}
        className='border border-1 p-2 rounded-bl-2xl bg-white hover:bg-gray-50'
        type='button'
      >
        0
      </button>
      <button
        onClick={() => addInput('.')}
        className='border border-1 p-2 bg-white hover:bg-gray-50'
        type='button'
      >
        .
      </button>
    </div>
  );
};
export default Calculator;
