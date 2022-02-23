import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

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
  icon: any // icon of the social media/platform
}

export const socials: SocialProps[] = []
