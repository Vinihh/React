import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';


export default function Aluno() {

  const [nomeAluno, setNome] = useState('');
  const [chamadaAluno, setChamada] = useState(0);
  const [alunos, setAlunos] = useState([]);
  

  function adicionarAluno() {
    let aluno = {
      nome: nomeAluno, chamada: chamadaAluno
    }
    setAlunos([...alunos,aluno])
  }

  return (
    <div className="pagina-lista-tarefa">
      <div className='container'>
        <h1> Lista de Alunos </h1>
        <div>
          Nome: <input type='text' value={nomeAluno} onChange={e => setNome(e.target.value)} />
          Chamada: <input type='text' value={chamadaAluno} onChange={e => setChamada(e.target.value)} />
          <button onClick={adicionarAluno}> Adicionar </button>
        </div>
        <div>
          <section>
          <table>
            <thead>
              <tr>
                <th>Chamada</th>
                <th>Nome</th>
              </tr>
            </thead>
            <tbody>
              {alunos.map(item =>
                <tr>
                  <td>{item.chamada}</td>
                  <td>{item.nome}</td>
                </tr>
              )}

            </tbody>
          </table>
          </section>
        </div>

      </div>

      <Link className='voltar' to='/'> Voltar para Menu </Link>
    </div>
  )
}