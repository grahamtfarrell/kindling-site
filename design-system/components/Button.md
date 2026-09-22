# Button

The one clickable label: a sharp-cornered rectangle in Instrument Sans 500 (`ui`). `variant="primary"` is the `orange` fill with `white` label, one per view (the nav "Talk to Us" and the hero CTA); `variant="outline"` is a 1px `orange` outline for the secondary action beside it; `variant="ink"` is a 1px `ink` outline for actions inside cards ("Explore Campaigns", "Keep Learning").

Consumer provides: the label as `children` and any `onClick` or `disabled`. Labels are Title Case ("Talk to Us", "Watch the Story"), two to three words, no icons, no trailing arrows.

Do: keep corners square (`radius-none`). Don't: add shadows, gradients or rounded pills. The `primary` label is white on orange at 2.69:1, the comps' own pairing; where legibility is critical, set an `ink` label on the `orange` fill (5.8:1). The `outline` variant sets small orange text on paper (2.78:1), so prefer `ink` for anything below display size. Hover states are added here (ink fill) because the comps show none.
