import { 
  Database, 
  Terminal, 
  GitMerge, 
  Cpu, 
  Activity,
  ShieldAlert,
  Zap,
  Award,
  Wallet,
  BrainCircuit
} from 'lucide-react';
import { NavItem, StatItem, ServiceItem, ProcessStep, PricingTier, Testimonial, FAQItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Hire', href: '#' },
  { label: 'Find Work', href: '#' },
  { label: 'Explore', href: '#' },
  { label: 'Why Solen', href: '#why-solen' },
  { label: "What's New", href: '#' },
  { label: 'Pricing', href: '#pricing' },
];

export const STATS: StatItem[] = [
  { value: '99.9', suffix: '%', label: 'Match Accuracy' },
  { value: '< 24', suffix: 'h', label: 'Time to Commit' },
  { value: '10k', suffix: '+', label: 'PRs Merged' },
  { value: '0', suffix: '', label: 'Churn Rate' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Data Pipelines',
    description: 'Ingest and process petabyte-scale data. Reduce query latency by 40% instantly.',
    icon: Database,
    tags: ['Snowflake', 'dbt', 'Airflow']
  },
  {
    title: 'Legacy Refactoring',
    description: 'Modernize technical debt. Migrate monoliths to microservices with zero downtime.',
    icon: GitMerge,
    tags: ['Go', 'Rust', 'Kubernetes']
  },
  {
    title: 'AI Integration',
    description: 'Fine-tune LLMs for your specific domain. Production-ready inference in 48 hours.',
    icon: Cpu,
    tags: ['OpenAI', 'PyTorch', 'LangChain']
  },
  {
    title: 'Security Audits',
    description: 'Identify critical vulnerabilities. Penetration testing that secures your stack pre-launch.',
    icon: ShieldAlert,
    tags: ['OWASP', 'PenTest', 'Compliance']
  },
  {
    title: 'CI/CD Systems',
    description: 'Automate your release pipelines. Cut build times in half and ship daily.',
    icon: Terminal,
    tags: ['GitHub Actions', 'ArgoCD', 'Terraform']
  },
  {
    title: 'Test Coverage',
    description: 'Eliminate regression bugs. Comprehensive unit and E2E suites for bulletproof code.',
    icon: Activity,
    tags: ['Cypress', 'Playwright', 'Jest']
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Deploy in < 24 Hours",
    description: "Skip the 45-day hiring average. Post a spec and have a senior engineer merge code by tomorrow.",
    icon: Zap,
    stat: "45 Days Saved"
  },
  {
    title: "Top 1% Talent Only",
    description: "We reject 99.2% of applicants. You work with ex-OpenAI and Netflix engineers who need zero ramp-up.",
    icon: Award,
    stat: "99.2% Rejection Rate"
  },
  {
    title: "Zero Financial Risk",
    description: "Funds are held in secure escrow. You only release payment when the PR passes your CI/CD checks.",
    icon: Wallet,
    stat: "100% Guaranteed"
  },
  {
    title: "Autonomous Execution",
    description: "No daily standups required. Our engineers self-manage, write docs, and push tests without hand-holding.",
    icon: BrainCircuit,
    stat: "0 Management Hours"
  }
];

export const PROCESS_STEPS = {
  company: [
    {
      step: '01',
      title: 'Define Specs',
      description: 'Post requirements or link a GitHub issue. No complex briefs needed.'
    },
    {
      step: '02',
      title: 'Auto-Match',
      description: 'Get assigned a top 1% vetted expert instantly. No interviews.'
    },
    {
      step: '03',
      title: 'Secure Fund',
      description: 'Deposit funds upfront (held in escrow until completion).'
    },
    {
      step: '04',
      title: 'Receive Code',
      description: 'Watch production-ready commits arrive in 24-72 hours.'
    },
    {
      step: '05',
      title: 'Verify Work',
      description: 'Review the pull request against your test suite and standards.'
    },
    {
      step: '06',
      title: 'Auto-Release',
      description: 'Approve the merge. Funds release automatically. Zero friction.'
    }
  ],
  talent: [
    {
      step: '01',
      title: 'Prove Merit',
      description: 'Pass our elite algorithmic and architectural vetting challenges.'
    },
    {
      step: '02',
      title: 'Browse Sprints',
      description: 'Access high-value tasks ($500-$2.5k) unavailable elsewhere.'
    },
    {
      step: '03',
      title: 'Claim Instantly',
      description: 'Select work that fits your stack. No bidding. No interviews.'
    },
    {
      step: '04',
      title: 'Ship Code',
      description: 'Execute the work using your preferred tools and environment.'
    },
    {
      step: '05',
      title: 'Submit PR',
      description: 'Push your commits for automated testing and client review.'
    },
    {
      step: '06',
      title: 'Cash Out',
      description: 'Get paid instantly upon approval. No chasing invoices.'
    }
  ]
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Hotfix',
    price: '$500',
    description: 'For urgent bugs and single-issue resolution.',
    features: [
      'Verified Senior Engineer',
      '< 12h Response Time',
      'Code Review Included',
      'Direct Slack Access'
    ]
  },
  {
    name: 'Sprint',
    price: '$2.5k',
    description: 'Augment your team for a two-week sprint cycle.',
    features: [
      'Top 1% Talent Match',
      'Daily Standups',
      'Jira/Linear Integration',
      'Dedicated Tech Lead',
      'Full IP Ownership'
    ],
    isPopular: true
  },
  {
    name: 'Scale',
    price: 'Custom',
    description: 'Long-term dedicated pods for roadmap execution.',
    features: [
      'Custom Vetting Pipeline',
      'SLA Guarantees',
      'On-Premise Deployment',
      '24/7 Priority Support',
      'Security Compliance'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Finally, a platform that understands what 'Senior Engineer' actually means. No hand-holding required.",
    author: "Alex Chen",
    role: "VP of Engineering",
    company: "Vercel",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300&q=80"
  },
  {
    quote: "We needed a Rust expert for our core engine rewrites. Solen found one in 4 hours. Insane.",
    author: "Sarah Drasner",
    role: "Director of Eng",
    company: "Google",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=300&h=300&q=80"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How fast can I actually deploy an engineer?",
    answer: "You can deploy an elite engineer in **under 24 hours**. We bypass traditional interviews using our pre-vetted network for instant pod assembly. Most teams see their first merged PR within **48 hours** of onboarding. Start a Hotfix now to see the speed yourself."
  },
  {
    question: "How do you guarantee code quality?",
    answer: "We strictly enforce a **top 1% acceptance rate** for our network. Every engineer undergoes rigorous algorithmic and architectural vetting by ex-FAANG technical leads. We guarantee **production-grade code** that meets your specific linter and testing standards before you ever see it."
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer: "You are protected by our **Zero-Risk Guarantee** on every sprint. Funds are held in secure escrow and are **only released** when you approve the final commit. If the deliverables don't meet your architectural specs, you don't pay a dime."
  },
  {
    question: "Are these engineers actually senior level?",
    answer: "Our network consists exclusively of **Senior and Staff Engineers**. We strictly refuse junior talent; our professionals have verified track records delivering infrastructure at companies like **Netflix, Uber, and OpenAI**. You get autonomous solvers who require zero hand-holding."
  },
  {
    question: "Can I get a refund if the output is bad?",
    answer: "Yes, you receive a **100% refund** instantly if the work is rejected. Because payments are held in escrow, you retain full control over the release of funds until the work meets your **definition of done**. We remove the financial risk so you can focus on shipping."
  },
  {
    question: "Do I need to manage these engineers?",
    answer: "No, our engineers require **zero management overhead**. They integrate directly into your Jira, Linear, and GitHub workflows autonomously. You simply provide the technical spec, and they handle the execution, testing, and documentation like a **founding engineer**."
  },
  {
    question: "What happens if we disagree on the output?",
    answer: "Our internal **Engineering Council** arbitrates all technical disputes within 24 hours. They review the code against your initial specs and industry standards to render a **binding, unbiased decision**. This ensures fair treatment based purely on technical merit."
  },
  {
    question: "Can I work with the same engineer again?",
    answer: "Yes, **90% of our clients** retain their engineers for multiple sprints. You can 'lock' a preferred engineer or pod for recurring work, ensuring **contextual knowledge** and velocity increase over time. It offers the stability of a hire with the flexibility of a contractor."
  },
  {
    question: "Will they mess up our CI/CD pipeline?",
    answer: "Our engineers are experts in modern **CI/CD practices**. We adapt to your existing deployment workflows, whether that's GitHub Actions, CircleCI, or ArgoCD. We ensure all code passes your existing **automated test suites** before a pull request is ever opened."
  },
  {
    question: "Why not just use Upwork or Toptal?",
    answer: "We eliminate the **vetting friction** and management overhead. Unlike generalist marketplaces, Solen is built purely for elite engineering. You don't interview candidates; you **deploy resources** that just work, saving you 20+ hours of administrative work per hire."
  }
];