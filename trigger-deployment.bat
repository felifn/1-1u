@echo off
echo ========================================
echo   TRIGGERING VERCEL DEPLOYMENT
echo ========================================
echo.

echo Step 1: Making a small change to force deployment...
echo // FORCE DEPLOYMENT - %date% %time% > temp-deploy.txt

echo Step 2: Committing and pushing...
git add temp-deploy.txt
git commit -m "Trigger deployment - %date% %time%"
git push

echo Step 3: Cleaning up...
del temp-deploy.txt

echo.
echo ========================================
echo   DEPLOYMENT TRIGGERED!
echo ========================================
echo.
echo Check your Vercel dashboard now.
echo A new deployment should be starting.
echo.
pause 