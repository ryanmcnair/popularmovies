module.exports = {
  env: {
    FIREBASE_API_KEY: process.env.apiKey,
    AUTH_DOMAIN: process.env.authDomain,
    PROJECT_ID: process.env.projectId,
    STORAGE_BUCKET: process.env.storageBucket,
    MESSAGING_SENDER_ID: process.env.messagingSenderId,
    APP_ID: process.env.appId,
  },
  reactStrictMode: true,
  // I don't want it to run when compiling as I trust the CI stage of the pipeline and Husky.
  ignoreDuringBuilds: true,
};
