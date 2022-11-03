import { useState } from 'react';
const Calculator = () => {
  const numberElements = [];
  for (let i = 9; i > 0; i--) {
    numberElements.push(
      <button
        onClick={() => addInput(i.toString())}
        className='border border-gray-100 bg-white p-1 hover:bg-gray-50 hover:text-gray-900'
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
    <div className='m-auto grid grid-flow-row-dense grid-cols-4 rounded-2xl font-my-font text-2xl text-slate-600 shadow-xl'>
      <p className='col-start-1 col-end-5 rounded-t-2xl bg-black p-6 pb-4 text-right text-3xl text-cyan-50'>
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
        className='border-1 border  bg-gray-200 py-4 px-6 hover:bg-gray-300'
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
        className='col-start-4 col-end-5 bg-red-400 p-4 hover:bg-red-500'
        type='button'
      >
        x
      </button>
      <button
        onClick={() => addInput('-')}
        className='col-start-4 col-end-5 bg-red-400 p-4 hover:bg-red-500'
        type='button'
      >
        -
      </button>
      <button
        onClick={() => addInput('+')}
        className='col-start-4 col-end-5 bg-red-400 p-4 hover:bg-red-500'
        type='button'
      >
        +
      </button>
      <button
        onClick={evalCalc}
        className='col-start-3 col-end-5 rounded-br-2xl bg-purple-300 p-2 hover:bg-purple-400'
        type='button'
      >
        =
      </button>
      {numberElements}
      <button
        onClick={() => addInput('0')}
        className='border-1 rounded-bl-2xl border bg-white p-2 hover:bg-gray-50'
        type='button'
      >
        0
      </button>
      <button
        onClick={() => addInput('.')}
        className='border-1 border bg-white p-2 hover:bg-gray-50'
        type='button'
      >
        .
      </button>
    </div>
  );
};
export default Calculator;
