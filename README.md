**MY BANK API**

API feita com express + winston + cors. Para criação de contas e realização de transações alterando diretamente o saldo de cada um dos clientes da API. Também com Routers (express) para controle de rotas.

Para startar:

    npm install
Você desta forma irá instalar todas dependências como o express (para instanciar o servidor e modularizar as rotas), winston (geração do arquivo de logs) e cors (controlar o fornecimento da API em rotas externas).

    npm run dev
   Com este comando você irá inicializar o servidor:
![iniciando o servidor](https://i.ibb.co/G7ZtvBw/image.png)

Terá as seguintes opções nesta API:

GET /(accounts)

![listar todas as contas](https://i.ibb.co/y5rngq2/image.png)

GET /(accounts)/(:id)

![GET by id dar um get em tudo](https://i.ibb.co/C930vxZ/image.png)

POST /(accounts)

![POST accounts](https://i.ibb.co/1rFgCMV/image.png)

DELETE /(accounts)/(:id)

![DELETE by ID](https://i.ibb.co/LCCk3Dx/image.png)

PUT /(accounts)

![PUT by ID](https://i.ibb.co/yk7cw3v/image.png)

POST (accounts)/(transactions)

![Transactions by POST](https://i.ibb.co/9WRvGLC/image.png)

Plataforma criada para o IGTI como exercício para aprendizado.

![assinatura OPADILHA](https://i.ibb.co/6Y83fBR/image.png)
