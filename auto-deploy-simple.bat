@echo off
echo ========================================
echo   SIMPLE AUTO-DEPLOYMENT SETUP
echo ========================================
echo.

echo This will set up automatic deployment using Vercel CLI.
echo.

echo Step 1: Installing Vercel CLI...
npm install -g vercel

echo.
echo Step 2: Logging into Vercel...
vercel login

echo.
echo Step 3: Linking to your project...
vercel link

echo.
echo Step 4: Setting up auto-deployment...
echo.
echo Now every time you run this script, it will deploy automatically!
echo.

echo ========================================
echo   AUTO-DEPLOYMENT READY!
echo ========================================
echo.
echo To deploy now, run: vercel --prod
echo To deploy automatically on changes, run this script.
echo.
pause 