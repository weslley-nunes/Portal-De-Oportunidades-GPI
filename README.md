# Portal de Oportunidades Gratuitas - Gurupi TO

![Portal de Oportunidades](https://img.shields.io/badge/Status-Ativo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-blue)

## 📋 Sobre o Projeto

O **Portal de Oportunidades Gratuitas** é uma aplicação web desenvolvida para centralizar informações sobre vagas de emprego e cursos de capacitação gratuitos na cidade de Gurupi, Tocantins. O projeto surge como solução para um problema real identificado na comunidade local: a dispersão de informações sobre oportunidades de trabalho e qualificação profissional.

### 🎯 Objetivo

Criar uma plataforma digital inclusiva, intuitiva e acessível que conecte pessoas a oportunidades de emprego e capacitação, promovendo o desenvolvimento econômico e social da região.

### 🌟 Características Principais

- **Interface Responsiva**: Adaptação automática para desktop, tablet e mobile
- **Navegação Intuitiva**: Sistema de páginas com transições suaves
- **Busca em Tempo Real**: Filtros dinâmicos para vagas e cursos
- **Design Moderno**: Interface limpa e profissional
- **Acessibilidade**: Estrutura preparada para tecnologias assistivas
- **Performance Otimizada**: Carregamento rápido e experiência fluida

## 🚀 Demonstração

### 🏠 Página Inicial
- Seção hero com call-to-action
- Estatísticas do portal (vagas, cursos, usuários)
- Navegação rápida para seções principais

### 💼 Página de Vagas
- Listagem de oportunidades de emprego
- Filtro de busca por cargo, empresa ou descrição
- Cards informativos com salário e localização
- Botão de candidatura para cada vaga

### 🎓 Página de Cursos
- Catálogo de cursos gratuitos disponíveis
- Busca por título, instituição ou modalidade
- Informações sobre duração e formato do curso
- Sistema de inscrição integrado

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com Flexbox e Grid
- **JavaScript ES6+**: Interatividade e manipulação do DOM

### Recursos Implementados
- **CSS Grid & Flexbox**: Layout responsivo e flexível
- **Media Queries**: Adaptação para diferentes dispositivos
- **Local Storage**: Persistência do estado da navegação
- **Intersection Observer**: Animações suaves de entrada
- **Event Listeners**: Interações dinâmicas do usuário

## 📁 Estrutura do Projeto

```
portal-html/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos principais
├── js/
│   └── script.js           # Lógica da aplicação
├── images/                 # Recursos visuais
├── README.md              # Documentação
└── LICENSE                # Licença do projeto
```

## 🔧 Instalação e Uso

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desenvolvimento)

### Instalação Local

1. **Clone o repositório**
   ```bash
   git clone https://github.com/weslley-nunes/Portal-De-Oportunidades-GPI/
   cd portal-oportunidades
   ```

2. **Abra o projeto**
   - Opção 1: Abra o arquivo `index.html` diretamente no navegador
   - Opção 2: Use um servidor local (recomendado)
   
   ```bash
   # Com Python 3
   python -m http.server 8000
   
   # Com Node.js (npx)
   npx serve .
   
   # Com PHP
   php -S localhost:8000
   ```

3. **Acesse a aplicação**
   - Navegador direto: `file:///caminho/para/index.html`
   - Servidor local: `http://localhost:8000`

## 💡 Funcionalidades

### 🔍 Sistema de Busca
- **Busca em Tempo Real**: Resultados atualizados conforme digitação
- **Filtros Múltiplos**: Busca por título, empresa/instituição, descrição
- **Feedback Visual**: Indicação quando nenhum resultado é encontrado

### 🎨 Interface do Usuário
- **Design Responsivo**: Mobile-first com breakpoints otimizados
- **Animações Suaves**: Transições CSS e JavaScript coordenadas
- **Estados Visuais**: Hover, focus e active states bem definidos
- **Tipografia Legível**: Hierarquia clara e contraste adequado

### ⌨️ Acessibilidade
- **Navegação por Teclado**: Atalhos Alt+1, Alt+2, Alt+3
- **HTML Semântico**: Tags apropriadas para leitores de tela
- **Contraste de Cores**: Conformidade com diretrizes WCAG
- **Áreas de Toque**: Botões dimensionados para dispositivos móveis

### 📱 Responsividade
- **Mobile (até 768px)**: Layout em coluna única, navegação adaptada
- **Tablet (769px - 1024px)**: Grid de 2 colunas, elementos redimensionados
- **Desktop (1024px+)**: Layout completo com 3+ colunas

## 🎯 Dados de Demonstração

### Vagas Disponíveis
1. **Desenvolvedor Frontend** - Tech Solutions (R$ 3.500)
2. **Assistente Administrativo** - Comércio Local (R$ 1.800)
3. **Técnico em Informática** - InfoTech (R$ 2.200)

### Cursos Oferecidos
1. **Informática Básica** - SENAC (40h, Presencial)
2. **Capacitação em Vendas** - SEBRAE (30h, Híbrido)
3. **Programação Web** - IFTO (60h, Online)

## 🔄 Funcionalidades Futuras

### Versão 2.0 (Planejada)
- [ ] Sistema de autenticação de usuários
- [ ] Painel administrativo para empresas e instituições
- [ ] API REST para integração com backend
- [ ] Sistema de notificações por email
- [ ] Filtros avançados (localização, salário, área)
- [ ] Sistema de favoritos e candidaturas salvas
- [ ] Dashboard personalizado por tipo de usuário
- [ ] Integração com redes sociais
- [ ] Sistema de avaliações e comentários
- [ ] Certificados digitais para cursos concluídos

### Melhorias Técnicas
- [ ] Progressive Web App (PWA)
- [ ] Service Workers para cache offline
- [ ] Otimização de imagens (WebP, lazy loading)
- [ ] Implementação de testes automatizados
- [ ] CI/CD com GitHub Actions
- [ ] Monitoramento de performance
- [ ] Analytics de uso da plataforma

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **Fork o projeto**
2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. **Commit suas mudanças**
   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. **Push para a branch**
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. **Abra um Pull Request**

### 📋 Diretrizes de Contribuição
- Mantenha o código limpo e bem documentado
- Siga as convenções de nomenclatura existentes
- Teste suas alterações em diferentes dispositivos
- Atualize a documentação quando necessário
- Respeite a estrutura de arquivos estabelecida

## 🐛 Reportar Problemas

Encontrou um bug ou tem uma sugestão? Abra uma [issue](https://github.com/weslley-nunes/Portal-De-Oportunidades-GPI/issues) com:

- **Descrição clara** do problema ou sugestão
- **Passos para reproduzir** (se aplicável)
- **Screenshots** (se relevante)
- **Informações do ambiente** (navegador, dispositivo, etc.)

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👥 Equipe

### Desenvolvimento
- Weslley Nunes 

### Agradecimentos
- Comunidade de Gurupi-TO pela identificação da necessidade
- Instituições locais pelo apoio ao projeto
- Desenvolvedores da comunidade open source

## 📞 Contato

### Projeto
- **Website**: [Portal de Oportunidades](https://github.com/weslley-nunes/Portal-De-Oportunidades-GPI/)
- **Repositório**: [GitHub](https://github.com/weslley-nunes/Portal-De-Oportunidades-GPI/)

### Suporte
- **Issues**: [GitHub Issues](https://github.com/weslley-nunes/Portal-De-Oportunidades-GPI/issues)
- **Discussões**: [GitHub Discussions](https://github.com/weslley-nunes/Portal-De-Oportunidades-GPI/discussions)

## 📊 Estatísticas do Projeto

![GitHub stars](https://img.shields.io/github/stars/seu-usuario/portal-oportunidades?style=social)
![GitHub forks](https://img.shields.io/github/forks/seu-usuario/portal-oportunidades?style=social)
![GitHub issues](https://img.shields.io/github/issues/seu-usuario/portal-oportunidades)
![GitHub pull requests](https://img.shields.io/github/issues-pr/seu-usuario/portal-oportunidades)

## 🏆 Reconhecimentos

- **Projeto Integrador de TI** - Universidade Federal do Mato Grosso do Sul/UFMS
- **Comunidade Open Source** - Ferramentas e inspiração
- **Cidade de Gurupi-TO** - Contexto e necessidade real

---

**Desenvolvido com ❤️ para a comunidade de Gurupi-TO**

*Conectando pessoas a oportunidades, construindo o futuro juntos.*

