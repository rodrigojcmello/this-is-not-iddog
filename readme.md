Pilares

React
    
    - O projeto foi feito apenas com components funcionais (hooks)
    - O modal foi feito com React.Portal
    - Não usei Redux, usei Hooks com Context API
    - O estilo foi feito com Styled-Components
    - Há um arquivo de tema e um Contexto criado com suporte a dark mode, a lógica está pronto, só foi implementado por falta de tempo
    - As animações foram feita com React Spring, um conceito de animação que permite interrompoer as transições em execução
    - As rotas foram separadas para uma melhor leitura
    - Eu prefiro usar meu próprop webpack, mas também trabalho com CRA, Next e Gatsby

Testes

    - Não tenho o costume de fazer teste unitário, o que tenho que admitir que é uma má prática. A última vez que trabalhei com TDD foi apenas com React e não com React e TypeScript, a implementação com TypeScript me fez ter alguns problemas, problemas nos quais eu não conseguir concluir os testes.

Linter

    - O projeto tem ESLint, TypeScript, Prettier, Editor Config e Style Lint
    - O Projeto não nenhum nenhum any no TypeScript, tudo foi devidamente tipado, infelizmente minha única dificuldade no projeto inteiro foi o teste unitário o que deixei para fazer por último e acabou dando uns problemas com o Jest e o TypeScript, eu não estava conseguindo fazer o Jest identificar o Mock das chamadas de API nos compenentes feitos, ele sempre tentava chamar a API real, estou tentando ferificar isso. Em testes normais o Jest funcionou bem, o teste com API que me deu block no restante dos testes.
   
Validação de formulário

    - Geralmente uso Formik e Yup para falidações de formulário, neste caso como era apenas um campo, não achei necessário o Yup.
    
Requisições

    - Eu não esquici dos loaders! Só não achei necessário, pois a API é muito rápida e meu tempo escasso. Loaders são importantíssimo, como pós graduado em usuablidade eu sei disso, um loader só deve ser chamado após 800ms, e essa API era mais rápida que isso, ou seja, seria desncessário para ESTE teste, mas em uma aplicação real, teria que ter independentemente da resposta da API
    - Eu também não tratei os erros, digo, provavemente não vai quebrar a aplicação se a API der uma resposta diferente, justamente pela forma que fiz as interfaces no TypeScript, mas novamente, não acho que seria esse o foco do teste. Tratamento de erro é algo importante sim, mas acabei gastando mais tempo com as animações do que tinha imaginado, ao menos ficaram legais.    
    
Resultado Final

    - A aplicação está fluída.
    - Eu queria ter feito o switch de tema para dark mode, a lógica está pronta, só não coloquei o botão para mudar.
    - Eu ia colocar internaciolização também, mas como haviam tão poucos textos, acabei deixando de lado, eu teria que criar novos textos só para compensar o trabalho de colocar i18n.
    - Eu não limpei o fundo (as outras imagens) quando se atualiza a tela quando se está com o modal aberto, assim como no gif. Ao atualizar a página o modal se mantem aberto com o fundo da categoria selecionada, eu até ia limpar o fundo mas novamente, por falta de tempo. Eu sei que o facebook é assim, abre um modal com o post e depois se vc atualizar ele vira uma página e não um modal.
    - O Token está no localstorage, eu não o criptografei, sei que daria, mas não o fiz #tempo
 
Now (Hospedagem)

    - Eu lembro de quando o Now lançou, mas na época eu estava iniciando no Azure Devops, e nunca cheguei a testar o Now. Com esse teste eu tive essa oportunidade, ele é muito simples, porém não achei um exemplo claro de como trabalhar com SPA nele, eu li a documentação, segui o exemplo e não funcionou. Eu tive que setar na mão cada rota (o que no caso apenas duas) para fazer a atualização das páginas não quebrarem ao estar em uma rota diferente da /
    
Service Worker

    - Eu perdi um tempo legal com o TDD e não consegui configurar o WorkBox, cachear as imagens não me pareceu tão importante por causa do meu tempo, eu só consegui trabalhar pra valer no projeto nesse final de semana, eu tenho saído muito tarde do trabalho durante a semana. Mas sim, eu sei configurar um service worker (workbox)
    
Fontes

    - O projeto tem a fonte Roboto, eu pensei em baixar outra fonte apenas para o título para seguir mais a arte de vocês, mas novamente, faltou tempo. Eu baixo as web fontes e as deixo locamente, raramente uso dependências remotas
    
Setup e dependências

    - Eu gosto de dominar as ferramas que uso, trabalho com react e webpack há 4 anos, com typescript há 1 ano, Todo o setup foi feito por mim, toda a configuração do TypeScript, ESlint, Webpack foi feita por mim, e eu sei o que cada linha faz.
    - Eu adotei esse biblioteca de animações (react spring) há duas semanas, eu fiquei em dúvida se utilizaria ela aqui ou se usária a outra que já estava mais acontumado, mas no fim deu tudo certo. Essa biblioteca da uma liberdade absurda, tanto para o desenvolvedor quanto para o usuário.
    - Eu não usei Axios pois refiro ter o mínimo de dependencias no projeto, justamente para deixá-lo mais leve, um dos motivos de também não usar Redux, já que o react já tem recurso o suficiente para substituí-lo.  
  
Instalação

    - um simples npm i na pasta do projeto
    
Execução

    - npm start (sim, eu uso npm, yarn é legal e tal, mas não vamos ser extremistas aqui)
    
Testes

    - npm run test
    - Só um teste vai passar, como já disse antes, mockar os dados para as funções asincronas com TS quebraram as minhas pernas
    
Considerações Finais

    - Eu quis fazer uma aplicação modelo. Tipada sem nenhum Any, apenas com Hooks. As animações ficaram boas, e tal, mas eu queria ter feito mais. Acreito que o que vocês esperaram no gif eu entreguei, minha falha real foi o TDD
    - São pouquissimas as empresas no Brasil que usam TypeScript (com React ou Node, uma vez que Angular te obriga a usar), e também sei que TDD também é raro no brasil, eu foquei em um e esquici o outro, mas isso vai mudar.
    - Independentemente do resultado eu gostaria de um feedback, eu espero que vocês vejam as coisas que eu afirmei não ter feito por falta de tempo visando a literal falta de tempo e não preguiça, tive que trabalhar +2h por dia durante a semana, + o sábado, eu devo ter feito 70% hoje (domingo), alguém na Crefisa achou que adiantar um projeto em 3 meses seria uma boa ideia.
