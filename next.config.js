module.exports = {
  env: {
    apiKey: String(process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
    authDomain: String(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN),
    projectId: String(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID),
    storageBucket: String(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET),
    messagingSenderId: String(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID),
    appId: String(process.env.NEXT_PUBLIC_FIREBASE_APP_ID),
    databaseURL: String(process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL),
  },
  reactStrictMode: true,
  // I don't want it to run when compiling as I trust the CI stage of the pipeline and Husky.
};
