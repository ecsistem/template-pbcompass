module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          // Lista de tipos de commit permitidos
          'feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci',
  
          // Permitir um tipo "aleatório" (qualquer coisa que siga o formato prefixo: mensagem)
          /^(.+: .+)$/,
        ],
      ],
      'type-empty': [0, 'never'], // Impedir tipos de commit vazios
      'subject-empty': [0, 'never'], // Permitir mensagens de commit vazias
      // 'subject-full-stop': [2, 'always', '.'], // Certifique-se de que a mensagem termine com um ponto.
      // 'subject-case': [2, 'always', 'sentence-case'], // Certifique-se de que a mensagem esteja em "sentence case".
    },
  };
  