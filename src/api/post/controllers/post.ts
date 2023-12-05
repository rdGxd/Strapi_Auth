/**
 * post controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService("api::post.post", ({ strapi }) => ({
  // Autenticação do usuário com o post
  async create(ctx: any) {
    const user = ctx.state.user.id;
    const { title, content } = ctx.request.body.data;
    const publishedAt = new Date();
    const data = { title, content, user, publishedAt };

    return strapi.query("api::post.post").create({ data });
  },

  // Buscando posts de apenas um usuário
  async find(ctx) {
    const query = { ...ctx.query, user: ctx.state.user.id };

    return strapi.query("api::post.post").findMany({ where: query });
  },

  // Contador de Posts
  count(ctx) {
    const { query } = ctx.request;
    return strapi.query("api::post.post").count({ where: query });
  },
}));
