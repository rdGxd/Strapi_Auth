/**
 * post controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService("api::post.post", {
  // Autenticação do usuário com o post
  async create(ctx: any) {
    const { id } = ctx.state.user;
    const { title, content } = ctx.request.body.data;
    const publishedAt = new Date();
    const post = { title, content, user: id, publishedAt };

    const response = await super.create({
      data: {
        post,
      },
    });
    return response;
  },

  // Contador de Posts
  count(ctx) {
    const { query } = ctx.request;
    return strapi.query("api::post.post").count({ where: query });
  },
});


