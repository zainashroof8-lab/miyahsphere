# Design Guidelines: Autonomous Pipe Inspection Ball User Manual

## Design Approach: Documentation-Focused System
**Selected Framework**: Material Design principles adapted for technical documentation, emphasizing clarity, hierarchy, and accessibility for field engineers and technicians.

**Core Principles**:
- Information clarity over visual flair
- Systematic organization with strong visual hierarchy
- Professional credibility through clean, structured layouts
- Mobile-first for field operation accessibility

---

## Typography System

**Font Stack**: 
- Headings: Inter or Roboto (600/700 weight)
- Body: Inter or Roboto (400/500 weight)
- Technical specs/code: JetBrains Mono or Roboto Mono

**Type Scale**:
- H1 (Page titles): 2.5rem/3rem (mobile/desktop), font-weight: 700
- H2 (Major sections): 2rem/2.25rem, font-weight: 600
- H3 (Subsections): 1.5rem/1.75rem, font-weight: 600
- H4 (Component headers): 1.25rem/1.5rem, font-weight: 500
- Body: 1rem/1.125rem, line-height: 1.7
- Caption/labels: 0.875rem, font-weight: 500

---

## Layout System

**Spacing Primitives**: Tailwind units of **4, 6, 8, 12, 16** (e.g., p-4, mb-8, gap-6)

**Container Strategy**:
- Max-width: 1280px for main content
- Documentation content: max-w-4xl for optimal readability
- Two-column where beneficial: 65/35 split (content/sidebar)

**Grid Applications**:
- Technical specs: 2-column grid on desktop, stack on mobile
- Troubleshooting: Single column for sequential steps
- Parts identification: Image left, description right on desktop

---

## Component Library

### Navigation
**Sticky sidebar navigation** (desktop):
- Hierarchical table of contents
- Active section highlighting with left border accent
- Smooth scroll anchoring
- Collapsible subsections

**Mobile navigation**:
- Hamburger menu with full-screen overlay
- Hierarchical drill-down structure

### Hero Section
**Full-width hero** (80vh) featuring:
- Large inspection ball image in pipeline context (provided image)
- Project title overlay with semi-transparent backdrop blur
- Quick-access buttons to key sections (Get Started, Safety Warnings, Technical Specs)
- Subtle animated scroll indicator

### Content Sections
**Safety Warnings Box**:
- Bordered container with warning icon
- Signal word badges (DANGER: red, WARNING: orange, CAUTION: yellow)
- High contrast text for critical information

**Technical Specifications Table**:
- Striped rows for readability
- Sticky header on scroll
- Responsive collapse to cards on mobile

**Parts Identification Diagrams**:
- Split layout: Image with numbered callouts on left, legend list on right
- Use provided exploded view image
- Hover states highlight corresponding numbers

**Step-by-Step Procedures**:
- Numbered cards with generous padding (p-6)
- Icon indicators for each step type
- Progress indication for multi-step processes

**Troubleshooting Accordion**:
- Expandable problem/solution pairs
- Search/filter functionality
- Clear visual separation between items

### Interactive Elements
**Buttons**:
- Primary: Solid with semi-transparent background when over images
- Secondary: Outlined
- Icon + text combinations for actions
- Consistent hover states (slight scale + shadow)

**Search Bar**:
- Prominent placement in header
- Real-time filtering of manual sections
- Keyboard shortcut hint (Ctrl+K)

---

## Page Structure

**Landing/Overview**:
- Hero with device image
- Quick stats cards (3-column): Operating Pressure, Pipe Compatibility, Detection Accuracy
- Feature highlights (2-column grid): What it detects, Key benefits
- Quick navigation cards to main sections

**Manual Sections**:
- Persistent sidebar navigation (desktop)
- Breadcrumb trail
- Section header with icon
- "On this page" mini-TOC for long sections
- "Previous/Next Section" navigation at bottom

**Print-Friendly Version**:
- Single-page layout toggle
- Optimized spacing for PDF export
- Page breaks at major sections

---

## Images

### Required Images:
1. **Hero**: Inspection ball inside translucent blue pipeline (use provided pipeline image)
2. **Parts Diagram**: Exploded component view (use provided exploded view)
3. **Deployment Illustration**: Diagram showing insertion/retrieval process
4. **Safety Icons**: High-pressure warning, waterproof verification, authorized personnel only
5. **Data Flow Diagram**: Ball → Retrieval → Analysis → GIS Integration

### Image Treatment:
- Subtle shadow for elevation (shadow-lg)
- Rounded corners (rounded-lg) for component photos
- Full-bleed for hero and section dividers
- Captioned diagrams with figure numbers

---

## Accessibility & Quality Standards

- WCAG 2.1 AA compliance minimum
- Focus indicators on all interactive elements
- Semantic HTML5 structure
- Descriptive alt text for all technical diagrams
- Keyboard navigation throughout
- High contrast ratios for all text (4.5:1 minimum)

---

## Animations

**Minimal, purposeful motion**:
- Smooth scroll behavior for anchor links
- Subtle fade-in for section content on scroll
- Accordion expand/collapse transitions
- No auto-playing animations or distracting effects

---

## Mobile Optimization

- Touch-friendly targets (minimum 44x44px)
- Collapsible sections to reduce scrolling
- Sticky "Back to Top" button
- Optimized images for bandwidth
- Hamburger menu with clear section access