@echo off
echo ========================================
echo   FORCE DEPLOY FAVICON AND TITLE
echo ========================================
echo.

echo Step 1: Committing favicon changes...
git add -A
git commit -m "FORCE DEPLOY: Fix favicon and title - $(date /t)"

echo.
echo Step 2: Pushing to GitHub...
git push

echo.
echo Step 3: Opening Vercel for immediate deployment...
start https://vercel.com/new

echo.
echo Step 4: DEPLOYMENT INSTRUCTIONS:
echo.
echo 1. Click "Import Git Repository"
echo 2. Search for: felifn/1-1u
echo 3. Select it and click "Deploy"
echo 4. Wait 2-5 minutes for deployment
echo 5. Your favicon and title will work!
echo.

echo Step 5: After deployment, verify:
echo.
echo - Tab title should show: "RUINED"
echo - Favicon should show: Gothic "RUINED" logo
echo - Site should be live at: [your-vercel-url].vercel.app
echo.

echo ========================================
echo   DEPLOYMENT IN PROGRESS!
echo ========================================
echo.
echo Your favicon and title will work after this deployment.
echo.
pause 