import React from 'react'
// import InstagramIcon from '@mui/icons-material/Instagram';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import TelegramIcon from '@mui/icons-material/Telegram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import YouTubeIcon from '@mui/icons-material/YouTube';

interface AboutMeProps {
  name: string // your name or nickname, also use for the header
  avatar?: string // url of the person's avatar, if left empty or deleted a default avatar/icon will be used
  occupation?: string // your job tittle or your current occupation
  resumeLink?: string // optional, link to the person's resume
  introduction: string // introduction of the person
  skills: string[] // skills of the person
  location?: string // optional, location of the person
  funFact?: {
    // optional, a fun fact about the person
    title: string // title of the fun fact
    description: string // description of the fun fact
  }
}

export const aboutMe: AboutMeProps = {
  name: '',
  avatar: '',
  occupation: '',
  introduction: '',
  resumeLink: '',
  skills: [],
  location: '',
  funFact: {
    title: '',
    description: '',
  },
}

interface ProjectProps {
  title: string // Project title
  description?: string // optional, description of the project
  techStack: string // comma separated list of technologies used in the project
  liveLink?: string // optional, link to a live demo of the project
  githubLink: string // link to the project's github repository
}

export const projects: ProjectProps[] = []

interface SocialProps {
  name: String // name of the social media/platform
  link: string // link to your social media/platform profile
  icon: React.ReactNode // icon of the social media/platform
}
// is set to React.ReactNode to enforce using the Icon components provided by material-ui
// https://material-ui.com/components/icons/
// above theres some icons already imported from material-ui, just need to uncoment the import to use them
// Example: { name: 'Github', link: 'https://github.com', icon: <GitHubIcon /> }

export const socials: SocialProps[] = []

interface WorkProps {
  company: string // name of the company
  position: string // position in the company
  period: string // period of time in the company
  description?: string // optional, description of the work
}

export const work: WorkProps[] = []
