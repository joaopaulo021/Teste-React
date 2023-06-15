import './App.css'
import Form from './components/Form'
import MockData from './components/MockData';

const App: React.FC = () => {
  // const handleFormSubmit = (nome: string, valor: number, parcelas: number) => {
  //   console.log('Valores do formulário:', nome, valor, parcelas);
  // };

  const handleMockSubmit = (valorParcelas: number, numeroParcelas: number, totalComJuros: number) => {
    console.log('Valores simulados do backend:', valorParcelas, numeroParcelas, totalComJuros);
    // Aqui você pode utilizar os valores simulados como desejar, como exibir na interface ou atualizar estados
  };

  return (
    <>
      <h1>Solicitação de emprestimo</h1>
      <MockData onSubmit={handleMockSubmit} />
    </>


  )
}

export default App
