import {
  BarChart3Icon,
  BookOpenIcon,
  CreditCardIcon,
  HelpCircleIcon,
  LucideIcon,
  NewspaperIcon,
  ShieldIcon,
  UsersIcon,
} from "lucide-react";

export interface NavLink {
  title: string;
  href: string;
  menu?: {
    title: string;
    tagline: string;
    href: string;
    icon: LucideIcon;
  }[];
}

export const navLinks: NavLink[] = [
  {
    title: "Features",
    href: "/features",
    menu: [
      {
        title: "Analytics Dashboard",
        tagline: "Track your business metrics and performance.",
        href: "/features/analytics",
        icon: BarChart3Icon,
      },
      {
        title: "Team Management",
        tagline: "Collaborate with your team members effectively.",
        href: "/features/team-management",
        icon: UsersIcon,
      },
      {
        title: "Advanced Security",
        tagline: "Enterprise-grade security for your data.",
        href: "/features/security",
        icon: ShieldIcon,
      },
      {
        title: "Billing & Payments",
        tagline: "Flexible billing options and payment processing.",
        href: "/features/billing",
        icon: CreditCardIcon,
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Enterprise",
    href: "/enterprise",
  },
  {
    title: "Resources",
    href: "/resources",
    menu: [
      {
        title: "Documentation",
        tagline: "Learn how to get the most out of our platform.",
        href: "/resources/docs",
        icon: BookOpenIcon,
      },
      {
        title: "Blog",
        tagline: "Read articles on the latest trends in tech.",
        href: "/resources/blog",
        icon: NewspaperIcon,
      },
      {
        title: "Help Center",
        tagline: "Get answers to your questions.",
        href: "/resources/help",
        icon: HelpCircleIcon,
      },
    ],
  },
  {
    title: "Changelog",
    href: "/changelog",
  },
];
