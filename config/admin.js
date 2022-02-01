module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '673860fca3fd42c4b8dc3dbb0fa16546'),
  },
});
