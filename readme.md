# Simulador de Empréstimo
Este projeto é um simulador de empréstimo que permite ao usuário calcular o valor total com juros de 5%, o valor das parcelas e a quantidade de parcelas desejadas

## Tecnologias Utilizadas

- React
- Typescript
- Styled Components

## Como Utilizar

1. Acesse o aplicativo implantado em [https://teste-react-2.vercel.app](https://teste-react-2.vercel.app).
2. Digite seu nome.
3. Digite o valor que deseja solicitar o empréstimo.
4. Digite a quantidade de parcelas.
5. Confirme os dados para gerar o valor calculado com 5% de juros e valor das parcelas.

## Funcionalidades
- Cálculo automático do valor total com juros de 5%
- Exibição do valor das parcelas e quantidade de parcelas
- Confirmação do empréstimo
- Carregamento durante a confirmação do empréstimo

## Componentes
O projeto é composto pelos seguintes componentes:

<details>
  <summary style="color: blue;">MockData</summary>
  Responsável por simular uma requisição ao backend e fornecer os dados simulados para o simulador de empréstimo.
</details>

<details>
<summary style="color: blue;">Form</summary>
Componente de formulário onde o usuário insere o nome, valor e quantidade de parcelas desejadas.
</details>

<details>
  <summary><span style="color: blue;">DataDisplay</span></summary>

  Exibe os dados do empréstimo calculados, incluindo o valor das parcelas, a quantidade de parcelas e o valor total com juros de 5%. Permite ao usuário confirmar o empréstimo.
</details>

<details>
  <summary><span style="color: blue;">DataParcela</span></summary>

  Componente reutilizável dos valores retornados do mock utilizado no PopUp, ConfirmPage e DataDisplay.
</details>

<details>
  <summary><span style="color: blue;">PopUp</span></summary>

  Componente de pop-up que exibe os dados do empréstimo calculados e permite ao usuário confirmar ou cancelar o empréstimo.
</details>

<details>
  <summary><span style="color: blue;">ConfirmPage</span></summary>

  Página de confirmação do empréstimo, exibindo uma mensagem de sucesso e os detalhes do empréstimo. Permite ao usuário voltar para a página inicial.
</details>

## Desenvolvimento

Se você deseja executar o projeto localmente e realizar alterações, siga as etapas abaixo:

1. Clone este repositório em sua máquina local usando o seguinte comando:

```shell
git clone https://github.com/seu-usuario/Teste-React.git
```

2. Acesse o diretório do projeto:

```shell
cd app-Teste-React
```

3. Instale as dependências do projeto:

```shell
npm install
```

4. Inicie o servidor de desenvolvimento:

```shell
npm run dev
```

5. Abra seu navegador e acesse seu localHost para visualizar o aplicativo em execução.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema no aplicativo ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue.

## Autor

João Paulo
Licença

Contato
Caso tenha alguma dúvida ou sugestão sobre este projeto, sinta-se à vontade para entrar em contato através do seguinte email: jpgoncalves021@gmail.com.