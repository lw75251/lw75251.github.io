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
- Added support for displaying multiple positions at the same company with a timeline UI
- Updated job entry format to include `positions` array for showing career progression
- Added blog functionality with first welcome post
- Added Blog navigation link to the header
- Personalized the site with custom information
- Updated configuration in src/config.js with personal details
- Updated README.md with project structure and maintenance instructions
