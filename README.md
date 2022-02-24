# Code base

All code is written in TypeScript.
This projects uses eslint and prettier to format the code and ensure good practices.
The eslint rules extends the recommended rules from Google eslint config (maybe a bit too much?).
A pre-commit hook is set up to ensure that the code is formatted before committing.
You don't need to install the eslint or prettier plugins to your editor, but doing so will make it easier to use the code and speed up your commits.

# Running in your local machine

Click the Use Template button to get a template for your project.
When crating you new repo it should be named like this, your-user-name.github.io. For example: johndoe.github.io
Then create a local repo and add your new Github repo as a remote.
Finally, open the terminal in the project root directory, then run `npm install`, to install the packages (only needed the first time running the project), then run `npm start`

# Setup

## Theme

The theme file can be found in /src/styles/theme.tsx

Reference to the material ui doc page on how to make changes to it

## Data

All texts/information to be presented are stored in a config file. You can find it at /src/data/index.tsx

The idea is to fill each properties with the needed information, there is some comments to help you
Also types are there to help you just in case

## Deploy

This was made to be deployed using GitHub Pages as your user webpage. As so, you need to enable github pages in your repo settings.
The necessary packages, scripts, and GitHub workflow/actions are already present so it should require minimal setup to get it working.
If you intend to use a custom domain you'll need to include a CNAME file in the public folder (/public), and might also want to look up with ur domain provider if there's additional setup required.

# Support

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T3AVD6G)

<a href="mailto:jaimetrovoada@gmail.com">jaimetrovoada@gmail.com</a>
