# ProgressiveMonkeyApp

Steps for tranforming app into a progressive monkey :D

1. Clone repo: git clone git@github.com:StefanRadusi/ProgressiveMonkeyApp.git
2. Move to back-end folder
3. Install dep: npm install
4. Switch to get started branch: git fetch && git checkout get_started
5. Create a manifest file: https://app-manifest.firebaseapp.com/
6. Move it in public folder
7. The icon you choose be sure is 512x512 pixels
8. From now on we work in public folder 
9. Add it to as link in “index.html”: <link rel="manifest" href="manifest.json"
10. Create the load service worker “load-sw.js” file
11. Add it as script file to “index.html”: <script type="text/javascript" src="/load-sw.js"></script>
12. Create the service worker file “sw.js” file


For adding app to home screen, but this things did not work :(

1. Enable app on home screen, go in Chrome to chrome://flags
2. Go to App Banners flag and enable it
https://love2dev.com/blog/beforeinstallprompt/
