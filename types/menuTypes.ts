type HeaderMenuLabel = "About" | "Pricing" | "Blog" | "Events";
type FooterSitePagesLabel = "Home" | "About" | "Pricing" | "Blog" | "Events";
type FooterEngagementLabel = "Subscribe" | "Member Stories" | "Locations" | "Write for us";
type FooterSocialMediaLabel = "Facebook" | "Instagram" | "X" | "LinkedIn" | "Youtube";

export type HeaderMenu = {
    label: HeaderMenuLabel,
    link: string
}[];

export type FooterMenuSitePages = {
    label: FooterSitePagesLabel,
    link: string
}[];

export type FooterMenuEnagement = {
    label: FooterEngagementLabel,
    link: string
}[];

export type FooterMenuSocialMedia = {
    label: FooterSocialMediaLabel,
    link: string
}[];