# 🌐 Custom Domain Setup Guide

## 🎯 **Automatic Custom Domain Deployment**

Once configured, your custom domain will automatically update with every GitHub push!

## **Step 1: Add Custom Domain in Vercel**

### **Via Vercel Dashboard:**
1. **Go to [vercel.com](https://vercel.com)** and sign in
2. **Select your RUINED project**
3. **Click "Settings"** tab
4. **Click "Domains"** in the left sidebar
5. **Click "Add Domain"**
6. **Enter your domain** (e.g., `ruined.com` or `shop.ruined.com`)
7. **Click "Add"**

### **Via Vercel CLI:**
```bash
vercel domains add ruined.com
```

## **Step 2: Configure DNS Records**

### **For Root Domain (ruined.com):**
Add these records to your domain provider (GoDaddy, Namecheap, etc.):

```
Type: A
Name: @
Value: 76.76.19.19
TTL: 3600
```

### **For Subdomain (shop.ruined.com):**
```
Type: CNAME
Name: shop
Value: cname.vercel-dns.com
TTL: 3600
```

### **For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

## **Step 3: Verify Domain**

1. **Wait 24-48 hours** for DNS propagation
2. **Check domain status** in Vercel dashboard
3. **Domain should show "Valid Configuration"**

## **🔄 Automatic Deployment Workflow**

Once set up, here's what happens automatically:

### **Every Time You Push Updates:**
1. **Make changes** to your code
2. **Commit changes**: `git commit -m "Your update"`
3. **Push to GitHub**: `git push`
4. **Vercel automatically:**
   - ✅ **Detects the push**
   - ✅ **Builds your project**
   - ✅ **Deploys to your custom domain**
   - ✅ **Updates live site**

### **No Manual Steps Required!**

## **📱 Mobile Optimizations Included**

Your custom domain will have all mobile fixes:
- ✅ **Viewport meta tags** for proper mobile rendering
- ✅ **Touch-friendly navigation** with 44px minimum touch targets
- ✅ **Responsive design** that works on all screen sizes
- ✅ **Mobile menu** with smooth animations
- ✅ **Performance optimizations** for fast mobile loading

## **🔧 Advanced Configuration**

### **Environment Variables:**
You can set custom environment variables in Vercel:
1. **Go to Settings > Environment Variables**
2. **Add variables** like:
   - `NEXT_PUBLIC_SITE_URL=https://ruined.com`
   - `NEXT_PUBLIC_BRAND_NAME=RUINED`

### **Custom Headers:**
The `vercel.json` file includes security headers for your domain.

## **🌍 Multiple Domains**

You can add multiple domains to the same project:
- `ruined.com`
- `shop.ruined.com`
- `www.ruined.com`
- `store.ruined.com`

All will automatically update with every push!

## **📊 Analytics & Monitoring**

With custom domain, you get:
- ✅ **Vercel Analytics** (free tier)
- ✅ **Performance monitoring**
- ✅ **Error tracking**
- ✅ **Real-time logs**

## **🔒 SSL Certificate**

Vercel automatically provides:
- ✅ **Free SSL certificate**
- ✅ **Automatic renewal**
- ✅ **HTTPS enforcement**

## **🚀 Quick Commands**

```bash
# Check domain status
vercel domains ls

# Add new domain
vercel domains add yourdomain.com

# Remove domain
vercel domains rm yourdomain.com

# Deploy to custom domain
vercel --prod
```

---

**Your RUINED website will automatically update on your custom domain with every push! 🎉** 