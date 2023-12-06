/**
 * post controller
 * mrwf brhy eugj zuvv
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService("api::post.post", ({ strapi }) => ({
  // Autenticação do usuário com o post
  async create(ctx: any) {
    const { title, content } = ctx.request.body.data;
    const publishedAt = new Date();
    const data = { title, content, user: ctx.state.user.id, publishedAt };

    return strapi.query("api::post.post").create({ data });
  },

  // Buscando todos os posts de um usuário
  async find(ctx: any) {
    const query = { ...ctx.query, user: ctx.state.user.id };
    return strapi.query("api::post.post").findPage({ where: query });
  },

  // Buscando um Post de um usuário
  async findOne(ctx: any) {
    const { id } = ctx.params;
    return strapi
      .query("api::post.post")
      .findOne({ where: { id, user: ctx.state.user.id } });
  },

  // Atualizando informações do post
  async update(ctx: any) {
    const data = ctx.request.body.data;
    const { id } = ctx.params;

    return strapi.query("api::post.post").update({
      where: { id, user: ctx.state.user.id },
      data: {
        ...data,
        user: ctx.state.user.id,
      },
    });
  },

  // Deletando post
  async delete(ctx: any) {
    const { id } = ctx.params;

    return strapi
      .query("api::post.post")
      .delete({ where: { id, user: ctx.state.user.id } });
  },

  // Contador de Posts do usuário
  async count(ctx: any) {
    const query = { ...ctx.query, user: ctx.state.user.id };
    return strapi.query("api::post.post").count({ where: query });
  },
}));
