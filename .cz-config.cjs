module.exports = {
  types: [
    { value: 'feat', name: 'feat: Nova funcionalidade.' },
    { value: 'fix', name: 'fix: Correção de bug.' },
    { value: 'docs', name: 'docs: Alterações na documentação.' },
    { value: 'style', name: 'style: Estilos (sem alteração de lógica).' },
    { value: 'refactor', name: 'refactor: Refatoração de código.' },
    { value: 'deps', name: 'deps: Adição ou atualização de dependências.' },
    { value: 'perf', name: 'perf: Melhoria de performance.' },
    { value: 'test', name: 'test: Testes.' },
    { value: 'chore', name: 'chore: Tarefas de manutenção.' },
    { value: 'build', name: 'build: Mudanças no sistema de build ou dependências externas.' },
    { value: 'ci', name: 'ci: Mudanças em arquivos de configuração de CI.' },
    { value: 'revert', name: 'revert: Reversão de commits anteriores.' },
    { value: 'wip', name: 'wip: Trabalho em progresso.' },
    { value: 'temp', name: 'temp: Alterações temporárias.' },
    { value: 'security', name: 'security: Alterações relacionadas à segurança.' },
    { value: 'design', name: 'design: Alterações no design visual ou UX/UI.' },
    { value: 'locale', name: 'locale: Alterações relacionadas à localização (i18n).' },
    { value: 'ux', name: 'ux: Melhorias na experiência do usuário.' },
    { value: 'config', name: 'config: Alterações nas configurações do projeto.' },
    { value: 'data', name: 'data: Alterações na estrutura ou no conteúdo dos dados.' }
  ],
  messages: {
    type: 'Selecione o tipo de alteração que você está commitando:',
    subject: 'Escreva uma descrição breve:',
    body: 'Escreva uma descrição longa (opcional):',
    footer: 'Adicione alguma informação no rodapé (opcional):',
    confirmCommit: 'Você confirma o commit acima?'
  },
  subjectLimit: 100 // Limite para o título do commit
};
