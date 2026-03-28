# Moments

This repository contains scripts for batch logo analysis and cropping, plus a static status page used for deployment health checks.

Deployed status: **Live**. If you see the default page from `index.html`, the static site is working.

## Key Files

- `analyze_logos.py`
- `crop_logos_tight.py`
- `crop_logos_v2.py`
- `SUPABASE_SETUP.md`
- `index.html`
- `vercel.json`

## Vercel Deployment (Static)

Use these project settings in Vercel:

- Root directory: `/`
- Framework Preset: `Other` (Static site)
- Build command: `echo "skip"` (or leave empty)
- Output directory: `/`

## Route Fallback Fix

This repo includes `vercel.json` with a catch-all rewrite:

- All routes (`/:path*`) rewrite to `index.html`

This prevents route-level 404 errors when accessing non-root paths on a static deployment.

## Quick Verification

After deploy:

1. Open `/` and confirm the status page loads.
2. Open any random route (for example `/test-route`) and confirm it still serves `index.html`.
3. Confirm Vercel no longer shows a 404 page.

If this message appears, the 404 issue is resolved.
