export default {
  routes: [
    {
      method: "GET",
      path: "/posts/count",
      handler: "post.count",
    },
    {
      method: "GET",
      path: "/posts",
      handler: "post.find",
      config: {
        policies: ["global::is-logged-in"],
      },
    },
  ],
};
