module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f05fde64c7a9366958348677f5b0cca3'),
  },
});
