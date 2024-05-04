# How to build and deploy VueJS with Vite App
1. Buil Project
 npm run build
2. add dist to git
 git add dist -f
 git commit -m 'add dist folder'
3. Push to github
 git subtree push --prefix dist origin deploy
