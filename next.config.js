module.exports = {
  env: {
    FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    DATABASE_URL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  },
  reactStrictMode: true,
  // I don't want it to run when compiling as I trust the CI stage of the pipeline and Husky.
};
