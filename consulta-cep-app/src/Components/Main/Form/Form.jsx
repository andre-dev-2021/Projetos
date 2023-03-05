import { useState } from "react";

const Form = ({onQuery}) =>{

    const [cep, setCep] = useState('');

    function handleChange(e){
      setCep(e.target.value);
    }

    function handleClick(e){
        e.preventDefault();
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'cada795511mshec7b2bdea76ee48p1f0e4ejsn45bd53302d9a',
            'X-RapidAPI-Host': 'cep-brazil.p.rapidapi.com'
          }
        };
        
        fetch(`https://cep-brazil.p.rapidapi.com/correio/consulta/cep/${cep}`, options)
          .then(response => response.json())
          .then(response => onQuery(response))
          .catch(err => console.error(err));
    }

    return(
        <div className="m-1 justify-center space-x-4">
            <input
                className='bg-transparent border-b-2 border-indigo-900 p-1 placeholder-indigo-900 font-medium outline-none'
                placeholder='Informe um CEP'
                onChange={handleChange}
            ></input>
            <button
                className='border-2 bg-indigo-900 rounded-lg p-1 text-white font-medium'
                onClick={handleClick}>Consultar</button>
        </div>
    );
}

export default Form;