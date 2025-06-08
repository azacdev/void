import { BarChart3Icon, FolderOpenIcon, WandSparklesIcon } from "lucide-react";

export const PROCESS = [
  {
    title: "Organize Your Links",
    description:
      "Efficiently categorize and tag your links for quick access and easy management.",
    icon: FolderOpenIcon,
  },
  {
    title: "Shorten and Customize",
    description:
      "Create concise, branded links that are easy to share and track.",
    icon: WandSparklesIcon,
  },
  {
    title: "Analyze and Optimize",
    description:
      "Gain insights into link performance and optimize for better engagement.",
    icon: BarChart3Icon,
  },
] as const;
