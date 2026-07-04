Every UI element has to follow these rules. Create their corresponding design tokens and reuse them on components.

# Colors
Main color: #E92E3E
Secondary color: #E9B72E
Black: #0E0103
White: #FFFFFF

Main and Secondary each get a 100-900 scale. 500 is the pure color; each step below 500 mixes in another 20% White (100 is 80% White), each step above 500 mixes in another 20% Black (900 is 80% Black).
Black and White share one neutral 100-900 scale: each step mixes in another 10% Black on top of White (neutral-100 is 10% Black, neutral-900 is 90% Black).

# Type
Font family: Schibsted Grotesk from Google Fonts
Base 1 rem: 16px
Body text: 1rem
For every other header, font size scales up or down by 1.2.
Letter spacing: -0.01%.
Line height: 150% for body, 120% for headings.
Font weight: Regular for body, semibold for headings.

# Scale
Scale starts from 1, and goes by getting multiplied by 2: 1, 2, 4, 8, 16, 32, and so on.
Use scales for everything: border widths, border radiuses, gaps, paddings, etc.

# Page
Main content on a page must occupy a width of 41rem. If the device screen is smaller than that, then it has to occupy 95% of width.