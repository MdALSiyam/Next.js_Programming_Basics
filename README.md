# Next.js Learning Journey

This repository contains basic to advanced concepts of Next.js App Router organized across 10 progressive parts.

---

## Part-1: Basics & Routing

1. **Basic Page Routing (`Part-1/app/page.js` & `Part-1/app/about/page.js`)**
   - File-based routing in Next.js App Router.
   - Client-side navigation using Next.js `Link` component.

2. **Dynamic Routing (`Part-1/app/blog/[id]/page.js`)**
   - Dynamic route creation using square brackets `[id]`.
   - Accessing URL parameters asynchronously using `params`.

3. **Server Component vs Client Component (`Part-1/app/counter/page.js`)**
   - Server Components by default in Next.js.
   - Using `'use client'` directive to enable React hooks (`useState`) and interactivity.

---

## Part-2: Layouts & Server Data Fetching

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

## Part-3: Route Groups, UI States & API Routes

1. **Loading UI (`Part-3/app/posts/loading.js`)**
   - Instant loading states powered by React Suspense.

2. **Error Handling (`Part-3/app/posts/error.js`)**
   - Graceful error boundaries using `'use client'` directive and reset handlers.

3. **API Route Handlers (`Part-3/app/api/hello/route.js`)**
   - Creating custom backend API endpoints within Next.js using `NextResponse`.

---

## Part-4: SSG, ISR & Dynamic Metadata

1. **Static Site Generation (SSG) & Incremental Static Regeneration (ISR) (`Part-4/app/posts/[id]/page.js`)**
   - Static rendering combined with background revalidation using `next: { revalidate: 60 }`.

2. **Dynamic Metadata (`Part-4/app/posts/[id]/page.js`)**
   - Generating dynamic SEO metadata tags per page using `generateMetadata()`.

---

## Part-5: Server Actions & Form Mutations

1. **Server Actions (`Part-5/app/feedback/page.js`)**
   - Mutating data on the server using `'use server'` functions directly from HTML forms.

2. **Path Revalidation (`Part-5/app/feedback/page.js`)**
   - Triggering instant UI updates via `revalidatePath()`.

---

## Part-6: Middleware & Route Protection

1. **Middleware Request Filtering (`Part-6/middleware.js`)**
   - Intercepting requests globally to check authentication cookies and handle redirects.

2. **Authentication Flow (`Part-6/app/login/page.js`)**
   - Simulating client-side user login and setting authentication cookies.

3. **Protected Routes (`Part-6/app/protected/dashboard/page.js`)**
   - Restricting unauthorized access to dashboard routes via dynamic middleware routing.

---

## Part-7: Advanced Optimization

1. **Image & Font Optimization (`Part-7/app/optimized/page.js`)**
   - Zero-CLS font loading with `next/font` and automatic image resizing via `next/image`.

---

## Part-8: Database Integration with Prisma ORM

1. **Prisma Schema & Client Setup (`Part-8/prisma/schema.prisma` & `Part-8/lib/prisma.js`)**
   - Database model definition and singleton Prisma client pattern.

2. **Server Actions with Database Mutation (`Part-8/app/users/page.js`)**
   - Performing CRUD operations directly using Prisma inside Server Actions.

---

## Part-9: Production Caching & Security

1. **Advanced Data Caching (`Part-9/app/cached-data/page.js`)**
   - Server-side function caching strategies using `unstable_cache`.

---

## Part-10: Production Deployment & Health Checks

1. **API Health Check Endpoint (`Part-10/app/api/health/route.js`)**
   - Server health monitoring and status endpoint for production environment monitoring.

2. **Environment Configuration (`Part-10/app/env-test/page.js`)**
   - Managing environment variables and production readiness checks.
