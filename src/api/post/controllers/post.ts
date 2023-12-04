/**
 * post controller
 */

import { factories } from "@strapi/strapi";

module.exports = factories.createCoreController("api::post.post", {
  count(ctx) {
    var { query } = ctx.request;
    return strapi.query("api::post.post").count({ where: query });
  },
});
