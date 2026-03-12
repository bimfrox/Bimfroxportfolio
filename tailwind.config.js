export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        soft: "var(--bg-soft)",
        card: "var(--card)",
        border: "var(--border)",

        text: "var(--text)",
        muted: "var(--text-muted)",

        primary: "var(--primary)",
        accent: "var(--accent)",

        btn: "var(--button-bg)",
        btnText: "var(--button-text)",
      },
    },
  },
  plugins: [],
};
