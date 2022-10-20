# Typography CSS library  

**Author:**  *Jan Serbus* 

## Demo site  

Look at a **[demo](https://pslib-cz.github.io/2022l4web-css-typographic-library-janserbus/)** site for preview.  

## Implementation 

1. Download parts of Library you are interested in
	-  **[typography.css](https://github.com/pslib-cz/2022l4web-css-typographic-library-janserbus/blob/master/docs/css/typography.css)** - modifies basic HTML tags
	-  **[components.css](https://github.com/pslib-cz/2022l4web-css-typographic-library-janserbus/blob/master/docs/css/components.css)** - adds  custom components
2. Include downloaded file into your project 
3. Use it as you please

## Usage

You can change colors inside `typography.css` folder in the  `:root` selector.

Some created components have additional classes called modifiers `component--modifier` which adds additional design features or behavior to the component

### HTLM Tags

Inside `typography.css` these elements were modified:

- All **&#60;h&#62;** elements
- **&#60;p&#62;** element
- **&#60;li&#62;** element
- **&#60;b&#62;** and **&#60;strong&#62;** elements
- Remade **&#60;code&#62;** element
- Remade **&#60;a&#62;** element

**&#60;a&#62;** tag  can be used with `.dbutton` class to create inlinebutton 

## Components

- Custom `.navbar` component
- Added `.codeblock` component to show full sections of code
- Modular `.card` component
- Responsive `.image` component


### Inline components

Use `<span class="text--modifier">lorem ipsum</span>` to highlight parts of text

- `.text--blue`
- `.text--green`
- `.text--yelow`
- `.text--red`
- `.text--rainbow`

### Codeblock

Use this structure to add codeblock:

        <div class="codeblock">
            <code class="codeblock__content">
    #include <stdio.h>

    int main(void)
    {
    printf("Hello, world!")
    }
            <code>
        <div>

You have to put all your code at the begining of the line to avoid createing whitespace

### NavBar

To use NavBar include `components.css` file into your poject and use this code structure:
     
    <div class="navbar__container">
        <nav class="navbar navbar--fixed">
            <a class="navbar__logo" href="./index.html"></a>
            <ul class="navbar__list navlist">
                <li class="navlist__content"><a class="navlist__link" href="#usage">Usage</a></li>
                <li class="navlist__content"><a class="navlist__link" href="#cards">Cards</a></li>
                <li class="navlist__content"><a class="navlist__link" href="#image">Image</a></li>
                <li class="navlist__content"><a class="navlist__link" href="#navbar">NavBar</a></li>
            </ul>
            <div class="navbar__hamburger hamburger">
                <span class="hamburger__bar"></span>
                <span class="hamburger__bar"></span>
                <span class="hamburger__bar"></span>
            </div>
        </nav>
        <h1 class="navbar__title">Totally Awesome <span class="text--rainbow">CSS</span> Library</h1>
    </div>

You can use one modifier in navbar `.navbar--fixed` to make navbar fixed onthe top of the screen

To change background image put image called `background-img.jpg` into the folder `./img`

### Card component

To use Card follow this structure

    <div class="card__container">
        <div class="card">
            <img class="card__img" src="./img/landscape_1.jfif" alt="landscape">
            <h3 class="card__head">Card's heading</h3>
            <p class="card__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti voluptatem dolor.</p>
            <a class="card__button" href="#">Button</a>
        <div>
    <div>   

- Card modifiers:
    - use class: `card--dark` to anable dark theme
- Button Modifiers
    - use class: `card__button--center` to center button text
    - use class: `card__button--space` make button spaced in the middle of a card

### Responsive image

Use like that:

    <figure class="image__container">    
        <img class="image" src="./img/landscape_1.jfif" alt="image">
        <figcaption class="image__caption">Caption here - very beautiful landscape</figcaption>    
    <figure>





