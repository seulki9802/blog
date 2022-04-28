import {useState} from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({ name: '', nick: '' });

  function onReset() {
    setInputs({ name: '', nick: '' });
  }

  const onChange = (e) => {
    const { value, className } = e.target;
    setInputs({
      ...inputs,
      [className] : value
    })
  }

  return(
    <>
      <input className='name' placeholder='name' onChange={ onChange } value={ inputs.name } />
      <input className='nick' placeholder='nick' onChange={ onChange } value={ inputs.nick } />
      <button onClick={ onReset }>reset</button>
      <div>
        <b>result: </b>
        { inputs.name }({ inputs.nick })
      </div>
    </>
  )

}

export default InputSample;