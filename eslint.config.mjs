import withNuxt from './.nuxt/eslint.config.mjs';
import vueParser from 'vue-eslint-parser';
import tseslint from 'typescript-eslint';

const eslint = withNuxt(
    {},
    [...[...tseslint.configs.strictTypeChecked].map(conf => ({
      ...conf,
      plugins: {
        '@typescript-eslint': tseslint.plugin,
      },
      languageOptions: {
        parser: vueParser,
        parserOptions: {
          parser: tseslint.parser,
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
          sourceType: 'module',
        },
      },
    }))]
);

export default eslint;