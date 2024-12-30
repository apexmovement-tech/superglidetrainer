import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: "/superglidetrainer",
    },
  },

  preprocess: [
    preprocess({
      scss: {},
    }),
  ],
};

export default config;
