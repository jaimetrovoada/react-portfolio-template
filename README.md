# Running in your local machine

clone this repo
then open the terminal in the project root directory, then run `npm install`, to install the packages (only needed the first time running the project), then run `npm start`

# Setup

## Your Repo

On GitHub create a repo like this your-user-name.github.io. Then in the repo settings enable github pages
then add that as a remote to your local repo

## Theme

the theme file can be found in /src/styles/theme.tsx

reference to the material ui doc page on how to make changes to it

## Data

All texts/information to be presented are stored in a config file
you can find it at /src/data/index.tsx

the idea is to fill each properties with the needed information, there is some comments to help you
Also types are there to help you just in case

## Deploy

This was made to be deployed using GitHub Pages as your user webpage.
The necessary packages, scripts, and GitHub workflow/actions are already present so it should require minimal setup to get it working.
If you intend to use a custom domain you'll need to include a CNAME file in the public folder (/public), and might also want to look up with ur domain provider if there's additional setup required.

# Support

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T3AVD6G)

<a href="mailto:jaimetrovoada@gmail.com" >jaimetrovoada@gmail.com</a>
