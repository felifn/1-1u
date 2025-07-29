@echo off
echo ========================================
echo   SETUP AUTO-DEPLOYMENT
echo ========================================
echo.

echo Step 1: Getting Vercel Token
echo.
echo 1. Go to: https://vercel.com/account/tokens
echo 2. Click "Create Token"
echo 3. Name it: "Auto Deploy Token"
echo 4. Copy the token (you'll need it)
echo.

echo Step 2: Getting Project ID
echo.
echo 1. Go to: https://vercel.com/dashboard
echo 2. Click your project: v0-ruined-clothing-website
echo 3. Click "Settings" tab
echo 4. Scroll down to "General" section
echo 5. Copy the "Project ID"
echo.

echo Step 3: Getting Org ID
echo.
echo 1. In the same Settings page
echo 2. Look for "Team ID" or "Organization ID"
echo 3. Copy it (if not found, use your personal account ID)
echo.

echo Step 4: Adding Secrets to GitHub
echo.
echo 1. Go to: https://github.com/felifn/1-1u/settings/secrets/actions
echo 2. Click "New repository secret"
echo 3. Add these secrets:
echo    - Name: VERCEL_TOKEN, Value: [your token from step 1]
echo    - Name: PROJECT_ID, Value: [your project ID from step 2]
echo    - Name: ORG_ID, Value: [your org ID from step 3]
echo.

echo ========================================
echo   AUTO-DEPLOYMENT SETUP READY!
echo ========================================
echo.
echo After adding the secrets, every push will auto-deploy!
echo.
pause 