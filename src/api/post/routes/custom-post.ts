export default {
  routes: [
    {
      method: "GET",
      path: "/posts/count",
      handler: "post.count",
      config: {
        policies: ["global::is-logged-in"],
      },
    },
    {
      method: "GET",
      path: "/posts",
      handler: "post.find",
      config: {
        policies: ["global::is-logged-in"],
      },
    },
    {
      method: "GET",
      path: "/posts/:id",
      handler: "post.findOne",
      config: {
        policies: ["global::is-logged-in"],
      },
    },
    {
      method: "GET",
      path: "/posts",
      handler: "post.create",
      config: {
        policies: ["global::is-logged-in"],
      },
    },
  ],
};
