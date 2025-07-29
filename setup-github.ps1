Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   GitHub Setup for RUINED Website" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
Write-Host "Step 1: Checking if Git is installed..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "Git is installed! ✓" -ForegroundColor Green
    Write-Host "Version: $gitVersion" -ForegroundColor Gray
} catch {
    Write-Host "ERROR: Git is not installed!" -ForegroundColor Red
    Write-Host "Please download and install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Then run this script again." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""

# Initialize Git repository
Write-Host "Step 2: Initializing Git repository..." -ForegroundColor Yellow
try {
    git init
    Write-Host "Git repository initialized! ✓" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Failed to initialize Git repository" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

# Add all files
Write-Host "Step 3: Adding all files to Git..." -ForegroundColor Yellow
try {
    git add .
    Write-Host "Files added to Git! ✓" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Failed to add files to Git" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

# Create initial commit
Write-Host "Step 4: Creating initial commit..." -ForegroundColor Yellow
try {
    git commit -m "Initial commit with mobile optimizations"
    Write-Host "Initial commit created! ✓" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Failed to create commit" -ForegroundColor Red
    Write-Host "This might be because Git user is not configured." -ForegroundColor Yellow
    Write-Host "Please run these commands first:" -ForegroundColor Yellow
    Write-Host "git config --global user.name 'Your Name'" -ForegroundColor Gray
    Write-Host "git config --global user.email 'your.email@example.com'" -ForegroundColor Gray
    Read-Host "Press Enter to exit"
    exit 1
}

# Set up main branch
Write-Host "Step 5: Setting up main branch..." -ForegroundColor Yellow
try {
    git branch -M main
    Write-Host "Main branch set up! ✓" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Failed to rename branch" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "    NEXT STEPS:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "1. Go to GitHub.com and create a new repository:" -ForegroundColor White
Write-Host "   - Name: ruined-clothing-website" -ForegroundColor Gray
Write-Host "   - Make it PUBLIC" -ForegroundColor Gray
Write-Host "   - Don't initialize with README" -ForegroundColor Gray
Write-Host ""

Write-Host "2. Copy your repository URL (it will look like):" -ForegroundColor White
Write-Host "   https://github.com/YOUR_USERNAME/ruined-clothing-website.git" -ForegroundColor Gray
Write-Host ""

Write-Host "3. Run the following command (replace YOUR_USERNAME):" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/ruined-clothing-website.git" -ForegroundColor Gray
Write-Host ""

Write-Host "4. Then run:" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor Gray
Write-Host ""

Write-Host "5. Go to Vercel.com and import your GitHub repository" -ForegroundColor White
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Read-Host "Press Enter to continue" 