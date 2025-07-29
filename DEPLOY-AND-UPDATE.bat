@echo off
echo ========================================
echo   DEPLOY AND ENABLE AUTO-UPDATES
echo ========================================
echo.

echo Step 1: Committing all changes...
git add -A
git commit -m "Auto deployment - $(date /t)"

echo.
echo Step 2: Pushing to GitHub...
git push

echo.
echo Step 3: Opening Vercel for manual deployment...
start https://vercel.com/new

echo.
echo Step 4: Instructions for manual deployment:
echo.
echo 1. Click "Import Git Repository"
echo 2. Search for: felifn/1-1u
echo 3. Select it and click "Deploy"
echo 4. This will create a NEW project with auto-deployment
echo.

echo Step 5: After deployment, enable auto-updates:
echo.
echo 1. Go to your new project settings
echo 2. Click "Git" in left sidebar
echo 3. Make sure "Auto Deploy" is ENABLED
echo 4. Production Branch should be: main
echo.

echo ========================================
echo   DEPLOYMENT IN PROGRESS!
echo ========================================
echo.
echo Your site will be live in 2-5 minutes.
echo Auto-updates will work after this deployment.
echo.
pause 