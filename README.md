# AARNA's Portfolio Website

A responsive personal portfolio website built with HTML, CSS, and JavaScript that showcases AARNA's skills, projects, and provides contact information.

![Website Preview](https://i.imgur.com/placeholder.jpg)

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Customization](#customization)
- [Dark Mode](#dark-mode)
- [Browser Support](#browser-support)
- [Future Enhancements](#future-enhancements)
- [Credits](#credits)
- [License](#license)

## Features

- **Responsive Design**: Fully responsive layout that works well on all devices
- **Dark/Light Mode**: Toggle between dark and light themes with user preference saved
- **Interactive UI**: Smooth animations and transitions for enhanced user experience
- **Gallery Filter**: Filter gallery items by category (Nature, Travel, Dance)
- **Contact Form**: Functional contact form with validation
- **Skills Visualization**: Animated skill bars to visually represent proficiency levels
- **Social Media Integration**: Links to various social media profiles
- **Mobile Navigation**: Hamburger menu for smaller screens

## Project Structure

```
portfolio-website/
│
├── index.html             # Main HTML file
├── style.css              # CSS styles
├── script.js              # JavaScript functionality
├── README.md              # Project documentation
│
└── images/                # Image directory
    ├── Aarna profile.jfif # Profile picture
    ├── dancepurple.jfif   # Dance category image
    └── travelpurple.jfif  # Travel category image
```

## Technologies Used

- HTML5
- CSS3 (with variables, flexbox, grid, and animations)
- JavaScript (ES6+)
- Font Awesome (for icons)
- Google Fonts (Poppins)

## Setup and Installation

1. **Clone the repository**
   ```
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Set up the images folder**
   - Create an `images` directory
   - Add your profile picture as `Aarna profile.jfif`
   - Add gallery images including `dancepurple.jfif` and `travelpurple.jfif`

3. **Open in a browser**
   - Double-click `index.html` or open it with your preferred browser

## Usage

The website consists of four main sections:

1. **Home**: Introduction with an animated background
2. **About**: Personal information, skills, and social media links
3. **Gallery**: Filterable gallery showcasing various categories of images
4. **Contact**: Contact form and information

## Customization

### Personal Information

Edit the following sections in `index.html`:

- Update name in the title and header
- Modify about text content
- Change skills and percentages
- Update contact information

### Colors

The color scheme can be modified in the `:root` section of `style.css`:

```css
:root {
    --primary-color: #9B4DCA;
    --secondary-color: #7B2CBF;
    --dark-purple: #5A189A;
    --light-purple: #E0AAFF;
    /* Other variables */
}
```

### Social Media Links

Update the social media links in the About section and Footer:

```html
<div class="social-links">
    <a href="your-link-here" class="social-icon" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
    </a>
    <!-- Other social links -->
</div>
```

## Dark Mode

The website features a dark/light mode toggle that:

- Saves user preference in localStorage
- Automatically applies the last used theme on page load
- Changes the icon to reflect the current theme

## Browser Support

The website is compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Future Enhancements

Potential improvements for future versions:

- Add a blog section
- Implement a portfolio/projects section with case studies
- Add animation libraries for more advanced effects
- Implement form submission to an actual backend
- Add testimonials section

## Credits

- [Font Awesome](https://fontawesome.com/) - For icons
- [Google Fonts](https://fonts.google.com/) - For the Poppins font
- [Unsplash](https://unsplash.com/) - For stock images

## License

This project is licensed under the MIT License - see the LICENSE file for details.