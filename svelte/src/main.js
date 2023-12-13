import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
    lastName: "Ja",
  },
});

export default app;
