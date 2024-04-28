import { ReactNode } from "react";

export type Children = ReactNode;

export type SocialProof = {
    src: string,
    width: number,
    height: number,
    label: string
}[];

export interface FeatureIcon {
    src: string,
    width: number,
    height: number,
    alt: string
}

export type Features = {
    icon: FeatureIcon,
    heading: string,
    content: string
}[];

export interface Statistic {
    count: string,
    label: string
}

export type Statistics = Statistic[]