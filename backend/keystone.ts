import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb:/localhost/keystone-hexcraft-portfolio';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long should they stay logged in
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // todo: add data seeding here
  },
  lists: createSchema({
    // schema items go in here
  }),
  ui: {
    // change this for roles
    isAccessAllowed: () => true,
  },
  // add session values here
});
