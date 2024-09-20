module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all your components are included
  ],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
      },
      animation: {
        typewriter: "typewriter 4s steps(30) forwards", // Only run once
        "cursor-blink": "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

