import './index.scss';

export default function Alun(props){

    
    return(

            <tr className='comp-aluno'>
              <td>{props.chamada}</td>
              <td>{props.nome}</td>
              <button onClick={props.button}>Excluir</button>
            </tr>

    )   
}