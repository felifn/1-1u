@echo off
echo ========================================
echo   DEPLOYING RUINED WEBSITE TO VERCEL
echo ========================================
echo.

echo Step 1: Installing Vercel CLI...
npm install -g vercel

echo.
echo Step 2: Deploying to Vercel...
vercel --prod

echo.
echo ========================================
echo   DEPLOYMENT COMPLETE!
echo ========================================
echo.
echo Your site should be live now!
echo Check your Vercel dashboard for the URL.
echo.
pause 