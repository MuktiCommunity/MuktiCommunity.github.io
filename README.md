![GitHub License](https://img.shields.io/github/license/a-chacon/awesome-jekyll-theme)

# The Official Mukti Website 🌟

Welcome to the official repository for Mukti’s website! Mukti is a vibrant student club focused on Free and Open Source Software (FOSS), cybersecurity, AI, and more. This website showcases our projects, events, blog posts, and serves as the hub for our community.

## Features

1. **Modern and Professional Design:** The website boasts a sleek, minimalist design with a focus on content and ease of navigation.

2. **Responsive Layout:** Fully responsive, ensuring an optimal viewing experience across devices.

3. **Dynamic Project Showcases:** A dedicated section to highlight ongoing and completed projects, with a modern grid layout.

4. **Blog Section:** Share news, tutorials, and insights through a clean and organized blog layout.

5. **Easy Customization:** Powered by Jekyll, the site is easy to update and customize, with intuitive configurations.

## Installation

### Quick Setup for GitHub Pages

1. **Use This Template:** Click the "Use this template" button on GitHub to create your own repository from this one.

2. **Configure GitHub Pages:** In your repository settings, go to **Settings -> Pages -> Source** and select `GitHub Actions`.

3. **Customize:** Edit the `_config.yml` file to customize the site’s settings and content.

4. **Deploy:** Your website should be live at `https://YOURUSERNAME.github.io` within a few minutes.

### Local Development

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/MuktiCommunity/MuktiCommunity.github.io.git
   cd MuktiCommunity.github.io
   ```

2. **Install Dependencies:**

   ```bash
   bundle install
   ```

3. **Run the Website Locally:**

   ```bash
   bundle exec jekyll serve
   ```

   The site will be available at `http://localhost:4000`.

## Usage

### Adding a New Blog Post

To add a new blog post:

1. Create a new Markdown file in the `_posts` directory, following the naming convention `YYYY-MM-DD-title.md`.

2. Add the front matter:

   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: YYYY-MM-DD HH:MM:SS
   categories: [category1, category2]
   tags: [tag1, tag2]
   ---
   ```

3. Write your content using Markdown.

### Adding a New Project

To showcase a new project:

1. Create a new Markdown file in the `_projects` directory.

2. Add the front matter:

   ```yaml
   ---
   layout: project
   title: "Project Title"
   category: "Project Category"
   tags: [tag1, tag2]
   image: /path/to/image.jpg
   ---
   ```

3. Provide details about the project in Markdown format.

## Contributing

We welcome contributions! Feel free to submit issues, pull requests, or suggestions to improve the website.

## License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/licenses/MIT) file for details.
