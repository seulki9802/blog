import {useState, useRef} from 'react';

function InputSample() {

  const [inputs, setInputs] = useState({
    name: '',
    nick: ''
  });

  const nameInput = useRef();

  const onChange = (e) => {
    const { value, className } = e.target;
    setInputs({
      ...inputs,
      [className] : value
    })
  }

  function onReset() {
    setInputs({
      name: '',
      nick: ''
    });
    console.log(nameInput)
  }

  return(
    <>
      <input className='name' placeholder='name' onChange={ onChange } value={ inputs.name } ref={ nameInput } />
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