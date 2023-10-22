import { defineConfig } from "vite";
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import react from "@vitejs/plugin-react";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  manifest: {
    theme_color: "#1D0093",
    background_color: "#1D0093",
    name: 'Carbbyn',
    short_name: 'Carbbyn',
    description: 'Your carbon credists in your pocket',
    orientation:'portrait',
    scope: "/",
    start_url: "/",
    icons: [
      {
        src: "/logo144.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        src: "/logo256.png",
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: "/logo512.png",
        sizes: "512x512",
        type: "image/png"
        
      }
    ]
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    VitePWA(manifestForPlugin)
  ]
});
