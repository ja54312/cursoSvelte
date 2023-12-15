import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "JA",
    lastName: "Alatorre",
  },
});

export default app;
