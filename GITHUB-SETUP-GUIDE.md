# 🚀 Complete GitHub + Vercel Setup Guide

## **Step 1: Install Git for Windows**

1. **Download Git**: Go to https://git-scm.com/download/win
2. **Run the installer**: Use default settings
3. **Restart your terminal/PowerShell** after installation
4. **Verify installation**: Open PowerShell and run `git --version`

## **Step 2: Create GitHub Repository**

1. **Go to [github.com](https://github.com)** and sign in
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Repository settings**:
   - **Repository name**: `ruined-clothing-website`
   - **Description**: `RUINED - Streetwear for the Broken Generation`
   - **Visibility**: **Public** (required for free Vercel)
   - **Don't initialize** with README (we already have one)
   - **Don't add** .gitignore (we already have one)
5. **Click "Create repository"**

## **Step 3: Configure Git (First Time Only)**

Open PowerShell in your project folder and run:

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## **Step 4: Upload Your Code to GitHub**

### **Option A: Use the Automated Script**

1. **Run the PowerShell script**:
   ```powershell
   .\setup-github.ps1
   ```

2. **Follow the prompts** and complete the manual steps

### **Option B: Manual Commands**

Run these commands in PowerShell:

```powershell
# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit with mobile optimizations"

# Set up main branch
git branch -M main

# Add GitHub as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/ruined-clothing-website.git

# Push to GitHub
git push -u origin main
```

## **Step 5: Deploy to Vercel**

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with GitHub
3. **Click "New Project"**
4. **Import Git Repository**
5. **Select your repository**: `ruined-clothing-website`
6. **Configure project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
7. **Click "Deploy"**

## **Step 6: Test Your Mobile-Optimized Site**

1. **Open your Vercel URL** on your phone
2. **Test the mobile menu** - tap the hamburger menu
3. **Check responsive design** - rotate your phone
4. **Test touch targets** - all buttons should be easy to tap
5. **Verify loading speed** - should load quickly on mobile

## **🔄 Future Updates**

To update your site:

1. **Make changes** to your code
2. **Commit and push** to GitHub:
   ```powershell
   git add .
   git commit -m "Update description"
   git push
   ```
3. **Vercel automatically deploys** the updates

## **🔧 Troubleshooting**

### **Git Not Found**
- Install Git from https://git-scm.com/download/win
- Restart PowerShell after installation

### **Authentication Issues**
- Use GitHub CLI: `gh auth login`
- Or use Personal Access Token

### **Build Errors on Vercel**
- Check that all dependencies are in `package.json`
- Verify `next.config.mjs` is properly configured
- Check Vercel build logs for specific errors

### **Mobile Issues**
- Test the mobile test file: `mobile-test.html`
- Check browser developer tools mobile view
- Verify viewport meta tags are present

## **📱 What You Get**

- ✅ **Free hosting** on Vercel
- ✅ **Custom domain**: `your-project.vercel.app`
- ✅ **Automatic HTTPS**
- ✅ **Global CDN**
- ✅ **Mobile-optimized** design
- ✅ **Automatic deployments** on every push
- ✅ **100GB bandwidth/month**

## **🎯 Quick Commands Reference**

```powershell
# Check Git version
git --version

# Initialize repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Check status
git status

# View remote
git remote -v
```

---

**Your mobile-optimized RUINED website will be live and automatically updated! 🎉** 