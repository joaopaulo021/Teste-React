import './App.css'
import Form from './components/Form'

const App: React.FC = () => {
  const handleFormSubmit = (nome: string, valor: number, parcelas: number) => {
    console.log('Valores do formulário:', nome, valor, parcelas);
  };

  return (
    <>
      <h1>Solicitação de emprestimo</h1>
      <Form onSubmit={handleFormSubmit} />
    </>


  )
}

export default App
