# Organic Marketing Website & Platform

## Project Overview
Building a modern, responsive website and internal platform for Organic Marketing, specializing in TikTok Shop management, creator partnerships, and organic growth strategies.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS + ShadCN UI
- **Icons**: Tabler Icons
- **Analytics**: Vercel Analytics
- **Animations**: Framer Motion
- **CRM**: GoHighLevel
- **Database**: PostgreSQL
- **Hosting**: Vercel

## File Structure
```
ORGANIC-MARKETING/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── (dashboard)/
│   │   ├── campaigns/
│   │   ├── creators/
│   │   └── analytics/
│   ├── api/
│   │   ├── ghl/
│   │   ├── tiktok/
│   │   └── facebook/
│   ├── blog/
│   ├── case-studies/
│   ├── services/
│   └── contact/
├── components/
│   ├── layout/
│   │   ├── navigation.tsx
│   │   └── footer.tsx
│   ├── home/
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   └── contact.tsx
│   ├── dashboard/
│   │   ├── sidebar.tsx
│   │   └── stats.tsx
│   └── ui/
│       └── [shadcn components]
└── lib/
    ├── api/
    ├── utils/
    └── hooks/
```

## Component Guidelines

### Public Website Components
All components should:
- Be responsive (mobile-first)
- Include dark mode support
- Use Framer Motion for animations
- Follow accessibility guidelines
- Include TypeScript types
- Use ShadCN UI components where possible

### Dashboard Components
All dashboard components should:
- Be protected by authentication
- Include loading states
- Handle error states gracefully
- Support real-time updates where applicable
- Include proper TypeScript types

## API Integration Requirements

### GoHighLevel (GHL)
- Contact form submissions
- Lead tracking
- Campaign automation
- Client communication

### TikTok API
- Shop performance metrics
- Content analytics
- Creator statistics
- Campaign tracking

### Facebook API
- Lead form integration
- Ad performance tracking
- Audience insights

## Design System

### Colors
```typescript
const colors = {
  primary: {
    DEFAULT: '#FACC15', // Yellow
    hover: '#EAB308',
  },
  background: {
    DEFAULT: '#000000',
    secondary: '#18181B',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#71717A',
  },
  accent: {
    DEFAULT: '#FACC15',
    secondary: '#EAB308',
  },
};
```

### Typography
```typescript
const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui'],
    display: ['Cal Sans', 'Inter'],
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
};
```

### Spacing
```typescript
const spacing = {
  container: {
    padding: '1rem',
    maxWidth: '80rem',
  },
  section: {
    padding: {
      y: '6rem',
      x: '1rem',
    },
  },
};
```

## Animation Guidelines

### Page Transitions
- Use Framer Motion's `AnimatePresence`
- Fade in/out with slight y-axis movement
- Duration: 0.3s
- Ease: [0.22, 1, 0.36, 1]

### Component Animations
```typescript
const animations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  },
  stagger: {
    container: { staggerChildren: 0.1 },
    item: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
    },
  },
};
```

## Performance Requirements
- Lighthouse score > 90
- First Contentful Paint < 1.2s
- Time to Interactive < 2.5s
- Core Web Vitals compliance
- Image optimization
- Code splitting
- Route prefetching

## Accessibility Requirements
- WCAG 2.1 AA compliance
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation
- Screen reader support
- Color contrast compliance
- Focus management

## Testing Requirements
- Unit tests for utilities
- Component tests with React Testing Library
- E2E tests with Cypress
- API integration tests
- Performance monitoring
- Cross-browser testing 