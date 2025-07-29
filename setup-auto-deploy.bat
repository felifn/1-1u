@echo off
echo ========================================
echo   SETTING UP AUTO-DEPLOYMENT
echo ========================================
echo.

echo Step 1: Opening GitHub repository settings...
start https://github.com/felifn/1-1u/settings/hooks

echo.
echo Step 2: Opening Vercel project settings...
start https://vercel.com/dashboard

echo.
echo ========================================
echo   AUTO-DEPLOYMENT SETUP GUIDE
echo ========================================
echo.

echo INSTRUCTIONS:
echo.
echo 1. In GitHub (first tab):
echo    - Look for Vercel webhook
echo    - If missing, add webhook manually
echo    - URL: https://vercel.com/api/webhooks/github
echo.
echo 2. In Vercel (second tab):
echo    - Go to your project settings
echo    - Find "Git" section
echo    - Make sure connected to felifn/1-1u
echo    - Enable "Auto Deploy"
echo.
echo 3. Test auto-deployment:
echo    - Any push to main branch will auto-deploy
echo    - Check Vercel dashboard for new deployments
echo.
echo ========================================
echo   SETUP COMPLETE!
echo ========================================
echo.
echo Follow the instructions above to enable auto-deployment.
echo.
pause 