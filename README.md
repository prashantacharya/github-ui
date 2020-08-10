# GitHub Profile

This project fetches your repositories and your information from your GitHub account via the GitHub API and displays your profile as shown in the image below.

![GitHub Profile](../github-profile/docs-images/screenshot.png 'GitHub Profile UI')

[Live Demo](https://prashantacharya.github.io/github-ui)

### Instructions

To use this repo, first clone it.

```sh
git clone https://github.com/prashantacharya/github-ui.git your-project-name

cd your-project-name

# Install the dependencies
yarn
# OR
npm install

# Start a development server
yarn start
# OR
npm start
```

#### Generate your profile

1. Create a `.env` file on the root of your project.
2. Add these 2 lines
   ```
     REACT_APP_USERNAME=<your_gh_username>
     REACT_APP_BASE_URL=https://api.github.com
   ```

#### Deploying

First, create a repo on GitHub then link the existing remote repo to your GitHub repo.

Second, on the `package.json` file, modify the homepage to `https://<your_username>.github.io/<your_repo>`.

Then run the command

```sh
yarn deploy

# OR

npm deploy
```
