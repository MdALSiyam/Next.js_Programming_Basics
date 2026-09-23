# Next.js Learning Journey
---
## Level 1: Basics & Routing

1. **Basic Page Routing (`app/page.js` & `app/about/page.js`)**
   - File-based routing in Next.js App Router.
   - Client-side navigation using Next.js `Link` component.

2. **Dynamic Routing (`app/blog/[id]/page.js`)**
   - Dynamic route creation using square brackets `[id]`.
   - Accessing URL parameters asynchronously using `params`.

3. **Server Component vs Client Component (`app/counter/page.js`)**
   - Server Components by default in Next.js.
   - Using `'use client'` directive to enable React hooks (`useState`) and interactivity.

---

## Level 2: Layouts & Server Data Fetching

1. **Root Layout (`Part-2/app/layout.js`)**
   - Shared layout across all routes (Navbar, Footer, Global Styles).
   - Managing metadata for SEO.

2. **Nested Layouts (`Part-2/app/dashboard/layout.js`)**
   - Defining specific layouts for sub-routes (e.g., Dashboard sidebar).
   - Preserving state and avoiding re-renders across sub-navigation.

3. **Server-side Data Fetching (`Part-2/app/users/page.js`)**
   - Fetching data directly inside Server Components using `async/await`.
   - Dynamic fetching behavior (`cache: 'no-store'`).

---

## Level 3: Route Groups, UI States & API Routes

1. **Loading UI (`Part-3/app/posts/loading.js`)**
   - Instant loading states powered by React Suspense.

2. **Error Handling (`Part-3/app/posts/error.js`)**
   - Graceful error boundaries using `'use client'` directive and reset handlers.

3. **API Route Handlers (`Part-3/app/api/hello/route.js`)**
   - Creating custom backend API endpoints within Next.js using `NextResponse`.
