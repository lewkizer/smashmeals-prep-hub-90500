import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";
import Prerender from "vite-plugin-prerender";

// All static routes to prerender (excludes dynamic routes like /product/:id, /blog/:slug)
const prerenderRoutes = [
  '/',
  '/how-it-works',
  '/about',
  '/partners',
  '/service-areas',
  '/contact',
  '/catering',
  '/menu',
  '/faq',
  '/blogs',
  '/freezer-meals',
  '/heat-and-eat',
  '/delivery-info',
  '/thanksgiving',
  '/christmas',
  '/glp1',
  '/vs-clean-eatz',
  '/comparison',
  '/gluten-free-meal-prep-guide',
  '/tri-cities-meal-prep',
  '/high-protein-shipping',
  '/persona-meal-prep',
  '/athletes',
  '/bariatric',
  '/bariatric-line',
  '/families',
  '/elderly',
  '/charitys-chocolate',
  // Major Tri-Cities
  '/johnson-city',
  '/kingsport',
  '/bristol',
  '/greeneville',
  '/elizabethton',
  '/jonesborough',
  '/erwin',
  // Local Tri-Cities
  '/piney-flats',
  '/blountville',
  '/damascus',
  '/gray',
  '/chucky',
  '/mosheim',
  '/unicoi',
  '/telford',
  '/limestone',
  '/fall-branch',
  '/mount-carmel',
  '/church-hill',
  '/rogersville',
  '/morristown',
  '/mountain-city',
  '/tusculum',
  '/baileyton',
  '/bulls-gap',
  '/surgoinsville',
  '/newport',
  '/glade-spring',
  '/chilhowie',
  '/marion',
  '/abingdon',
  // East Tennessee
  '/knoxville',
  '/sevierville',
  '/gatlinburg',
  '/pigeon-forge',
  '/oak-ridge',
  '/cleveland',
  '/cookeville',
  '/crossville',
  '/maryville',
  '/dandridge',
  '/seymour',
  '/alcoa',
  '/athens',
  '/lenoir-city',
  '/loudon',
  '/sweetwater',
  '/madisonville',
  '/harriman',
  '/la-follette',
  '/tazewell',
  '/jellico',
  // Major Regional
  '/asheville',
  '/charlotte',
  '/greenville',
  '/chattanooga',
  '/nashville',
  '/atlanta',
  '/raleigh-durham',
  '/charleston',
  '/columbia',
  '/roanoke',
  '/richmond',
  '/washington-dc',
  '/lexington',
  '/charlottesville',
  '/triad-nc',
  '/boone-hickory',
  '/spartanburg',
  // Kentucky
  '/louisville',
  '/bowling-green',
  '/owensboro',
  '/paducah',
  '/richmond-ky',
  '/frankfort',
  // Virginia
  '/blacksburg',
  '/lynchburg',
  '/winchester',
  '/staunton',
  '/harrisonburg',
  '/danville',
  '/martinsville',
  // North Carolina
  '/hickory',
  '/gastonia',
  '/wilmington',
  '/high-point',
  '/winston-salem',
  // South Carolina / Georgia
  '/myrtle-beach',
  '/rock-hill',
  '/augusta',
  '/columbus',
  // West Virginia / Alabama
  '/charleston-wv',
  '/huntington',
  '/huntsville',
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'og-image.jpg'],
      manifest: {
        name: 'Smash Meals',
        short_name: 'Smash Meals',
        description: 'Fresh, healthy meal prep delivered to your door',
        theme_color: '#FF6B35',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/app-icon.webp',
            sizes: '192x192',
            type: 'image/webp',
            purpose: 'any maskable'
          },
          {
            src: '/app-icon.webp',
            sizes: '512x512',
            type: 'image/webp',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,webp}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB limit
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.*\.supabase\.co\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'supabase-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 // 24 hours
              }
            }
          }
        ]
      }
    }),
    mode === "production" && Prerender({
      staticDir: path.resolve(__dirname, 'dist'),
      routes: prerenderRoutes,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
