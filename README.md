<div align="center">
  <img alt="Logo" src="https://github.com/lw75251/lw75251.github.io/blob/source/src/images/logo.png" width="100" />
</div>
<h1 align="center">
  Portfolio Website
</h1>
<p align="center">
  Personal portfolio built with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> and hosted with <a href="https://pages.github.com/" target="_blank">Github Pages</a>
</p>

<div align="center">
  <img alt="Demo" src="https://github.com/lw75251/lw75251.github.io/blob/source/src/images/demo.png" />
</div>

### TL;DR

Yes, you can fork this repo. Please give proper credit by linking back to [brittanychiang.com](https://brittanychiang.com). Thanks!

## 📁 Project Structure

The project has the following structure:

- **content/**: Contains all the website content as Markdown files
  - **about/**: Personal information and skills
  - **contact/**: Contact information
  - **featured/**: Featured projects
  - **hero/**: The hero/landing section
  - **jobs/**: Work experience
  - **projects/**: Additional projects
  - **posts/**: Blog posts

- **src/**: Source code for the website
  - **components/**: React components
  - **config.js**: Main configuration file for the site
  - **fonts/**: Custom fonts
  - **images/**: Image assets
  - **pages/**: Page components
  - **styles/**: CSS and styling
  - **templates/**: Templates for dynamic pages
  - **utils/**: Utility functions

- **static/**: Static files that are copied directly to the build folder

## 🛠 Installation & Set Up

1. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

2. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

3. Install dependencies

   ```sh
   yarn
   ```

4. Start the development server

   ```sh
   npm start
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run build
   ```

2. Preview the site as it will appear once deployed

   ```sh
   npm run serve
   ```

3. Deploy to GitHub Pages

   ```sh
   npm run deploy
   ```

## 🔄 How to Update

### Content Updates

To update content, edit the Markdown files in the `/content` directory:
- Each section has its own folder with an `index.md` file
- The top section between `---` is frontmatter containing metadata
- The content below the frontmatter is rendered as the main content

#### Job Experience Format

The `jobs` section supports two formats:

1. **Single position format**:
   ```yaml
   ---
   date: '2024-07-31'
   title: 'Job Title'
   company: 'Company Name'
   location: 'Location'
   range: 'Start Date - End Date'
   url: 'https://company-website.com/'
   ---
   
   - Bullet point about achievements
   - Another bullet point
   ```

2. **Multiple positions format** (for showing promotions):
   ```yaml
   ---
   date: '2024-07-31'
   company: 'Company Name'
   url: 'https://company-website.com/'
   positions:
     - title: 'Senior Position Title'
       range: 'Promotion Date - End Date'
       location: 'Location'
       points:
         - 'Bullet point about achievements in this role'
         - 'Another bullet point about this role'
     - title: 'Junior Position Title'
       range: 'Start Date - Promotion Date'
       location: 'Location'
       points:
         - 'Bullet point about achievements in this role'
         - 'Another bullet point about this role'
   ---
   ```

### Configuration Updates

The main configuration is in `src/config.js`. Update the following:
- Site metadata (title, description, keywords)
- Social media links
- Navigation links
- Colors and styling configurations

### Visual/Design Updates

- Replace images in `src/images/` and content directories
- Update styles in `src/styles/`
- Modify components in `src/components/`

## 🎨 Color Reference

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Navy           | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) `#0a192f` |
| Light Navy     | ![#172a45](https://via.placeholder.com/10/0a192f?text=+) `#172a45` |
| Lightest Navy  | ![#303C55](https://via.placeholder.com/10/303C55?text=+) `#303C55` |
| Slate          | ![#8892b0](https://via.placeholder.com/10/8892b0?text=+) `#8892b0` |
| Light Slate    | ![#a8b2d1](https://via.placeholder.com/10/a8b2d1?text=+) `#a8b2d1` |
| Lightest Slate | ![#ccd6f6](https://via.placeholder.com/10/ccd6f6?text=+) `#ccd6f6` |
| White          | ![#e6f1ff](https://via.placeholder.com/10/e6f1ff?text=+) `#e6f1ff` |
| Green          | ![#64ffda](https://via.placeholder.com/10/64ffda?text=+) `#64ffda` |

## 📝 Changelog

### April 2024
- Updated website favicons for improved branding consistency
  - Replaced the previous logo.png with custom favicon files in various sizes (16x16, 32x32, 192x192, 512x512)
  - Simplified favicon implementation by using the actual favicon files directly without additional processing
  - Updated `src/components/head.js` to use only the available favicon files:
    - Removed references to non-existent favicon files
    - Added support for apple-touch-icon.png
    - Added support for android-chrome-192x192.png and android-chrome-512x512.png
  - Configured gatsby-plugin-manifest to use favicon-32x32.png as the main icon source
  - Disabled legacy favicon behavior for modern browser compatibility
  - Fixed the canonical URL to use the site URL from metadata
- Fixed formatting issue in Indeed job description:
  - Added missing closing quote in the last bullet point of the Senior Business Analyst position
  - Resolved GraphQL query error related to the "positions" field in MarkdownRemarkFrontmatter
- Enhanced About section image display:
  - Increased image container width from 40% to 50% and max-width from 300px to 400px
  - Added min-height of 500px to ensure proper vertical display of the image
  - Set 3:4 aspect ratio and configured object-fit properties for better image rendering
  - Improved image quality by increasing maxWidth to 1000px and quality to 95% in GraphQL query
  - Adjusted content area width from 60% to 50% to maintain layout balance
  - Improved mobile responsiveness by increasing phablet image width from 70% to 80%
- Fixed image caching issues with the profile picture:
  - Renamed the profile image to `me-new.jpg` to bypass browser and Gatsby caching
  - Added documentation on clearing Gatsby cache when updating images using `gatsby clean`
  - Resolved build errors related to static file resolution by cleaning cache before building
- Updated links across the site:
  - Updated GitHub profile URL to correct address: https://github.com/lw75251/
  - Updated resume.pdf in the static directory with the latest version (Leon_Wu_Data_Sci_Mar_2025.pdf)
  - Verified correct email (lw75251@gmail.com) and LinkedIn URL (https://www.linkedin.com/in/aleonwu/)
- Changed the logo icon from "Y" to "L" in both the loading animation and navigation header
  - Updated SVG text element in src/components/icons/loader.js
  - Updated SVG text element in src/components/icons/logo.js
  - Adjusted x coordinates from 40px to 36px in loader.js and from 35px to 32px in logo.js to properly center the letter "L" visually in the hexagon
- Added support for multiple subtitles in the hero section
  - New `subtitles` array in hero frontmatter allows multiple lines of subtitles
  - Updated hero component to render subtitle lines individually with smaller font size
  - Maintained backward compatibility with the single `subtitle` field
- Added support for displaying multiple positions at the same company with a timeline UI
- Updated job entry format to include `positions` array for showing career progression
- Added blog functionality with first welcome post
- Added Blog navigation link to the header
- Personalized the site with custom information
- Updated configuration in src/config.js with personal details
- Updated README.md with project structure and maintenance instructions

## 🔍 Troubleshooting

### Image Caching Issues

If updated images aren't reflecting in the built site:

1. **Clear Gatsby's Cache**
   ```sh
   gatsby clean
   # or
   npm run clean
   ```

2. **Rebuild the Site**
   ```sh
   npm run build
   ```

3. **Verify Changes**
   ```sh
   npm run serve
   ```

This is particularly important when:
- Replacing profile images or project screenshots with the same filename
- Making changes to CSS or other assets that might be cached
- Experiencing build errors related to missing static files

For stubborn caching issues, try giving your new image a different filename (e.g., `profile-v2.jpg` instead of `profile.jpg`) and updating all references to it.
