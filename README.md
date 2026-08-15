# ALU Robotics Showcase

Build a website for the ALU Robotics Club, a student robotics club at African Leadership University in Kigali Rwanda. The site is a project showcase, not a recruitment page. The main job is to display the club's work across hackathons, competitions, and builds, each with photos.

Overall style Dark, technical, engineering feel. Think circuit boards and lab notebooks rather than a generic startup template. The color scheme should be pulled directly from the ALU logo and the Robotics Club logo, both of which I am uploading. Use their exact colors as the palette, accent color plus supporting neutrals, rather than picking a generic tech color. Monospace or slightly technical font for headings, clean sans serif for body text. No stock gradients, no generic SaaS look.

Logos Place the ALU logo and the Robotics Club logo in the navbar, and use the Robotics Club logo again as a small mark in the footer. Pull the site's primary and accent colors straight from these two logos.

Backgrounds Every major section background should be a full bleed photo slideshow, not a flat color or gradient. Photos should auto transition every few seconds with a smooth crossfade, and sit behind a dark semi transparent overlay so text stays readable on top. Use the hackathon, competition, and project photos themselves as the slideshow source so the backgrounds are always real club photos, not stock images. The homepage hero should be the most dramatic version of this, full screen slideshow behind the club name and tagline.

Pages and sections

Home Club name and short tagline at the top. A hero section with a rotating or grid preview of a few standout project photos. Brief line about what the club does. Below that, a preview strip pulling in the most recent hackathon, most recent competition, and most recent project, each linking to its full page.

Hackathons A grid or timeline of hackathons the club has entered. Each entry is a card with the hackathon name, date, location, a short paragraph on what the team built, the outcome (won, placed, participated), and a photo gallery for that specific hackathon. Clicking a card opens a dedicated page for that hackathon with the full photo set and a longer writeup.

Competitions Same structure as hackathons but for formal robotics competitions. Card grid with name, date, result or ranking, description, and photo gallery. Each competition gets its own page with more photos and detail.

Projects Ongoing or completed club projects that aren't tied to a specific event. Same card and gallery pattern. Include what the robot or system does, the tech or hardware used, and team members involved if relevant.

Gallery A combined photo wall pulling every image from every hackathon, competition, and project into one scrollable grid, with a filter to view by category.

About Short section on the club, when it was founded, and its mission. Contact or social links at the bottom.

Structure and data Each hackathon, competition, and project should be its own content entry with a fixed set of fields: title, date, location, category (hackathon, competition, or project), short description, long description, outcome or result, and an array of image slots. Set this up so I can duplicate an entry and swap in new text and photos easily rather than editing raw layout code every time.

Photos I will be uploading real photos from each event. Build the photo galleries so they support at least 8 to 12 images per entry, arranged in a grid, and clickable to view full size in a lightbox. Use clearly labeled placeholder images for now so I can see the layout before I swap in the real ones.

Navigation Simple top navbar: Home, Hackathons, Competitions, Projects, Gallery, About. Sticky on scroll. Mobile responsive with a hamburger menu.

Tone Confident and a little competitive, like a team that builds things and wins things. Avoid generic "welcome to our club" language. Let the work speak through the photos and results.


ill uplos those pictures now but i hace ulaod ded the logo now

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4fa03c79-7141-4811-bc22-582646cad521).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
