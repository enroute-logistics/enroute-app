import type { UserConfig } from '@commitlint/types'
import { RuleConfigSeverity } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'ci', // CI/CD changes
        'chore', // Build process or auxiliary tool changes
        'docs', // Documentation only changes
        'feat', // A new feature
        'fix', // A bug fix
        'refactor', // A code change that neither fixes a bug nor adds a feature
        'revert', // Revert to a commit
        'style', // Changes that do not affect the meaning of the code
        'test', // Adding missing tests or correcting existing tests
      ],
    ],
    'scope-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'api', // API related changes
        'auth', // Authentication related
        'map', // Google Maps integration
        'socket', // WebSocket functionality
        'store', // Global state management
        'ui', // UI components
        'types', // TypeScript types/interfaces
        'utils', // Utility functions
        'config', // Configuration files
        'deps', // Dependencies
        'env', // Environment variables
        'lint', // Linting and formatting
      ],
    ],
    'scope-empty': [RuleConfigSeverity.Disabled],
    'subject-case': [RuleConfigSeverity.Error, 'always', 'sentence-case'],
  },

  helpUrl: 'https://www.conventionalcommits.org/en/v1.0.0',
}

module.exports = Configuration
