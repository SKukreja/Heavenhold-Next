import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://api.heavenhold.com/graphql',
  documents: './graphql/**/*.{gql,graphql}',
  ignoreNoDocuments: true, 
  generates: {
    './graphql/generated/types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        avoidOptionals: true,
      }
    }, 
  },
}  

 
export default config;