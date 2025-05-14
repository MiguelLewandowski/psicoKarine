# Site da Psicóloga Karine Strapazon

Este é o repositório do site da Psicóloga Karine Strapazon, desenvolvido com HTML, JavaScript e Tailwind CSS.

## Tecnologias Utilizadas

- HTML5
- JavaScript (jQuery)
- Tailwind CSS v3.3.0
- Font Awesome (ícones)
- Google Fonts (Poppins)

## Estrutura do Projeto

```
├── dist/
│   └── output.css       # CSS compilado e minificado
├── src/
│   ├── index.html       # Arquivo HTML principal
│   └── input.css        # Arquivo CSS de entrada para o Tailwind
├── img/                 # Pasta de imagens
├── package.json         # Configuração do npm
├── tailwind.config.js   # Configuração do Tailwind CSS
├── postcss.config.js    # Configuração do PostCSS
└── README.md            # Este arquivo
```

## Instalação

1. Clone o repositório:
   ```
   git clone [URL_DO_REPOSITORIO]
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Verifique a instalação:
   ```
   node verificar-instalacao.js
   ```

## Desenvolvimento

Para trabalhar no desenvolvimento do site, execute:

```
npm run dev
```

Isso irá iniciar o Tailwind CSS em modo de observação, recompilando o CSS a cada alteração nos arquivos HTML ou CSS.

## Build para produção

Para gerar a versão de produção otimizada, execute:

```
npm run build
```

Isso irá gerar um arquivo CSS minificado com apenas as classes utilizadas no projeto.

## Solução de Problemas

Se encontrar problemas com a instalação ou compilação, tente:

1. Desinstalar e reinstalar as dependências:
   ```
   npm uninstall tailwindcss postcss autoprefixer
   npm install -D tailwindcss@3.3.0 postcss@8.4.23 autoprefixer@10.4.14
   ```

2. Verificar a configuração:
   ```
   node verificar-instalacao.js
   ```

3. Atualizar o Browserslist:
   ```
   npx update-browserslist-db@latest
   ```

## Notas sobre a migração para build local do Tailwind

Este projeto foi migrado de uma versão que utilizava Tailwind CSS via CDN para uma versão com build local, o que resultou em:

1. **Redução significativa do tamanho do CSS** - Apenas as classes utilizadas são incluídas no build final
2. **Melhor performance** - CSS minificado e otimizado
3. **Manutenção mais fácil** - Configuração centralizada no arquivo tailwind.config.js
4. **Versão específica** - Utiliza a versão 3.3.0 do Tailwind CSS para garantir compatibilidade e estabilidade

## Contato

Karine Strapazon - Psicóloga | CRP 07/32730
- Instagram: [@psicokarinestrapazon](https://www.instagram.com/psicokarinestrapazon)
- WhatsApp: [(51) 99724-6990](https://api.whatsapp.com/send?phone=5551997246990&text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.)
