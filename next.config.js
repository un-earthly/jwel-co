/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    stripe_secret_key: process.env.STRIPE_SECRET_KEY,
    mongo_pass: process.env.MONGO_PASS,
    mongo_admin: process.env.MONGO_ADMIN,
  }
}
