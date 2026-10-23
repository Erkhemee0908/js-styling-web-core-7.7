# Brands Repair Block

Web Core, Lesson 7.7

Responsive "Repair of equipment from various brands" block with a mobile slider and a show/hide grid, built with HTML, CSS and JavaScript.

## Features

* Mobile first responsive layout for 320px, tablet (768px) and desktop (1120px)
* Swiper slider on mobile only, switched on and off on resize with `matchMedia`
* Dynamic pagination dots
* CSS Grid. 3 columns on tablet, 4 columns on desktop
* Shows 6 brands on tablet and 8 on desktop
* "Show all" and "Hide" buttons for the rest
* Expansion is controlled by a single `brands--expanded` modifier class, with `:nth-child` selectors in CSS controlling the visibility
* BEM naming convention, keeping Swiper's required classes alongside
* Brand logos fit a fixed 128×32 box
* Each card is a link with a visible keyboard focus outline

## Built with

* HTML
* CSS
* JavaScript
* [Swiper](https://swiperjs.com/) (via CDN)
* Roboto (Google Fonts)
