# StoryCard

A numbered feature card: PhotoFrame with index and caption, a `display-lg` title in `orange`, two to three lines of `body` copy in `ink`, and an `ink` outline Button. Cards sit three across on equal columns with `space-6` between them; numbering runs 01, 02, 03.

Consumer provides: `index`, `src`, `alt`, `title` (two to three words, sentence case: "Pick your angle", "Create content", "Refine GTM"), body copy as `children` (a two-beat pattern: a short first line, then how Kindling does it), and the `action` label. `caption` defaults to the house caption; pass `false` to hide it.

Do: keep copy lines at similar lengths across a row. Don't: add icons, badges, shadows or a card background; the card is its content on `paper`.
