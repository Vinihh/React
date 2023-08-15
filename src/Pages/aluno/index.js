import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Alun from '../../components/alunos';


export default function Aluno() {
  const [mostrar, setMostrar] = useState(false)
  const [mostrarTabela, setMostrarTabela] = useState(false)
  const [nomeAluno, setNome] = useState('');
  const [chamadaAluno, setChamada] = useState(1);
  const [alunos, setAlunos] = useState([]);
  const[teste,setTeste] = useState('{() => excluir}')

  function adicionarAluno() {
    let aluno = {
      nome: nomeAluno, 
      chamada: chamadaAluno
    }
    setAlunos([...alunos, aluno])
    setMostrarTabela(true)
    setNome('')
    let x = chamadaAluno+1;
    setChamada(x)
    
    
  }

  function mostrarInfo() {
    setMostrar(!mostrar)
    setMostrarTabela(!mostrarTabela)
  }

  function excluir(excluirItem) {
    let novosAlunos = alunos.filter(item => item.chamada != excluirItem.chamada)
    setAlunos([...novosAlunos])
    
  }

return (
  <div className="pagina-lista-tarefa">
    <div className='container'>
      <div className='mostrar'>
        <h1> Lista de Alunos </h1>
        <button onClick={mostrarInfo}>
          {mostrar == true ? '-' : '+'}
        </button>
      </div>
      {mostrar == true &&
        <>
          <div>
            Nome: <input type='text' value={nomeAluno} onChange={e => setNome(e.target.value)} />
            Chamada: {chamadaAluno}
            <button onClick={adicionarAluno}> Adicionar </button>
          </div>
        </>
      }
      {mostrarTabela == true &&
        <>
          <div>
            <section>
              <table>
                <thead>
                  <tr>
                    <th>Chamada</th>
                    <th>Nome</th>
                    <th id='b3'></th>
                  </tr>
                </thead>

                <tbody>
                {alunos.map((alunos) => (
                        <Alun
                            nome={alunos.nome}
                            chamada={alunos.chamada}
                            button={teste}
                        />
                    ))}

                </tbody>
              </table>
            </section>
          </div>
        </>
      }
    </div>

    <Link className='voltar' to='/'> Voltar para Menu </Link>
  </div>
)
}