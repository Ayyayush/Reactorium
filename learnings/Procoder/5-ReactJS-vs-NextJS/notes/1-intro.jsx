/**
 * ===============================
 * WHAT IS NEXT.JS
 * ===============================
 *
 * 🔹 Definition:
 *
 * Next.js is a React-based framework that provides
 * production-ready features like:
 * - Server-Side Rendering (SSR)
 * - Static Site Generation (SSG)
 * - File-based routing
 * - Built-in performance optimizations
 *
 * Next.js uses React internally but removes the need
 * for heavy manual configuration.
 *
 *
 * ===============================
 * REACT.JS vs NEXT.JS
 * ===============================
 *
 * 🔹 React.js
 *
 * - React is a UI library
 * - Used mainly for building client-side applications
 * - Rendering happens mostly in the browser (CSR)
 * - Needs external tools for:
 *   • Routing
 *   • SEO
 *   • Code splitting
 *   • Server-side rendering
 *
 *
 * 🔹 Next.js
 *
 * - Next.js is a full-stack React framework
 * - Supports multiple rendering strategies:
 *   • CSR (Client-Side Rendering)
 *   • SSR (Server-Side Rendering)
 *   • SSG (Static Site Generation)
 * - Has built-in routing system
 * - SEO-friendly by default
 * - Better performance out of the box
 *
 *
 * ===============================
 * KEY DIFFERENCES (SUMMARY)
 * ===============================
 *
 * React.js:
 * - UI library
 * - Client-side rendering by default
 * - Manual setup required
 *
 * Next.js:
 * - React framework
 * - Server + client rendering
 * - Opinionated & optimized
 *
 *
 * ===============================
 * DIFFERENCE IN SYNTAX
 * ===============================
 *
 * 🔹 React.js Syntax (CRA / Vite)
 *
 * - Entry file:
 *   index.js / main.jsx
 *
 * - Routing:
 *   Uses react-router-dom
 *
 * Example:
 *
 *   function App() {
 *       return <h1>Hello React</h1>;
 *   }
 *
 *
 * 🔹 Next.js Syntax
 *
 * - Entry handled internally by Next.js
 * - File-based routing
 * - Pages created using folder structure
 *
 * Example:
 *
 *   app/page.js  OR  pages/index.js
 *
 *   export default function Home() {
 *       return <h1>Hello Next.js</h1>;
 *   }
 *
 *
 * ===============================
 * ROUTING DIFFERENCE
 * ===============================
 *
 * React.js:
 * - Routes defined manually
 *
 * Next.js:
 * - Routes created automatically from files
 *
 * Example:
 *   pages/about.js  →  /about
 *
 *
 * ===============================
 * SEO DIFFERENCE
 * ===============================
 *
 * React.js:
 * - Poor SEO by default (CSR)
 *
 * Next.js:
 * - SEO-friendly (SSR / SSG)
 *
 *
 * ===============================
 * WHEN TO USE WHAT
 * ===============================
 *
 * Use React.js when:
 * - Building small to medium SPAs
 * - SEO is not critical
 * - Full control is required
 *
 * Use Next.js when:
 * - SEO matters
 * - Performance is critical
 * - Building production-grade apps
 *
 *
 * ===============================
 * ONE-LINE REVISION
 * ===============================
 *
 * React is a UI library,
 * Next.js is a framework built on top of React
 * that adds server-side rendering and routing.
 */
