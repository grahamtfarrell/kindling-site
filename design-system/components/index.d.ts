import type * as React from 'react';
export interface LogoProps { variant?: 'wordmark' | 'monogram'; tone?: 'ink' | 'cream'; height?: number; alt?: string; className?: string }
export declare function Logo(props: LogoProps): React.ReactElement;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'outline' | 'ink' }
export declare function Button(props: ButtonProps): React.ReactElement;
export interface NavBarProps { links?: { label: string; href?: string }[]; login?: string; loginHref?: string; cta?: string; homeHref?: string }
export declare function NavBar(props: NavBarProps): React.ReactElement;
export interface HeadlineProps { children?: React.ReactNode; accent?: string; after?: React.ReactNode; size?: 'xl' | 'md'; as?: 'h1' | 'h2' | 'h3'; className?: string }
export declare function Headline(props: HeadlineProps): React.ReactElement;
export interface PhotoFrameProps { src?: string; alt?: string; index?: string; caption?: boolean | string[]; chamfer?: boolean; className?: string; style?: React.CSSProperties }
export declare function PhotoFrame(props: PhotoFrameProps): React.ReactElement;
export interface StoryCardProps { index?: string; src?: string; alt?: string; title: string; children?: React.ReactNode; action?: string; caption?: boolean | string[] }
export declare function StoryCard(props: StoryCardProps): React.ReactElement;
export interface ChevronListProps { items?: string[] }
export declare function ChevronList(props: ChevronListProps): React.ReactElement;
export interface LogoStripProps { label?: string; names?: string[] }
export declare function LogoStrip(props: LogoStripProps): React.ReactElement;
export interface ProcessRailProps { steps?: string[] }
export declare function ProcessRail(props: ProcessRailProps): React.ReactElement;
declare global { interface Window { Kindling: { Logo: typeof Logo; Button: typeof Button; NavBar: typeof NavBar; Headline: typeof Headline; PhotoFrame: typeof PhotoFrame; StoryCard: typeof StoryCard; ChevronList: typeof ChevronList; LogoStrip: typeof LogoStrip; ProcessRail: typeof ProcessRail } } }
