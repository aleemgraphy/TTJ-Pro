# AGENTS.md — TTJ PRO NEAT HOME CARE & SUPPORT SERVICES

## 1. Project Identity

**Company:** TTJ PRO NEAT HOME CARE & SUPPORT SERVICES (TTJ PRO)  
**Business Type:** Non-medical in-home care and support services  
**Primary Service Area:** Bellevue, Washington & surrounding Puget Sound areas  
**Primary Phone:** `425-247-5341`  
**Primary CTA:** Free Consultation  
**Mission:**

> To provide high-quality, compassionate care where you feel at home, so loved ones can live happier and healthier at home.

### Core Brand Positioning

TTJ PRO provides compassionate, reliable, personalized non-medical care that helps seniors and other clients remain comfortable, safe, supported, and independent at home.

The website must communicate:

- Compassion
- Trust
- Safety
- Dignity
- Reliability
- Personalized support
- Family peace of mind
- Local Bellevue service

Avoid medical claims or language that implies TTJ PRO provides medical treatment unless such claims are explicitly supplied and verified.

---

# 2. Product Goal

Build a modern, accessible, responsive marketing website for TTJ PRO that:

1. Clearly explains the company's non-medical home care services.
2. Makes contacting TTJ PRO extremely easy, especially on mobile.
3. Builds trust with prospective clients and family caregivers.
4. Communicates the Bellevue and surrounding Puget Sound service area.
5. Presents the brand as warm, professional, trustworthy, and family-oriented.
6. Provides a clear consultation/intake pathway.
7. Uses reusable components and a maintainable Next.js architecture.
8. Is optimized for accessibility, SEO, performance, and mobile usability.

The website is primarily a **lead-generation and trust-building website**, not a medical records, patient portal, or clinical management system.

---

# 3. Technology Stack

Use the following stack unless a project-level decision explicitly overrides it.

- **Framework:** Next.js
- **Architecture:** App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Design System:** CSS variables
- **UI:** shadcn/ui
- **Component primitives:** Radix UI through shadcn/ui
- **Icons:** lucide-react
- **Forms:** react-hook-form
- **Validation:** Zod
- **Animation:** Framer Motion
- **Package manager:** Use the package manager already established by the repository.
- **Fonts:** Inter, Plus Jakarta Sans, Geist, or another highly legible sans-serif.
- **Optional display font:** Outfit or Playfair Display for selected editorial/mission moments.

Do not introduce additional libraries without a clear implementation need.

---

# 4. Architecture Principles

## 4.1 Server Components by Default

Use React Server Components by default.

Only add:

```tsx
"use client";
```

when a component genuinely requires:

- React state
- Effects
- Browser APIs
- Form interaction
- Dialog interaction
- Mobile menu state
- Client-side animation requiring a client component
- Other browser-only functionality

Do not make entire pages client components unnecessarily.

---

## 4.2 Component-Driven Architecture

Keep sections modular and reusable.

Recommended structure:

```text
app/
├── layout.tsx
├── page.tsx
├── globals.css
├── services/
│   └── page.tsx
└── contact/
    └── page.tsx

components/
├── navbar.tsx
├── hero.tsx
├── mission.tsx
├── services-grid.tsx
├── why-choose-us.tsx
├── how-it-works.tsx
├── contact-section.tsx
├── contact-form.tsx
└── footer.tsx

components/ui/
└── shadcn/ui components

lib/
├── utils.ts
└── validation.ts

public/
├── logo/
├── images/
└── icons/
```

Adapt the structure to the existing repository when necessary rather than unnecessarily restructuring a working project.

---

# 5. Brand Design System

## 5.1 Design Direction

The visual language should feel:

- Calm
- Warm
- Professional
- Trustworthy
- Accessible
- Spacious
- Human
- Family-oriented
- Modern without feeling overly technological

Avoid:

- Aggressive gradients
- Excessive animations
- Neon colors
- Dense layouts
- Excessive shadows
- Tiny text
- Overly clinical hospital aesthetics
- Visually noisy interfaces

The website should feel appropriate for seniors and adult children researching care services for their loved ones.

---

# 6. Color System

The official brand palette is based on the TTJ PRO brand assets.

### Primary — Deep Teal

```text
HEX: #0F5B61
HSL: 185 73% 22%
```

Represents:

- Safety
- Trust
- Healthcare precision
- Protection
- Stability

### Secondary — Warm Gold / Amber

```text
HEX: #D49B28
HSL: 41 70% 49%
```

Represents:

- Warmth
- Compassion
- Human connection
- Support
- The heart in the TTJ PRO logo

### Background — Soft Off-White

```text
HEX: #FAFBFB
HSL: 180 15% 99%
```

### Foreground — Slate Charcoal

```text
HSL: 200 50% 12%
```

### Muted Surface

```text
HSL: 180 20% 95%
```

### Muted Foreground

```text
HSL: 200 20% 40%
```

### Accent

```text
HSL: 41 75% 94%
```

### Accent Foreground

```text
HSL: 41 70% 30%
```

### Border/Input

```text
HSL: 180 15% 88%
```

### Radius

```text
0.75rem
```

---

# 7. CSS Variables

Use semantic design tokens rather than hard-coded Tailwind colors.

Recommended foundation:

```css
@layer base {
  :root {
    --background: 180 15% 99%;
    --foreground: 200 50% 12%;

    --card: 0 0% 100%;
    --card-foreground: 200 50% 12%;

    --primary: 185 73% 22%;
    --primary-foreground: 0 0% 100%;

    --secondary: 41 70% 49%;
    --secondary-foreground: 0 0% 100%;

    --muted: 180 20% 95%;
    --muted-foreground: 200 20% 40%;

    --accent: 41 75% 94%;
    --accent-foreground: 41 70% 30%;

    --border: 180 15% 88%;
    --input: 180 15% 88%;
    --ring: 185 73% 22%;

    --radius: 0.75rem;
  }
}
```

Use semantic classes such as:

```text
bg-primary
text-primary
bg-secondary
text-secondary-foreground
bg-accent
text-accent-foreground
bg-muted
text-muted-foreground
border-border
ring-ring
```

Do not replace these with arbitrary teal, amber, or unrelated Tailwind colors.

---

# 8. Typography

Primary typography must prioritize readability.

Recommended:

- Inter
- Plus Jakarta Sans
- Geist

Optional display font:

- Outfit
- Playfair Display

Use typography hierarchy clearly:

- Large, strong hero headline
- Comfortable body text
- Clear section headings
- Large phone CTA text
- Generous line height
- Avoid unnecessarily small typography

The overall tone should be:

> Compassionate, professional, trustworthy, reassuring, and family-oriented.

---

# 9. Global Navigation

Create:

```text
components/navbar.tsx
```

Navigation links:

- Home
- Our Services
- Why TTJ PRO
- How It Works
- Service Area
- Contact

Primary CTA:

> Free Consultation: 425-247-5341

CTA destination:

```text
tel:425-247-5341
```

Use an accessible label:

```text
aria-label="Call TTJ PRO at 425-247-5341"
```

### Mobile Navigation

The mobile navigation must:

- Have a clear menu trigger.
- Use a minimum 44x44px touch target.
- Provide visible focus states.
- Allow keyboard navigation.
- Close appropriately after navigation.
- Keep the phone CTA prominent.
- Avoid requiring precise tapping.

---

# 10. Hero Section

Create:

```text
components/hero.tsx
```

## Badge

```text
Local Care & Personalized Support in Bellevue & Surrounding Areas
```

## Headline

Use:

```text
Compassionate In-Home Care & Support Services You Can Trust
```

## Supporting Copy

```text
Providing high-quality, non-medical care where your loved ones feel most comfortable — right at home.
```

## Primary CTA

```text
Call for Free Consultation: 425-247-5341
```

Destination:

```text
tel:425-247-5341
```

## Secondary CTA

```text
Explore Our Care Services
```

Destination:

```text
/services
```

The hero should immediately communicate:

1. What TTJ PRO does.
2. Where it operates.
3. Why families can trust the service.
4. How to contact the company.

---

# 11. Mission Section

Create:

```text
components/mission.tsx
```

Use a visually distinctive but restrained mission callout.

Mission copy:

> “To provide high-quality, compassionate care where you feel at home, so loved ones can live happier and healthier at home.”

Use a subtle warm-gold accent/border and a soft background.

Do not overpower the mission with excessive decoration.

---

# 12. Services

Create:

```text
components/services-grid.tsx
```

Render eight service cards.

Use a responsive layout:

```text
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
```

Each card should contain:

- Lucide icon
- Service name
- Description
- Accessible visual hierarchy

## Service 1 — Personal Care

Icon:

```text
UserCheck
```

Description:

> Compassionate assistance with daily personal hygiene, including grooming, bathing, and dressing to maintain dignity and comfort.

## Service 2 — Companionship

Icon:

```text
HeartHandshake
```

Description:

> Meaningful emotional support, engaging conversation, and social interaction to prevent isolation and support mental well-being.

## Service 3 — Meal Preparation

Icon:

```text
Utensils
```

Description:

> Delicious, nutritious meals planned and prepared according to individual dietary needs and preferences.

## Service 4 — Medication Reminders

Icon:

```text
Pill
```

Description:

> Timely, dependable reminders to ensure client care schedules and daily routines stay consistently on track.

Important:

Medication reminders must not be described as medication administration or medical treatment.

## Service 5 — Mobility Assistance

Icon:

```text
Activity
```

Description:

> Dedicated support with walking, safe transfers, and comfortable movement around the home to promote independence.

Do not make unsupported clinical or therapeutic claims.

## Service 6 — Errands & Shopping

Icon:

```text
ShoppingBag
```

Description:

> Dependable help with grocery shopping, picking up prescriptions, and running essential routine errands.

## Service 7 — Light Housekeeping

Icon:

```text
Home
```

Description:

> Maintaining a tidy, safe, and comfortable living environment through light cleaning, laundry, and organizing.

## Service 8 — Customized Care

Icon:

```text
Sparkles
```

Description:

> Tailored support built around your family’s unique routine because every individual's care needs vary.

---

# 13. Why Families Choose TTJ PRO

Create:

```text
components/why-choose-us.tsx
```

Present the five trust pillars.

### 1. Compassionate & Reliable Caregivers

> Vetted, dedicated professionals who treat clients with warmth and dignity.

### 2. Customized Care Plans

> Individualized care blueprints adapted to your family's exact daily schedule.

### 3. Flexible Scheduling to Fit Your Needs

> Hourly visits, daily assistance, or long-term schedules without rigid constraints.

### 4. Emergency & Backup Care Plans

> Preparedness and contingency coverage so your family is never left without support.

### 5. Long-term Care You Can Trust

> Ongoing continuity of care focused on safety, happiness, and peace of mind.

Do not make regulatory, licensing, caregiver-vetting, emergency-response, or continuity claims unless they are confirmed by the business.

---

# 14. How It Works

Create:

```text
components/how-it-works.tsx
```

Use a clear three-step visual process.

## Step 1 — Free Phone Consultation

> Call 425-247-5341 to discuss your loved one's daily needs and schedule.

## Step 2 — Care Assessment & Matching

> We evaluate care requirements and match a reliable, compatible caregiver.

## Step 3 — Personalized Home Care Delivery

> Begin care with continuous oversight, updates, and backup coverage.

The design should make the progression easy to understand on both desktop and mobile.

---

# 15. Service Area

Primary heading:

```text
Serving Bellevue & Surrounding Puget Sound Areas
```

Supporting text:

> Local care and personalized support, tailored for families across Bellevue and neighboring communities.

Do not invent a detailed list of cities or neighborhoods unless the business supplies them.

If a map is added later, use verified service-area information.

---

# 16. Contact & Consultation

Create:

```text
components/contact-section.tsx
components/contact-form.tsx
```

## Primary Contact

Phone:

```text
425-247-5341
```

Label:

```text
Free Consultation
```

Phone link:

```text
tel:425-247-5341
```

## QR Code

Provide a QR code that connects users to the approved TTJ PRO contact/intake destination.

Do not invent a QR destination.

The destination must be configurable.

---

# 17. Consultation Form

The consultation form should collect only information necessary for an initial inquiry.

Recommended fields:

- Name
- Phone
- Email
- Service Needed
- Message

Use:

- react-hook-form
- Zod
- shadcn/ui Form
- Input
- Select
- Textarea
- Button

Validate client-side input and provide accessible error messages.

Potential service options:

```text
Personal Care
Companionship
Meal Preparation
Medication Reminders
Mobility Assistance
Errands & Shopping
Light Housekeeping
Customized Care
Other
```

Do not collect medical records, diagnoses, medication lists, insurance information, or other sensitive health information through a basic marketing form unless a secure, compliant intake system is explicitly implemented.

---

# 18. Footer

Create:

```text
components/footer.tsx
```

Include:

- TTJ PRO branding
- Mission statement or short company description
- Phone number
- Service area
- Navigation links
- Contact link
- Appropriate legal/privacy links when available

Phone CTA:

```text
425-247-5341
```

Use:

```text
tel:425-247-5341
```

---

# 19. Pages

## Homepage

```text
/
```

Recommended order:

1. Navbar
2. Hero
3. Mission
4. Services
5. Why Families Choose TTJ PRO
6. How It Works
7. Service Area
8. Contact/Consultation CTA
9. Footer

---

## Services Page

```text
/services
```

Provide expanded information about all eight services.

Use the same service data source as the homepage rather than duplicating service definitions.

---

## Contact Page

```text
/contact
```

Include:

- Phone CTA
- Consultation form
- Service area
- QR code
- Clear expectations about submitting an inquiry

---

# 20. SEO

Implement strong local SEO fundamentals.

Root metadata should communicate:

- TTJ PRO NEAT HOME CARE & SUPPORT SERVICES
- Non-medical home care
- Bellevue, Washington
- Companion care
- Personal care
- In-home support

Use meaningful:

- Page titles
- Meta descriptions
- Canonical URLs where appropriate
- Open Graph metadata
- Descriptive image alt text
- Semantic HTML

Do not keyword-stuff.

Do not claim rankings, certifications, licensing, awards, or service coverage that has not been verified.

---

# 21. Accessibility Requirements

Accessibility is a core product requirement.

Follow WCAG-oriented practices.

### Requirements

- Semantic HTML
- Proper heading hierarchy
- Visible keyboard focus
- Accessible forms
- Proper labels
- Useful error messages
- Sufficient color contrast
- Minimum 44x44px touch targets
- Descriptive link text
- Accessible mobile navigation
- Accessible dialogs
- Meaningful `alt` text for informative images
- Empty alt text for decorative images
- Never communicate information by color alone

Phone links must have an appropriate accessible label.

Example:

```tsx
<a
  href="tel:425-247-5341"
  aria-label="Call TTJ PRO at 425-247-5341"
>
  425-247-5341
</a>
```

---

# 22. Responsive Design

Design mobile-first.

Required breakpoints should support:

- Small phones
- Large phones
- Tablets
- Laptops
- Large desktop screens

Pay particular attention to:

- Phone CTA visibility
- Navigation
- Form usability
- Text size
- Card stacking
- Section spacing
- Hero layout
- Touch targets

The website must remain comfortable to use for older adults and family caregivers.

---

# 23. Animation Rules

Use Framer Motion only where animation improves comprehension or polish.

Preferred effects:

- Subtle fade-in
- Gentle slide-up
- Card hover elevation
- Small CTA interaction feedback

Avoid:

- Excessive parallax
- Continuous movement
- Distracting bouncing
- Long entrance animations
- Animation that blocks content
- Excessive motion for accessibility-sensitive users

Respect:

```text
prefers-reduced-motion
```

---

# 24. UI Component Rules

Prefer shadcn/ui components where appropriate.

Common components:

- Button
- Card
- Badge
- Input
- Select
- Textarea
- Form
- Dialog
- Sheet
- Separator

Do not rebuild standard UI primitives unnecessarily.

Customize shadcn/ui through the TTJ PRO design tokens rather than introducing arbitrary colors.

---

# 25. Icon Rules

Use `lucide-react`.

Recommended mappings:

```text
Personal Care       → UserCheck
Companionship       → HeartHandshake
Meal Preparation    → Utensils
Medication Reminders→ Pill
Mobility Assistance → Activity
Errands & Shopping  → ShoppingBag
Light Housekeeping  → Home
Customized Care     → Sparkles
```

Icons should reinforce meaning and should not be the sole method of communicating information.

---

# 26. Content Rules

The supplied website copy is the source of truth unless the business owner approves changes.

Do not:

- Invent testimonials.
- Invent client reviews.
- Invent caregiver credentials.
- Invent certifications.
- Invent licenses.
- Invent awards.
- Invent years of experience.
- Invent exact service boundaries.
- Invent pricing.
- Invent medical capabilities.
- Invent emergency medical services.
- Make unsupported promises.

If information is missing, use neutral copy or mark it as requiring business confirmation.

---

# 27. Healthcare & Care-Service Language Rules

TTJ PRO is presented as a **non-medical care and support service**.

Use language such as:

- Support
- Assistance
- Companionship
- Daily routines
- Personal care
- Mobility assistance
- Meal preparation
- Medication reminders
- Household support
- Family support

Avoid implying that TTJ PRO:

- Diagnoses conditions
- Treats diseases
- Prescribes medication
- Administers medication
- Provides medical treatment
- Replaces physicians or nurses
- Provides emergency medical response

unless the business explicitly confirms that capability and the relevant legal/regulatory requirements are satisfied.

---

# 28. Data & Privacy

Treat contact/intake information as potentially sensitive.

Never log personal form submissions unnecessarily.

Never expose submitted contact information in client-side source code.

Do not place sensitive client information in URLs.

If storing inquiries, use an appropriately secured backend/service.

Provide a privacy policy when the production site collects personal information.

Avoid collecting unnecessary information.

---

# 29. Forms & Error Handling

Forms must have:

- Loading state
- Validation
- Error state
- Success state
- Accessible field labels
- Accessible error messages
- Keyboard support

Never silently fail.

Provide a fallback phone CTA:

```text
Call TTJ PRO at 425-247-5341
```

when form submission fails.

---

# 30. Performance

Prioritize:

- Fast initial page load
- Optimized images
- Next.js image optimization
- Minimal client-side JavaScript
- Server Components
- Lazy loading where appropriate
- Avoiding unnecessary dependencies
- Avoiding oversized hero assets
- Proper font loading

Do not sacrifice accessibility or readability solely for performance metrics.

---

# 31. Image & Brand Asset Rules

Use official TTJ PRO brand assets where provided.

The logo should represent:

- Deep Teal house
- Supportive/open hand
- Warm Gold heart

Do not:

- Distort the logo
- Change its proportions
- Apply arbitrary filters
- Replace the official brand colors
- Add unnecessary effects

All meaningful images require appropriate alt text.

---

# 32. CTA Strategy

The phone CTA is one of the highest-priority interactions on the website.

Prominent CTA locations:

- Navbar
- Hero
- Contact section
- Footer
- Mobile navigation

Primary phone:

```text
425-247-5341
```

Primary action:

```text
Free Consultation
```

Do not make users search through the website to find the phone number.

---

# 33. Code Quality

Use:

- TypeScript
- Strong typing
- Small reusable components
- Meaningful variable names
- Consistent formatting
- Reusable constants
- No unnecessary duplication

Avoid:

- `any` unless unavoidable
- Huge monolithic components
- Repeated service data
- Hard-coded values spread across components
- Dead code
- Unused imports
- Unnecessary client components

---

# 34. Data Modeling

Centralize repeated service content.

For example:

```ts
export const services = [
  {
    title: "Personal Care",
    icon: UserCheck,
    description:
      "Compassionate assistance with daily personal hygiene, including grooming, bathing, and dressing to maintain dignity and comfort.",
  },
  // ...
];
```

Use this shared data for:

- Homepage cards
- Services page
- Contact form service options
- Future structured content

Avoid duplicating the same copy in multiple components.

---

# 35. Navigation Data

Centralize navigation links when practical.

Example:

```ts
export const navigation = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "Why TTJ PRO", href: "/#why-choose-us" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Service Area", href: "/#service-area" },
  { label: "Contact", href: "/contact" },
];
```

Ensure all links resolve correctly.

---

# 36. Phone Configuration

Do not scatter the phone number throughout unrelated components.

Prefer a centralized constant:

```ts
export const siteConfig = {
  name: "TTJ PRO NEAT HOME CARE & SUPPORT SERVICES",
  phone: "425-247-5341",
  phoneHref: "tel:425-247-5341",
  serviceArea: "Bellevue, WA & Surrounding Puget Sound Areas",
};
```

Use the configuration everywhere.

---

# 37. Testing Requirements

Before considering the site complete, test:

### Functional

- Navigation links
- Mobile navigation
- Phone links
- Consultation form
- Form validation
- Form success state
- Form error state
- Services page
- Contact page

### Responsive

- Mobile
- Tablet
- Desktop
- Large desktop

### Accessibility

- Keyboard navigation
- Focus visibility
- Screen-reader labels
- Form labels
- Color contrast
- Touch target sizes

### Performance

- Image optimization
- Font loading
- Unnecessary client JavaScript
- Layout shifts

### Browser

Test current versions of:

- Chrome
- Edge
- Safari
- Firefox

---

# 38. Definition of Done

A feature is complete only when:

- It follows the TTJ PRO design system.
- It works responsively.
- It is accessible.
- It uses semantic HTML.
- It uses the appropriate shadcn/ui primitives.
- It does not introduce arbitrary brand colors.
- It has no TypeScript errors.
- It has no obvious console errors.
- It does not contain invented business claims.
- Phone CTAs work.
- Forms have appropriate validation and error handling.
- SEO metadata is present where appropriate.
- The implementation does not unnecessarily use client components.
- The code is maintainable and reusable.

---

# 39. AI Coding Agent Instructions

When modifying this project:

1. Read this `AGENTS.md` before making implementation decisions.
2. Inspect the existing project before creating new files.
3. Preserve working architecture unless there is a clear reason to change it.
4. Reuse existing components before creating duplicates.
5. Follow the TTJ PRO design tokens.
6. Use shadcn/ui components where applicable.
7. Use Lucide icons.
8. Keep components focused.
9. Prefer Server Components.
10. Add `"use client"` only when required.
11. Do not invent business information.
12. Do not make unsupported healthcare claims.
13. Keep the phone CTA prominent.
14. Maintain accessibility.
15. Maintain mobile-first responsive behavior.
16. Validate forms with Zod.
17. Keep repeated content centralized.
18. Avoid unnecessary dependencies.
19. Run the project's available lint/type-check/test commands after significant changes.
20. Fix errors rather than suppressing them.
21. Before adding a new dependency, verify whether the existing stack already provides the required functionality.
22. Do not rewrite unrelated parts of the application when implementing a focused feature.
23. Preserve official TTJ PRO brand assets.
24. Prefer simple, reliable implementations over unnecessary abstraction.
25. Treat this file as the project's product, design, content, and engineering source of truth.

---

# 40. Suggested Initial Implementation Order

When starting from an empty or partially built project, implement in this order:

### Phase 1 — Foundation

1. Next.js App Router setup
2. TypeScript
3. Tailwind CSS
4. shadcn/ui
5. CSS variables
6. Fonts
7. Site configuration
8. Global metadata

### Phase 2 — Core Components

1. Navbar
2. Hero
3. Mission
4. Services grid
5. Why Choose TTJ PRO
6. How It Works
7. Service Area
8. Contact CTA
9. Footer

### Phase 3 — Pages

1. Homepage
2. Services page
3. Contact page

### Phase 4 — Forms

1. Contact form
2. Zod schema
3. Validation
4. Submission state
5. Success/error handling

### Phase 5 — Quality

1. Accessibility review
2. Responsive review
3. SEO review
4. Performance optimization
5. Type checking
6. Linting
7. Production build
8. Cross-browser verification

---

# 41. Final Product Experience

The finished TTJ PRO website should make a visitor understand within seconds:

**Who is TTJ PRO?**

A local non-medical home care and support service.

**Where do they operate?**

Bellevue, Washington and surrounding Puget Sound areas.

**What do they provide?**

Personal care, companionship, meal preparation, medication reminders, mobility assistance, errands/shopping, light housekeeping, and customized care.

**Why should a family contact them?**

The website communicates compassionate, personalized, reliable support and makes consultation easy.

**What should the visitor do next?**

Call:

```text
425-247-5341
```

for a free consultation, or explore the services and submit an inquiry.

The final experience should feel:

> **Warm. Trustworthy. Accessible. Local. Professional. Human.**
