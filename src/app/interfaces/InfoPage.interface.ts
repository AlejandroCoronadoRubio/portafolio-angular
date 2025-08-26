import { TeamMember } from "./TeamMember.interface"

export interface InfoPage{
    title?: string
    facebook?: string
    twitter?: string
    instagram?: string
    tumblr?: string
    email?: string
    teamMembers?: TeamMember[]
}