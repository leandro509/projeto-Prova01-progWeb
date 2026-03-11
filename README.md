# Projeto de Site – Trabalho de Programação Web - 01
**Repositório:** [leandro509/projeto-Prova01-progWeb](https://github.com/leandro509/projeto-Prova01-progWeb)  

## 🎯 Objetivo  
Este projeto foi desenvolvido como parte do curso de Programação para Web, visando construir um site simples porém completo, com três páginas principais, autenticação via `localStorage`, cadastro de usuário, e diferentes tipos de campos de formulário. O tema do site é livre — neste caso representando uma empresa (por exemplo: “Meu Pet Shop”, “Escola X”, etc).

## 🧱 Estrutura do Projeto  
### Arquivos principais  
- `index.html` — Página inicial do site.  
- `pag2.html` — Tela de login (“Login” + “Senha” + botão “Autenticar”).  
- `pag3.html` — Tela de cadastro de usuário (formulário com diversos campos).  
- Diretório `src/` e/ou pastas de estilo e script (CSS, JS) conforme implementação.  

### Fluxo das páginas  
1. O usuário acessa a página inicial (`index.html`). Lá está o cabeçalho, a barra de menu (itens e subitens), imagem central + parágrafo descritivo, e rodapé.  
2. Na barra de menu, o item **“Login”** está ativo e leva à página de login (`pag2.html`).  
3. Na página de login, o usuário insere “Login” (campo texto) e “Senha” (campo password) — se ambos preenchidos, ao clicar “Autenticar” o login é salvo no `localStorage`, o estado de autenticação é gravado, e volta-se para a página inicial.  
4. Na página inicial, se o usuário **não estiver autenticado**, aparece no cabeçalho o texto “Usuário não autenticado”.  
5. Se o usuário **estiver autenticado**, no cabeçalho aparece uma foto fictícia do usuário + o conteúdo do campo “Login” armazenado no `localStorage`. Essa foto é um link para a página de cadastro (`pag3.html`).  
6. Na página de cadastro (`pag3.html`), existe um formulário com **6 campos fictícios**, sendo que pelo menos **3 campos são de tipos diferentes** (ex: radio, checkbox, date, select). Cada campo tem seu `label`. Há também um campo de radiogroup ou select com duas opções: “default” e “custom”. Se o usuário selecionar “custom”, muda-se o `font-family` dos labels e o `background-color` dos campos input; se “default”, volta-se ao estilo original. Depois há um botão de “Enviar” para submeter (apesar de só simular o envio).

## ✅ Funcionalidades implementadas  
- Armazenamento com `localStorage` do login do usuário e estado de autenticação.  
- Verificação de preenchimento dos campos de login antes de permitir autenticar.  
- Exibição condicional no cabeçalho do estado “Usuário não autenticado” ou “Usuário: \<login\> + foto”.  
- Linkagem entre páginas conforme enunciado (Login → página inicial → página de cadastro).  
- Formulário na página de cadastro com múltiplos tipos de campos e opção de personalização de estilo (tema default/custom).  
- Layout consistente entre as páginas: cabeçalho, barra de menu, área principal, rodapé.

## 🛠️ Tecnologias utilizadas  
- HTML5 – Estrutura das páginas  
- CSS3 – Estilização (incluindo variação de estilos com default/custom)  
- JavaScript – Manipulação do DOM, controle de autenticação, armazenamento local (`localStorage`)  
- (Opcional) Imagens, assets estáticos, organização de pastas (má prática ou boa prática conforme observado)

## 📁 Estrutura de pastas   

<pre> ``` projeto-Prova01-progWeb/
│
├── index.html # Página inicial do site
│
├── src/
│ ├── css/
│ │ └── estilos.css # Arquivo de estilos principais
│ │
│ ├── js/
│ │ └── script.js # Lógica de autenticação e interações
│ │
│ ├── imagens/
│ │ └── usuario.png # Foto fictícia do usuário (exemplo)
│ │
│ └── paginas/
│ ├── login.html # Página de login
│ └── cadastro.html # Página de cadastro
│
└── README.md # Documento descritivo do projeto ``` </pre>

## 🎬 Demonstração do Projeto  
Exemplo: [▶ Assistir demonstração](https://youtu.be/8hjI5-tX2GY)

## 🌐 Acesso ao Projeto (Deploy)

O projeto está disponível online através da plataforma de deploy da Vercel.

🔗 **Acesse o site:**  
https://basic-landing-page-nu.vercel.app

## 👤 Autores  
- Leandro Gabriel de Oliveira Nascimento

## 📜 Licença  
Este projeto foi desenvolvido para fins educacionais e de avaliação. Sinta-se à vontade para consultar, modificar e aprender com o código.
