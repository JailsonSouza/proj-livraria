import { Link } from 'react-router-dom';

const Home = () => {
    return (<>
        <h1>Página Home</h1>
        <Link to="/contato">Ir para a pagina de atendimento</Link>
    </>)
}

export { Home }