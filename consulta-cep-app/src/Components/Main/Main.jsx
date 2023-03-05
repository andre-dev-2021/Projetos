import { useState } from 'react';
import Form from "./Form/Form";
import Table from "./Table/Table";

const Main = () =>{
    const [query, setQuery] = useState({});

    function handleList(endereco){
      if(endereco.status === undefined){
            setQuery(endereco);
      }else{
        alert(endereco.message)
      }
    }
  
    return(
        <div className='flex flex-col items-center w-96 h-auto justify-around'>
            <Form onQuery={handleList}/>
            <Table query={query}/>
        </div> 
    );
}

export default Main;