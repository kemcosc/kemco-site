# Kemco Specialty Contractors — Static Website + CMS

## File Structure
```
kemco-site/
├── index.html              ← Home page
├── services.html           ← Services page
├── projects.html           ← Projects page
├── certifications.html     ← Certifications page
├── contact.html            ← Contact page
├── netlify.toml            ← Netlify configuration
├── admin/
│   ├── index.html          ← CMS login panel (visit /admin)
│   └── config.yml          ← CMS field definitions
├── _data/
│   ├── site.json           ← Company info, phone, address
│   ├── home.json           ← Homepage text content
│   ├── services.json       ← All services (add/edit/remove)
│   ├── projects.json       ← All projects (add/edit/remove)
│   └── certifications.json ← All certifications
└── assets/
    ├── css/
    │   ├── style.css       ← Shared styles
    │   └── home.css        ← Home page styles
    └── js/
        ├── data.js         ← Data loader (shared)
        └── main.js         ← Nav + form helpers
```

---

## STEP 1 — Deploy to Netlify (~5 minutes, one-time)

### A) Upload your site
1. Go to https://app.netlify.com and create a free account
2. From your dashboard, drag the entire kemco-site folder onto the deploy area
3. Your site goes live at a URL like random-name.netlify.app

### B) Connect your domain
1. In Netlify: Site Settings > Domain management > Add custom domain
2. Type kemcocontractors.com and follow the DNS instructions
3. SSL (https) is handled automatically for free

---

## STEP 2 — Enable the CMS (~3 minutes, one-time)

The CMS uses Netlify Identity so only you can log in.

### A) Turn on Netlify Identity
1. In your Netlify dashboard, click your site
2. Go to Site Settings > Identity
3. Click "Enable Identity"
4. Scroll to Registration > set to "Invite only"

### B) Enable Git Gateway
1. Still in Site Settings > Identity
2. Scroll to Services > Git Gateway
3. Click "Enable Git Gateway"

### C) Invite yourself
1. Go to the Identity tab in your Netlify dashboard
2. Click "Invite users" and enter your email
3. Check your email, click the link, and set your password

### D) Log into the CMS
1. Go to your-site.netlify.app/admin
2. Log in with your email and password
3. Done!

---

## Using the CMS

Once logged in at /admin you will see an editing dashboard with these sections:

  Site Settings > Company Info
    Edit phone number, address, footer text — updates everywhere on the site

  Pages > Homepage
    Edit the hero headline, stats, all section text

  Services
    Add, edit, reorder, or remove any service card

  Projects
    Add new projects, update photos and descriptions, change filter tags

  Certifications
    Add or update certification cards and descriptions

### Example: Adding a new project
1. Click Projects in the left sidebar
2. Click Projects Page
3. Scroll to Projects List and click "Add item +"
4. Fill in: Project Name, Location, State, Image URL, Description
5. Click Save — site updates automatically within about 30 seconds

### Example: Changing the phone number
1. Click Site Settings > Company Info
2. Update Phone (display) and Phone (digits only)
3. Click Save — updates on every page instantly

---

## Adding Images

Images are referenced by URL. Two options:

Option A — Use existing WordPress images (easiest)
Paste the full URL from kemcocontractors.com/wp-content/...

Option B — Upload new images
In the CMS, click any image field and use the media button to upload.
Images save to assets/images/uploads/

---

## Troubleshooting

CMS shows "Git Gateway Error"
  Make sure Git Gateway is enabled in Site Settings > Identity > Services

Edits saved but site did not update
  Wait 30-60 seconds and hard-refresh (Ctrl+Shift+R or Cmd+Shift+R on Mac)

Contact form not sending emails
  In Netlify: Forms > your form > Notifications > Add email notification

---

## Manual Editing (no CMS needed)
You can also open any file in the _data/ folder with a text editor (Notepad on Windows,
TextEdit on Mac) and change values directly. Re-upload the folder to Netlify to publish.
