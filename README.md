# Site Institucional IBIG

Site institucional da **Igreja Batista Independente de Guarulhos**, desenvolvido em React, Vite e Tailwind CSS. A experiência foi criada para apresentar a igreja, seus encontros semanais, ministérios, localização, registros da comunidade e um canal simples de contato por WhatsApp.

> **Status:** primeira versão visual em desenvolvimento contínuo.

## Deploy

Acesse a aplicação: https://oarthursacra.netlify.app/

## Visão geral

O projeto segue uma direção editorial e comunitária, com a identidade da IBIG em vermelho, preto, dourado e verde-musgo. A página inicial combina fotografia documental, tipografia editorial e blocos assimétricos para comunicar acolhimento, presença no bairro e participação comunitária.

A primeira versão foi estruturada para ser **estática e simples de publicar**. Não há banco de dados, autenticação, painel administrativo ou armazenamento de mensagens. O formulário de contato prepara uma mensagem e abre o WhatsApp do visitante; os dados digitados não são salvos pelo site.

## Conteúdo atual

| Área | Conteúdo |
|---|---|
| Abertura | Chamada “Há um lugar à mesa para você”, foto da comunidade e convite para os próximos encontros |
| Agenda | EBD, culto da família, oração, culto de ensino, culto de louvor e encontro de jovens/adolescentes |
| Ministérios | Ministério de Louvor, Jovens & Adoles, MINIBIG e EBD |
| Presença no bairro | Texto institucional e foto horizontal de uma ação comunitária |
| Galeria | Registros de louvor, juventude, crianças e comunidade |
| Contato | Formulário sem persistência de dados, endereço e chamadas para WhatsApp |
| Redes sociais | Link para o perfil oficial [@ibigru](https://www.instagram.com/ibigru/) |

A EBD está apresentada sem fotografia própria até que a igreja envie uma imagem específica para essa frente.

## Stack utilizada

| Tecnologia | Função |
|---|---|
| React 19 | Componentes e renderização da interface |
| Vite | Desenvolvimento local e build de produção |
| TypeScript | Tipagem e verificação estática |
| Tailwind CSS 4 | Tokens e utilitários de estilo |
| Wouter | Navegação simples do frontend |
| Lucide React | Ícones da interface |
| Framer Motion | Base disponível para microinterações futuras |

## Estrutura principal

```text
client/
  index.html             # Metadados e entrada do aplicativo
  public/                # Apenas arquivos pequenos de configuração
  src/
    components/          # Componentes reutilizáveis e componentes UI
    contexts/             # Contextos do aplicativo
    pages/
      Home.tsx            # Página principal institucional
      NotFound.tsx        # Página de rota não encontrada
    index.css             # Identidade visual, responsividade e animações
    App.tsx               # Roteamento e composição global
    main.tsx              # Inicialização do React
server/
  index.ts                # Servidor de compatibilidade do template
shared/
  const.ts                # Constantes compartilhadas
```

O projeto é frontend-first. A pasta `server/` pertence à estrutura de compatibilidade do template e não contém regras de negócio ou armazenamento de dados do site.

## Requisitos

Para executar o projeto localmente, instale:

- Node.js 20 ou superior;
- pnpm 10 ou uma versão compatível;
- Git, caso deseje acompanhar o histórico ou enviar alterações ao GitHub.

## Instalação local

Clone o repositório público e entre na pasta do projeto:

```bash
git clone https://github.com/osacra/igreja.git
cd igreja
```

Instale as dependências:

```bash
pnpm install
```

Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

O Vite exibirá no terminal o endereço local do preview. As alterações feitas nos arquivos do frontend são refletidas automaticamente durante o desenvolvimento.

## Comandos disponíveis

| Comando | Finalidade |
|---|---|
| `pnpm dev` | Inicia o servidor de desenvolvimento |
| `pnpm run check` | Executa a verificação TypeScript sem gerar arquivos |
| `pnpm run build` | Gera o build de produção e valida a compilação |
| `pnpm run preview` | Abre uma prévia local do build |
| `pnpm run format` | Formata os arquivos com Prettier |

Antes de cada marco importante, recomenda-se executar `pnpm run check` e `pnpm run build`.

## WhatsApp e formulário

O formulário atualmente funciona sem backend. Ao ser enviado, ele monta o nome e a mensagem digitados pelo visitante e abre uma nova conversa no WhatsApp. Como o número oficial ainda não foi informado, o código usa um link genérico preparado para receber essa configuração.

Para configurar o número oficial, abra `client/src/pages/Home.tsx` e altere a constante `whatsappHref` para o formato internacional do WhatsApp, sem espaços, sinais ou parênteses:

```tsx
const whatsappHref = `https://wa.me/5511999999999?text=${whatsappMessage}`;
```

Substitua `5511999999999` pelo número oficial da igreja. O prefixo `55` corresponde ao Brasil e o número deve incluir DDD. Depois da alteração, execute novamente `pnpm run check` e `pnpm run build`.

## Fotos e assets

As imagens do site são mantidas fora do diretório do projeto e publicadas no armazenamento persistente do ambiente. Essa organização evita colocar arquivos pesados em `client/public/` ou `client/src/assets/`.

Ao receber novas fotos, o fluxo recomendado é:

1. identificar a finalidade da imagem, como EBD, louvor, jovens, MINIBIG ou fachada;
2. verificar autorização de uso e escolher a melhor orientação e qualidade;
3. armazenar o original fora do projeto;
4. enviar o asset para o armazenamento do site;
5. usar no código a URL persistente retornada pelo armazenamento;
6. validar o enquadramento no desktop e no celular.

Fotos com texto de cartaz, datas antigas, rostos cortados ou baixa resolução devem ser usadas apenas quando fizerem sentido documental. Para a home, priorize imagens horizontais com pessoas e ambiente visíveis.

## Informações institucionais atuais

| Informação | Valor |
|---|---|
| Igreja | Igreja Batista Independente de Guarulhos — IBIG |
| Endereço | R. Augusto Calheiros, 124 — Guarulhos, SP |
| Instagram | [instagram.com/ibigru](https://www.instagram.com/ibigru/) |
| Início da igreja | 1986, conforme a comunicação institucional utilizada no site |

Os horários e descrições dos encontros devem ser revisados pela liderança antes da publicação definitiva, principalmente quando houver mudança de programação.

## Publicação

O site foi preparado para publicação estática. O preview e os checkpoints são gerenciados pelo ambiente do projeto, e a publicação deve ser feita pelo botão **Publish** da interface de gerenciamento após selecionar um checkpoint estável.

Para uma publicação segura:

1. valide a home em desktop e mobile;
2. confirme os horários, o endereço, o Instagram e o WhatsApp;
3. execute `pnpm run check`;
4. execute `pnpm run build`;
5. salve um checkpoint estável;
6. publique pelo painel de gerenciamento.

Não há necessidade de configurar banco de dados ou serviço de backend para a versão atual.

## Próximas evoluções planejadas

As próximas melhorias podem incluir a fotografia específica da EBD, páginas individuais para ministérios, uma página de história da igreja, melhoria do formulário com opção de e-mail, integração com transmissões dos cultos e uma agenda de eventos mais detalhada.

Essas evoluções devem preservar a proposta estática enquanto não houver uma necessidade concreta de armazenamento ou administração dinâmica de conteúdo.

## Licença e uso de imagens

O código pode ser evoluído dentro do repositório da igreja. As fotografias e a logo pertencem à comunicação da IBIG e devem ser usadas somente com autorização da igreja e das pessoas retratadas. Antes de reutilizar qualquer imagem em outro material, confirme a autorização correspondente.
