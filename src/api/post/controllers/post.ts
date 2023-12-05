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

  // Buscando todos os posts de apenas um usuário
  async find(ctx) {
    const query = { ...ctx.query, user: ctx.state.user.id };
    return strapi.query("api::post.post").findPage({ where: query });
  },

  // Buscando apenas um Post do usuário
  async findOne(ctx) {
    const { id } = ctx.params;
    return strapi.query("api::post.post").findOne({ where: { id, user: ctx.state.user.id } });
  },

  // Contador de Posts do usuário
  count(ctx) {
    const query = { ...ctx.query, user: ctx.state.user.id };
    return strapi.query("api::post.post").count({ where: query });
  },
}));
