declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MOVIE_APP_API_KEY: string;
      MOVIE_APP_API_READ_ACCESS_TOKEN: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
export {};
