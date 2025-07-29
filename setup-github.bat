@echo off
echo ========================================
echo    GitHub Setup for RUINED Website
echo ========================================
echo.

echo Step 1: Checking if Git is installed...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed!
    echo Please download and install Git from: https://git-scm.com/download/win
    echo Then run this script again.
    pause
    exit /b 1
)

echo Git is installed! ✓
echo.

echo Step 2: Initializing Git repository...
git init
if %errorlevel% neq 0 (
    echo ERROR: Failed to initialize Git repository
    pause
    exit /b 1
)

echo Step 3: Adding all files to Git...
git add .
if %errorlevel% neq 0 (
    echo ERROR: Failed to add files to Git
    pause
    exit /b 1
)

echo Step 4: Creating initial commit...
git commit -m "Initial commit with mobile optimizations"
if %errorlevel% neq 0 (
    echo ERROR: Failed to create commit
    pause
    exit /b 1
)

echo Step 5: Setting up main branch...
git branch -M main
if %errorlevel% neq 0 (
    echo ERROR: Failed to rename branch
    pause
    exit /b 1
)

echo.
echo ========================================
echo    NEXT STEPS:
echo ========================================
echo.
echo 1. Go to GitHub.com and create a new repository
echo    - Name: ruined-clothing-website
echo    - Make it PUBLIC
echo    - Don't initialize with README
echo.
echo 2. Copy your repository URL (it will look like):
echo    https://github.com/YOUR_USERNAME/ruined-clothing-website.git
echo.
echo 3. Run the following command (replace YOUR_USERNAME):
echo    git remote add origin https://github.com/YOUR_USERNAME/ruined-clothing-website.git
echo.
echo 4. Then run:
echo    git push -u origin main
echo.
echo 5. Go to Vercel.com and import your GitHub repository
echo.
echo ========================================
echo.
pause 