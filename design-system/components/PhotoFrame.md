# PhotoFrame

A photograph in a square-cornered frame with the house caption overlay. Optional pieces: `index` adds the marker row above the frame (chevron, mono index "01", chevron at the far edge, all `orange`); `caption` (`true` for the house text, or an array of up to four short lines) sets the Roboto Mono overlay bottom-left in `white` (the brand white, #FFF5E5); `chamfer` cuts the top-right corner on a diagonal from 63% across the top to 18% down the right edge, as in the Work grid. With no `src` it draws an empty 4:5 outline frame in `ink`, the placeholder state.

Consumer provides: `src` and `alt` (describe the picture, not the brand), and the frame's width from its container; height follows the image. Use portrait crops at 4:5 to 3:4. The house caption reads `KINDLING / STORY 014`, `00:03:42:18`, `FOUNDER POV`, `RECORDED / BROOKLYN NY`; change the story number, timecode and role per image but keep four lines, uppercase, slashes as separators.

Do: keep the caption clear of the subject's face. Don't: round the corners, add borders to filled photos, or place the caption on a light area where white loses contrast.
