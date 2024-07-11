declare module "*.png" {
    const value: string;
    export default value;
  }
declare namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GRAPHQL_ENDPOINT: string;
    }
  }
  