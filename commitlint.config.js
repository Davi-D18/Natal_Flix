export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Define os tipos permitidos para commits
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nova funcionalidade
        'fix', // Correção de bug
        'docs', // Documentação
        'style', // Estilos (sem alteração de lógica)
        'refactor', // Refatoração de código
        'perf', // Melhoria de performance
        'test', // Testes
        'chore', // Tarefas de manutenção
        'build', // Mudanças no sistema de build ou dependências externas
        'ci', // Mudanças em arquivos de configuração de CI
        'revert', // Reversão de commits anteriores
        'wip', // Trabalho em progresso
        'temp', // Alterações temporárias
        'security', // Alterações relacionadas à segurança
        'design', // Alterações no design visual ou UX/UI
        'locale', // Adições ou modificações relacionadas à localização (i18n)
        'ux', // Melhorias na experiência do usuário
        'deps', // Adição ou atualização de dependências
        'data', // Alterações na estrutura ou no conteúdo dos dados
        'config' // Alterações nas configurações do projeto
      ]
    ],
    // Regras personalizada para verificar se há uma mensagem após o prefixo
    'subject-empty': [2, 'never'],
    'subject-min-length': [2, 'always', 3], // Mensagem do commit deve ter no mínimo 3 caracteres após o prefixo
    'header-max-length': [2, 'always', 72] // Tamanho máximo do título (mensagem)
  }
}
