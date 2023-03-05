const Table = ({query}) =>{
    return(
        <div className="w-max table-auto bg-indigo-800 text-white font-semibold">
            <table>
                <thead> 
                    <tr>
                        <td className="border-2 border-white">Rua</td>
                        <td className="border-2 border-white">Bairro</td>
                        <td className="border-2 border-white">Cidade</td>
                        <td className="border-2 border-white" >UF</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-2 border-white">{query.end}</td>
                        <td className="border-2 border-white">{query.bairro}</td>
                        <td className="border-2 border-white">{query.cidade}</td>
                        <td className="border-2 border-white">{query.uf}</td>
                    </tr>
                </tbody>    
            </table>
        </div>
    );
}

export default Table;