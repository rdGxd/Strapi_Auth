/**
 * post controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService("api::post.post", {
  async create(ctx: any) {
    const response = await super.create({
      data: {
        publishedAt: new Date(),
        user: ctx.state.user.id,
        title: ctx.request.body.data.title,
        content: ctx.request.body.data.content
      }
    });
    return response
  },
});
