---
title: "How to deploy Knowledgebase app to Netlify?"
date: "2021-11-14"
draft: false
authors: ["bodhi"]
summary: "There are multiple ways to make deployments with Netlify; You can use the netlify GUI to deploy the site"
---

# Deployment with Netlify

### Create a GitHub repository

Before you can deploy your site to Netlify, you'll need push your app to a Git Repository. First off you can initialize the repository with the following command:

    git init

Now you need to create a new repository in GitHub. You can do this by going to [GitHub](https://github.com/new). Once you create the repository, GitHub will show you the commands to push your app to the repository. It would look something like this:

    echo "# kb_name" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin git@github.com:username/kb_name.git
    git push -u origin main

### Push your app to GitHub

In order to push the knowledge base app to GitHub, you can use the following command:

    git add .
    git commit -m "Knowledge Base Content"
    git push -u origin main

### Deploy to Netlify

Now your app is ready to deploy to Netlify. You can do this by going to [Netlify](https://www.netlify.com/). Once you're logged in, you can use the button "New Site from Git" to deploy your app. In the wizard, you can select "GitHub" to connect your GitHub account and select the repository you created earlier.

Once you select the repository, you'll have to fill in a form with the following details.

- You can set the build command to "npm run export"
- You can specify the build directory to ".build/"

Once you've specified the above, simply click on the "Deploy" button to deploy your app to Netlify.

Netlify will deploy your app and then show the URL of your app.

Once the app is deployed, you can use Netlify's Custom Domain feature to point your own domain to the app.

### Deploy Updates

Further when you make changes to your app, you can deploy your app to Netlify by running the following command:

    git add .
    git commit -m "Update"
    git push origin main

When you push to your repository, Netlify will automatically deploy your app to the Netlify site.
