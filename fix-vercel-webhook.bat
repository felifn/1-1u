@echo off
echo ========================================
echo   FIX VERCEL WEBHOOK CONNECTION
echo ========================================
echo.

echo The GitHub Actions failed because Vercel webhook isn't connected properly.
echo Let's fix this now!
echo.

echo Step 1: Opening Vercel project settings...
start https://vercel.com/dashboard

echo.
echo Step 2: Instructions to fix webhook:
echo.
echo 1. Click your project: v0-ruined-clothing-website
echo 2. Click "Settings" tab
echo 3. Click "Git" in the left sidebar
echo 4. Look for "GitHub" section
echo 5. Make sure it shows: felifn/1-1u
echo 6. If not connected, click "Connect Git Repository"
echo 7. Search for: felifn/1-1u
echo 8. Select it and connect
echo.

echo Step 3: Enable auto-deployment:
echo.
echo 1. In the same Git settings
echo 2. Make sure "Auto Deploy" is ENABLED
echo 3. Production Branch should be: main
echo 4. Save changes
echo.

echo Step 4: Test the connection:
echo.
echo 1. Any push to GitHub should now auto-deploy
echo 2. Check Vercel dashboard for new deployments
echo 3. No more failed GitHub Actions emails!
echo.

echo ========================================
echo   WEBHOOK FIX READY!
echo ========================================
echo.
echo Follow the steps above to fix auto-deployment.
echo.
pause 