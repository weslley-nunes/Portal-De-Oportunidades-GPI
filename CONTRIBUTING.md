# Guia de Contribuição

Obrigado por considerar contribuir para o Portal de Oportunidades Gratuitas! Este documento fornece diretrizes para contribuições ao projeto.

## 🤝 Como Contribuir

### Reportando Bugs

1. **Verifique se o bug já foi reportado** nas [issues existentes](https://github.com/weslley.nunes/portal-oportunidades/issues)
2. **Crie uma nova issue** se o bug não foi reportado
3. **Use o template de bug report** e forneça:
   - Descrição clara do problema
   - Passos para reproduzir
   - Comportamento esperado vs atual
   - Screenshots (se aplicável)
   - Informações do ambiente (navegador, dispositivo, etc.)

### Sugerindo Melhorias

1. **Verifique se a sugestão já existe** nas issues
2. **Crie uma nova issue** com o label "enhancement"
3. **Descreva claramente**:
   - O problema que a melhoria resolve
   - A solução proposta
   - Alternativas consideradas
   - Impacto esperado

### Contribuindo com Código

1. **Fork o repositório**
2. **Crie uma branch** para sua feature:
   ```bash
   git checkout -b feature/nome-da-feature
   ```
3. **Faça suas alterações** seguindo as diretrizes de código
4. **Teste suas alterações** em diferentes navegadores/dispositivos
5. **Commit suas mudanças**:
   ```bash
   git commit -m "feat: adiciona nova funcionalidade"
   ```
6. **Push para sua branch**:
   ```bash
   git push origin feature/nome-da-feature
   ```
7. **Abra um Pull Request**

## 📝 Diretrizes de Código

### HTML
- Use HTML5 semântico
- Mantenha a estrutura limpa e organizada
- Adicione comentários para seções complexas
- Garanta acessibilidade (alt text, ARIA labels)

### CSS
- Siga a metodologia BEM para nomenclatura
- Use unidades relativas (rem, em, %)
- Mantenha especificidade baixa
- Organize propriedades alfabeticamente
- Comente seções importantes

### JavaScript
- Use ES6+ features
- Mantenha funções pequenas e focadas
- Use nomes descritivos para variáveis/funções
- Adicione comentários para lógica complexa
- Evite poluição do escopo global

## 🎨 Padrões de Design

### Cores
- Primária: #3498db (azul)
- Secundária: #2c3e50 (azul escuro)
- Ação: #e74c3c (vermelho)
- Sucesso: #27ae60 (verde)
- Aviso: #f39c12 (laranja)

### Tipografia
- Fonte principal: Segoe UI
- Hierarquia clara (h1, h2, h3)
- Line-height: 1.6 para legibilidade

### Espaçamento
- Use múltiplos de 0.5rem (8px)
- Mantenha consistência vertical
- Respeite breathing room

## 🧪 Testes

### Testes Manuais
- Teste em Chrome, Firefox, Safari, Edge
- Verifique responsividade (mobile, tablet, desktop)
- Teste navegação por teclado
- Valide acessibilidade básica

### Checklist de PR
- [ ] Código segue as diretrizes estabelecidas
- [ ] Funcionalidade testada em múltiplos navegadores
- [ ] Design responsivo verificado
- [ ] Sem erros no console
- [ ] Documentação atualizada (se necessário)

## 📋 Convenções de Commit

Use o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` mudanças na documentação
- `style:` formatação, ponto e vírgula, etc
- `refactor:` refatoração de código
- `test:` adição ou correção de testes
- `chore:` tarefas de manutenção

Exemplos:
```
feat: adiciona sistema de busca em tempo real
fix: corrige layout quebrado no mobile
docs: atualiza README com novas instruções
```

## 🏷️ Labels das Issues

- `bug`: Algo não está funcionando
- `enhancement`: Nova funcionalidade ou melhoria
- `documentation`: Melhorias na documentação
- `good first issue`: Boa para iniciantes
- `help wanted`: Ajuda extra é bem-vinda
- `question`: Mais informações são necessárias

## 📞 Comunicação

- **Issues**: Para bugs e sugestões
- **Discussions**: Para perguntas gerais
- **Pull Requests**: Para contribuições de código

## 🙏 Reconhecimento

Todos os contribuidores serão reconhecidos no README do projeto. Obrigado por ajudar a tornar o Portal de Oportunidades melhor para a comunidade de Gurupi!

---

**Dúvidas?** Abra uma [discussion](https://github.com/weslley.nunes/portal-oportunidades/discussions) ou entre em contato através das issues.

