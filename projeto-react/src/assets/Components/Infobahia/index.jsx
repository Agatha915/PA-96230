import { useState } from 'react';
import './style.css';
import logo from '../../assets/images/logo.png';

function InfoCliente() {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [posicao, setPosicao] = useState('');
    const [listaJogadores, setListaJogadores] = useState([]);

    function adicionarJogador(event) {
        event.preventDefault();

        // Validação simples
        if (!nome || !numero || !posicao) {
            alert('Preencha todos os campos!');
            return;
        }

        setListaJogadores([
            ...listaJogadores,
            { nome, numero, posicao }
        ]);

        // Limpar os campos
        setNome('');
        setNumero('');
        setPosicao('');
    }

    return (
        <div className="InfoBahia">
            <img src={logo} alt="Logo do time" className="Jogo-icone" />
            <h2>Esporte Clube Bahia</h2>

            <form onSubmit={adicionarJogador}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Número da Camisa:</label>
                    <input
                        type="number"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Posição:</label>
                    <input
                        type="text"
                        value={posicao}
                        onChange={(e) => setPosicao(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Adicionar Jogador</button>
            </form>

            <hr />

            <h3>Lista de Jogadores</h3>
            <ul>
                {listaJogadores.map((jogador, index) => (
                    <li key={index}>
                        {jogador.nome} - {jogador.numero} - {jogador.posicao}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default InfoJogadores;




