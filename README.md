# Next.js App Router Learning Journey

A practical, hands-on masterclass roadmap covering Next.js App Router from foundational basics to advanced full-stack concepts, database integration, and production deployment.

---

## Part-1: Basics & File-Based Routing
- **Routing**: File-based page creation (`page.js`) and dynamic URL handling (`[id]`).
- **Components**: Server Components (default for zero client JS) vs Client Components (`'use client'`).
- **Files**: `Part-1/app/page.js`, `Part-1/app/about/page.js`, `Part-1/app/blog/[id]/page.js`, `Part-1/app/counter/page.js`

## Part-2: Layouts & Server Data Fetching
- **Layouts**: Shared Root Layout (`layout.js`) and state-preserving Nested Layouts.
- **Data Fetching**: Direct async server-side fetching without external libraries.
- **Files**: `Part-2/app/layout.js`, `Part-2/app/dashboard/layout.js`, `Part-2/app/users/page.js`

## Part-3: Route Groups, UI States & API Handlers
- **UI States**: Suspense instant skeletons (`loading.js`) and isolated error fallbacks (`error.js`).
- **API Routes**: Modern backend endpoints using `NextResponse` (`route.js`).
- **Files**: `Part-3/app/posts/loading.js`, `Part-3/app/posts/error.js`, `Part-3/app/api/hello/route.js`

## Part-4: SSG, ISR & Dynamic Metadata
- **Caching**: Static Site Generation (SSG) combined with background revalidation (`revalidate: 60`).
- **SEO**: Dynamic page title and meta tag generation via `generateMetadata()`.
- **Files**: `Part-4/app/posts/[id]/page.js`

## Part-5: Server Actions & Form Mutations
- **Mutations**: Native server functions (`'use server'`) triggered directly from HTML forms.
- **Cache**: Instant UI cache invalidation using `revalidatePath()`.
- **Files**: `Part-5/app/feedback/page.js`

## Part-6: Middleware & Route Protection
- **Middleware**: Global request filtering and cookie/JWT session checking (`middleware.js`).
- **Security**: Restricting unauthorized access with automated redirects to login routes.
- **Files**: `Part-6/middleware.js`, `Part-6/app/login/page.js`, `Part-6/app/protected/dashboard/page.js`

## Part-7: Advanced Optimization
- **Performance**: Zero-CLS font preloading (`next/font`) and optimized responsive images (`next/image`).
- **Files**: `Part-7/app/optimized/page.js`

## Part-8: Database Integration with Prisma ORM
- **ORM**: Singleton Prisma client pattern with declarative schema modeling.
- **Full-Stack**: Direct database CRUD operations via Server Actions.
- **Files**: `Part-8/prisma/schema.prisma`, `Part-8/lib/prisma.js`, `Part-8/app/users/page.js`

## Part-9: Production Caching Strategies
- **Caching**: Storing heavy query results using server-level `unstable_cache`.
- **Files**: `Part-9/app/cached-data/page.js`

## Part-10: Health Checks & Production Deployment
- **Monitoring**: API diagnostic routes (`200 OK`) and environment variable validation for production readiness.
- **Files**: `Part-10/app/api/health/route.js`, `Part-10/app/env-test/page.js`

---

## Local Development

1. **Clone & Navigate**:
   ```bash
   git clone [https://github.com/MdALSiyam/Next.js_Programming_Basics.git](https://github.com/MdALSiyam/Next.js_Programming_Basics.git)
   cd Next.js_Programming_Basics
