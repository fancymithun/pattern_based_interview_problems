1. ### What is the Box model in CSS? Which CSS properties are a part of it?

A rectangle box is wrapped around every HTML element. The box model is used to determine the height and width of the rectangular box. The CSS Box consists of Width and height (or in the absence of that, default values and the content inside), padding, borders, margin.

Content:  Actual Content of the box where the text or image is placed.
Padding: Area surrounding the content (Space between the border and content).
Border: Area surrounding the padding.
Margin: Area surrounding the border.

2. ### What are the advantages of using CSS?

The main advantages of CSS are given below:

Separation of content from presentation - CSS provides a way to present the same content in multiple presentation formats in mobile or desktop or laptop.
Easy to maintain - CSS, built effectively can be used to change the look and feel complete by making small changes. To make a global change, simply change the style, and all elements in all the web pages will be updated automatically.
Bandwidth - Used effectively, the style sheets will be stored in the browser cache and they can be used on multiple pages, without having to download again

3. ### What are the limitations of CSS?

Disadvantages of CSS are given below:

Browser Compatibility: Some style selectors are supported and some are not. We have to determine which style is supported or not using the @support selector).
Cross Browser issue: Some selectors behave differently in a different browser).

4. ### How to include CSS in the webpage?

There are different ways to include a CSS in a webpage, 

1 - External Style Sheet: An external file linked to your HTML document: Using link tag, we can link the style sheet to the HTML page.

<link rel="stylesheet" type="text/css" href="mystyles.css" />

2 - Embed CSS with a style tag: A set of CSS styles included within your HTML page.

<style type="text/css">

/*Add style rules here*/
</style>

Add your CSS rules between the opening and closing style tags and write your CSS exactly the same way as you do in stand-alone stylesheet files.

3 - Add inline styles to HTML elements(CSS rules applied directly within an HTML tag.): Style can be added directly to the HTML element using a style tag.

<h2 style="color:red;background:black">Inline Style</h2>

4 - Import a stylesheet file (An external file imported into another CSS file): Another way to add CSS is by using the @import rule. This is to add a new CSS file within CSS itself.

```css
@import "path/to/style.css";

```

5. ### What are the different types of Selectors in CSS?

Universal Selector: The universal selector works like a wildcard character, selecting all elements on a page. In the given example, the provided styles will get applied to all the elements on the page.
```css

* {
  color: "green";
  font-size: 20px;
  line-height: 25px;
}

```
Element Type Selector: This selector matches one or more HTML elements of the same name. In the given example, the provided styles will get applied to all the ul elements on the page.

```css
ul {
  line-style: none;
  border: solid 1px #ccc;
}

```

ID Selector: This selector matches any HTML element that has an ID attribute with the same value as that of the selector. In the given example, the provided styles will get applied to all the elements having ID as a container on the page.

```css

#container {
  width: 960px;
  margin: 0 auto;
}

<div id="container"></div>

```

Class Selector: The class selector also matches all elements on the page that have their class attribute set to the same value as the class.  In the given example, the provided styles will get applied to all the elements having ID as the box on the page.

```css
.box {
  padding: 10px;
  margin: 10px;
  width: 240px;
}

<div class="box"></div>

```

Descendant Combinator: The descendant selector or, more accurately, the descendant combinator lets you combine two or more selectors so you can be more specific in your selection method.

```css
#container .box {
	float: left;
	padding-bottom: 15px;
} 

<div id="container">
	<div class="box"></div>
	
	<div class="box-2"></div>
</div>

<div class=”box”></div>

```

Child Combinator: A selector that uses the child combinator is similar to a selector that uses a descendant combinator, except it only targets immediate child elements.

```css
#container> .box {
	float: left;
	padding-bottom: 15px;
}

<div id="container">
	<div class="box"></div>
	
	<div>
		<div class="box"></div>
	</div>
</div>

```

General Sibling Combinator: A selector that uses a general sibling combinator to match elements based on sibling relationships. The selected elements are beside each other in the HTML.

```css
h2 ~ p {
	margin-bottom: 20px;
}

<h2>Title</h2>
<p>Paragraph example.</p>
<p>Paragraph example.</p>
<p>Paragraph example.</p>
<div class=”box”>
	<p>Paragraph example.</p>
</div>

```

Attribute Selector: The attribute selector targets elements based on the presence and/or value of HTML attributes, and is declared using square brackets.

```css

input [type=”text”] {
	background-color: #444;
	width: 200px;
}

<input type="text">

```

6. ### What is a CSS Preprocessor? What are Sass, Less, and Stylus? Why do people use them?

A CSS Preprocessor is a tool used to extend the basic functionality of default vanilla CSS through its own scripting language. It helps us to use complex logical syntax like – variables, functions, mixins, code nesting, and inheritance to name a few, supercharging your vanilla CSS.

SASS: Sass is the acronym for “Syntactically Awesome Style Sheets”. SASS can be written in two different syntaxes using SASS or SCSS

**SASS vs SCSS**

SASS is based on indentation and SCSS(Sassy CSS) is not.

**SASS Syntax**

```css

$font-color: #fff
$bg-color: #00f

#box
  color: $font-color
  background: $bg-color  

```

**scss synatx**

```css

$font-color: #fff;
$bg-color: #00f;

#box{
    color: $font-color;
    background: $bg-color;
}

```

Stylus: Stylus offers a great deal of flexibility in writing syntax, supports native CSS as well as allows omission of brackets, colons, and semicolons. It doesn’t use @ or $ for defining variables.

```css

font-color= #fff;
bg-color= #00f;

#box{
    color:font-color;
    background:bg-color;
}

/* OR */

font-color= #fff;
bg-color= #00f;

#box
    color: font-color;
    background: bg-color;

```

7. ### What is VH/VW (viewport height/ viewport width) in CSS?

It’s a CSS unit used to measure the height and width in percentage with respect to the viewport. It is used mainly in responsive design techniques. The measure VH is equal to 1/100 of the height of the viewport. If the height of the browser is 1000px, 1vh is equal to 10px. Similarly, if the width is 1000px, then 1 vw is equal to 10px.

8. ### Difference between reset vs normalize CSS?. How do they differ?

reset.css and normalize.css are two different approaches to handling CSS styling and element default styles in web development. Both are used to provide a consistent starting point for web page styling and to overcome the differences in default styles applied by various browsers.


Reset CSS removes all default styles and starts from scratch, giving the developer complete control but requiring more explicit styling for common elements.
**Reset  CSS:**
```css
/* Example reset CSS */
body, p, h1, h2, h3, ul, li {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
}

```
Normalize CSS keeps some default styles but normalizes them across browsers, leading to a more consistent appearance while still preserving some useful defaults. It is generally a lighter and more balanced approach.
**Normalize CSS:**

```css
/* Example normalize CSS */
body {
  margin: 0;
  font-family: sans-serif;
  line-height: 1.15;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* ... more styles for other elements ... */

```

9. ### What is the difference between inline, inline-block, and block?

Block Element: The block elements always start on a new line. They will also take space for an entire row or width. List of block elements are <div>, <p>.

Inline Elements: Inline elements don't start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are <a>, <span> , <strong>, and <img> tags. 

Inline Block Elements: Inline-block elements are similar to inline elements, except they can have padding and margins and set height and width values.

10. ### Is it important to test the webpage in different browsers?

It’s most important to test a website in different browsers when you’re first designing it, or when making major changes. However, it’s also important to repeat these tests periodically, since browsers go through a lot of updates and changes.

11. ### What are Pseudo elements and Pseudo classes?

Pseudo-elements allows us to create items that do not normally exist in the document tree, for example ::after.

::before
::after
::first-letter
::first-line
::selection

```css
p::first-line{
    color: #ff0000;
    font-variant: small-caps;
}

```
Pseudo-classes select regular elements but under certain conditions like when the user is hovering over the link.

:link
:visited
:hover
:active
:focus

```css

/* mouse over link */
a:hover {
	color: #FFOOFF;
}
```

12. ### How do you specify units in the CSS?. What are the different ways to do it?

There are different ways to specify units in CSS like px, em, pt, percentage (%). px(Pixel) gives fine-grained control and maintains alignment because 1 px or multiple of 1 px is guaranteed to look sharp. px is not cascade. em maintains relative size. you can have responsive fonts. Em, will cascade 1em is equal to the current font-size of the element or the browser default. If u sent font-size to 16px then 1em = 16px. The common practice is to set default body font-size to 62.5% (equal to 10px).

pt(point) are traditionally used in print. 1pt = 1/72 inch and it is a fixed-size unit.

%(percentage) sets font-size relative to the font size of the body. Hence, you have to set the font-size of the body to a reasonable size

13. ### Does margin-top or margin-bottom have an effect on inline elements?
No, it doesn’t affect the inline elements. Inline elements flow with the contents of the page.

14. ### What property is used for changing the font face?

We can use the font-family property for achieving this. The font-family property is used for specifying what font needs to be applied on the targetted DOM element. It can hold several font names as part of “fallback” mechanism in case the browser does not support the fonts. For example, we can use:

```css
p {
  font-family: "Times New Roman", Times, serif;
}

```

In the above piece of code, we are applying font-family property to the paragraph element.

It tells the browser to look for “Times New Roman” font and apply it.
If the “Times New Roman” font is not installed or supported, then it asks the browser to use Times font.
If both “Times New Roman” and Times are not supported, then it asks the browser to use any supported generic font belonging to serif.
If you do not want the font-face of the paragraph element to be Times New Roman/Times/serif font, and you want to use the Arial/Helvetica/sans-serif font, then we can just update the CSS property of paragraph element as:

```css
p {
  font-family: Arial, Helvetica, sans-serif;
}

```

15. ### What are the differences between adaptive design and responsive design?

Aspect	            Adaptive Design	                                    Responsive Design
Layouts	            Multiple fixed layouts for specific devices	        A single flexible layout that adapts to any screen size
Server/Client Side	Layout selection on the server side	                Layout adaptation on the client side
Flexibility	        Less flexible, fixed breakpoints	                More flexible, fluid layout
Future-proof	    May require updating for new devices	            Works well with future devices

16. ### What is a z-index, how does it function?

z-index is used for specifying the vertical stacking of the overlapping elements that occur at the time of its positioning. It specifies the vertical stack order of the elements positioned that helps to define how the display of elements should happen in cases of overlapping.

The default value of this property is 0 and can be either positive or negative. Apart from 0, the values of the z-index can be:

Auto: The stack order will be set equal to the parent.
Number: The number can be positive or negative. It defines the stack order.
Initial: The default value of 0 is set to the property.
Inherit: The properties are inherited from the parent.
The elements having a lesser value of z-index is stacked lower than the ones with a higher z-index.

17. ### Why should we use float property in CSS?

The float property is used for positioning the HTML elements horizontally either towards the left or right of the container. For instance,

Here, the element to which the class is applied ensures that the element is positioned on the right of the container. If you specify the value of float as left, then the element will be placed on the left side of the container.

```css
float-demo {
     float: right; 
}

```

18. ### How is opacity specified in CSS3?

Opacity refers to the degree to which the content is transparent or opaque. We can use the property named opacity which takes the values ranging from 0 to 1. 0 specifies that the element is completely transparent where 1 means that the element is completely opaque. We can use the opacity property as follows:

```css
div { 
    opacity: 0.6;
}

```

19. ### How is border-box different from content-box?

`border-box` and `content-box` are two different values for the CSS `box-sizing` property, which determines how the size of an element is calculated and how the content, padding, and border of the element are affected.

1. **content-box**:
   - `box-sizing: content-box` is the default value for the `box-sizing` property.
   - In the `content-box` model, the width and height of an element are calculated based only on the content's width and height, excluding the padding and border.
   - If you set a specific width and height for an element with `content-box`, the actual size of the element will be larger, as the padding and border are added to the specified width and height.

   ```css
   /* Example using content-box */
   div {
     box-sizing: content-box;
     width: 200px;
     height: 100px;
     padding: 20px;
     border: 2px solid black;
   }
   ```

   In this example, the total width of the element would be `200px + 20px(padding-left) + 20px(padding-right) + 2px(border-left) + 2px(border-right) = 244px`. Similarly, the total height would be `100px + 20px(padding-top) + 20px(padding-bottom) + 2px(border-top) + 2px(border-bottom) = 144px`.

2. **border-box**:
   - `box-sizing: border-box` is an alternative value for the `box-sizing` property.
   - In the `border-box` model, the width and height of an element include the content's width and height, as well as the padding and border. The padding and border are included within the specified width and height, and they don't add to the overall size of the element.
   - This makes `border-box` a more intuitive and predictable model, especially when you want to set fixed dimensions for elements.

   ```css
   /* Example using border-box */
   div {
     box-sizing: border-box;
     width: 200px;
     height: 100px;
     padding: 20px;
     border: 2px solid black;
   }
   ```

   In this example, the total width of the element would be `200px`, including padding and border. Similarly, the total height would be `100px`, including padding and border.

In summary, the main difference between `border-box` and `content-box` is how they calculate the size of an element:

- `content-box` calculates the width and height based on the content only and adds padding and border on top of the specified width and height.
- `border-box` calculates the width and height to include the content, padding, and border, so the specified width and height apply to the overall size of the element.

Which one to use depends on your specific layout requirements and how you want to manage the sizing of elements. Some developers prefer `border-box` as it simplifies the box model and avoids surprises when setting dimensions for elements with padding and border.

20. ### How are the CSS selectors matched against the elements by the browser?

The order of matching selectors goes from right to left of the selector expression. The elements in the DOM are filtered by browsers based on the key selectors and are then traversed up to the parent elements for determining the matches. The speed of determining the elements depends on the length of the chain of selectors. Consider an example:

```css
p span{ 
    color: black;
}

```

Here, the browser first finds all span elements in the DOM and then it traverses to each of its parent elements to check if they are the paragraph p elements.

Once the browser finds all matching span tags having paragraph elements as parent and applies the color of black to the content, the matching process is stopped.

21. ### What do the following CSS selectors mean? 
**div, p**
**div p**
**div ~ p**
**div + p**
**div > p**

div, p: This selector implies selecting all div elements and all p elements.
Consider an example below:

```html

   <h1>Heading 1</h1>
   <div>
       Division 1
       <p> paragraph 1</p> <!-- Will be selected -->
   </div>
   <p> paragraph 2</p> 
   <p> paragraph 3</p> 
   <div>
       Division 2
   </div>
   <span> Span 1 </span>

```
Here, all the div elements and the p elements would be selected by the browser irrespective of their parents or where they are placed. The remaining tags like h1 and span are ignored.

div p : This selector tells to select all p elements that are inside div elements. Consider an example below:

```html
  <h1>Heading 1</h1>
<div>
    Division 1
    <p> paragraph 1</p> <!-- Will be selected -->
    <div>
        <p> Inner Div Paragraph </p> <!-- Will be selected -->
    </div>
</div>
<p> paragraph 2</p>
<p> paragraph 3</p>
<div>
    Division 2
</div>
<span> Span 1 </span>

```

Here, <p> paragraph 1</p> and <p> Inner Div Paragraph </p> would be selected by the browser and the properties are applied. The rest of the paragraph tags are not selected.

div ~ p : This selector tells to select all p elements that have div elements preceeded anywhere. Consider an example,

```html
<h1>Heading 1</h1>
<div>
   Division 1
   <p> paragraph 1</p>
</div>
<p> paragraph 2</p> <!-- Will be selected -->
<p> paragraph 3</p> <!-- Will be selected -->
<div>
   Division 2
</div>
<span> Span 1 </span>

```

Here, paragraph 2 and paragraph 3 elements would be selected as marked in the code above.

div + p : This selector says to select all p elements placed immediately after the div element. Consider an example in this case:

```html
    <h1>Heading 1</h1>
   <div>
       Division 1
       <p> paragraph 1</p>
   </div>
   <p> paragraph 2</p> <!-- Will be selected -->
   <p> paragraph 3</p> 
   <div>
       Division 2
   </div>
   <span> Span 1 </span>

```

div > p : This selector says to select all p elements which has div as an immediate parent. In the same example below:

```html
    <h1>Heading 1</h1>
   <div>
       Division 1
       <p> paragraph 1</p> <!-- Will be selected -->
   </div>
   <p> paragraph 2</p> 
   <p> paragraph 3</p> 
   <div>
       Division 2
   </div>
   <span> Span 1 </span>

```

Only <p> paragraph 1</p> will be selected in this case because it has immediate div as the parent.

22. ### What are the properties of flexbox?

Flexbox stands for flexible box and it was introduced around 2017 in CSS with the purpose of providing an efficient way to handle layouts, align elements within them and distribute spaces amongst the items in dynamic/responsive conditions. It provides an enhanced ability to alter the dimensions of the items and make use of the available space in the container efficiently. In order to achieve this, CSS3 provides some properties.

flex-direction: This property helps in defining the direction the container should stack the items targetted for flex. The values of this property can be
row: Stacks items horizontally from left to right in the flex container.
column: Stacks items vertically from top to bottom in the flex container.
row-reverse: Stacks items horizontally from right to left in the flex container.
column-reverse: Stacks items vertically from bottom to top in the flex container.

flex-wrap: This property specifies of the flex items should be wrapped or not. Possible values are:
wrap: The flex items would be wrapped if needed.
nowrap: This is the default value that says the items won’t be wrapped.
wrap-reverse: This specifies that the items will be wrapped if needed but in reverse order.

justify-content: Used for aligning the flex items. Possible values are:
center: It means that all the flex items are present at the center of the container.
flex-start: This value states that the items are aligned at the start of the container. This is the default value.
flex-end: This value ensures the items are aligned at the end of the container.
space-around: This value displays the items having space between, before, around the items.
space-between: This value displays items with spaces between the lines.

align-items: This is used for aligning flex items.

align-content: This is used for aligning the flex lines.

flex-flow: This property is used for setting both flex-direction and flex-wrap properties in one statement.

23. ### What is cascading in CSS?

“Cascading” refers to the process of going through the style declarations and defining weight or importance to the styling rules that help the browser to select what rules have to be applied in times of conflict. The conflict here refers to multiple rules that are applicable to a particular HTML element. In such cases, we need to let the browser know what style needs to be applied to the element. This is done by cascading down the list of style declarations elements.

For example, if we have the below style:
```css
p{
    color:white;
}

```
```css
p{
    color:white !important;
}

```

!important ensures that the property has the maximum weight in presence of other conflicting properties.

24. ### How will you fix browser-specific styling issues?

Different ways to fix browser-specific issues.

We can write browser-specific styles separately in different sheets and load that only when the specific browser is used. This makes use of the server-side rendering technique.
We can use auto-prefix for automatically adding vendor prefixes in the code.
We can also use normalize.css or reset CSS techniques.
There are some ways for avoiding browser compatibility issues too. They are as follows:

Validate HTML and CSS: We know that the code will be read, interpreted and handled differently by different browsers. We need to validate our HTML and CSS files for the missing closing tags, or missing semicolons in the syntaxes because there are chances that the old browsers will throw errors while rendering the code. We can avoid those errors by:
Maintaining well-aligned code that helps in easy readability.
Inserting comments at necessary places.
Make use of validation tools like Jigsaw CSS validator, W3C HTML Validators to identify syntax issues in the code.
Maintain Cross-Browser Compatibility in the Layouts: Cross-Browser compatibility is a must while developing web applications. We expect our application to be responsive across all devices, browsers and platforms. Some of the effects of layout incompatibilities are unresponsiveness of the layouts in mobile devices, the difference in layout rendering between modern and old browsers, etc. These incompatibilities can be avoided by using:
CSS Multi-Column layouts - For maintaining proper layouts w.r.t columns and containers.
HTML viewport metatag – For ensuring content is properly spanned across mobile devices.
CSS Flexbox and Grids - To layout child elements depending on the content and available space.
CSS resets stylesheets - For reducing browser inconsistencies in default line heights, font sizes, margins etc.
Check JavaScript Library issues: Ensure the libraries are used judiciously and the ones used are supported by the browsers.
Check DOCTYPE tag keyword: The DOCTYPE keyword is meant for defining rules of what needs to be used in the code. Older browser versions check for DOCTYPE tag at the beginning and if not found, the application rendering won't be proper.
Test on real devices: Although applications can be tested on virtual environments, it would be more beneficial if the testing is carried out on real devices and platforms. We can use tools like Testsigma for this purpose that enables us to test in real devices parallelly.

25. ### Why do we need to use clear property along with floats in CSS?

The clear property along with floats is used for specifying which side of floating elements is not supposed to float. An element having clear property ensures that the element does not move up adjacent to the float. But the element will be moved down past the float.

Let us understand this with the help of an example. We know that the floated objects do not add to the height of the objects where they reside. Consider we have a div element with class “floated_div” within another div element with id “main_div”.

```html

<html>
    <head>
    <style>
        #main_div {
             width: 400px;
             margin: 10px auto;
             border: 4px solid #cccccc;
             padding: 5px;
        }

        .floated_div {
             float: left;
             width: 50px;
             height: 50px;
             border: 2px solid #990000;
             margin: 10px;
        }
    </style>
    </head>
    <body>
        <div id="main_div">
             <p>Clear Float Demo</p>
             <div class="floated_div"></div>
             <div class="floated_div"></div>
             <div class="floated_div"></div>
             <div class="floated_div"></div>
             <div class="floated_div"></div>
        </div>
    </body>
</html>

```

The result of this code would be as shown below. We see that the squares that are expected to be within dev are not within the main parent div. How do we fix this?


We can do it just by adding <div style="clear:both"></div> line at the end of the last floated element so that the floated elements are fit in properly within the main div container.

```html

<html>
    <head>
    <style>
        #main_div {
             width: 400px;
             margin: 10px auto;
             border: 4px solid #cccccc;
             padding: 5px;
        }

        .floated_div {
             float: left;
             width: 50px;
             height: 50px;
             border: 2px solid #990000;
             margin: 10px;
        }
    </style>
    </head>
    <body>
        <div id="main_div">
             <p>Clear Float Demo</p>
            
             <div class="floated_div"></div>
             <div class="floated_div"></div>
             <div class="floated_div"></div>
             <div class="floated_div"></div>
             <div class="floated_div"></div>
             <div style="clear:both"></div>    <!-- Adding this fixed the issue -->
        </div>
    </body>
</html>

```

26. ### What do you understand by tweening in CSS?

In CSS, tweening (short for "in-betweening") refers to the process of smoothly animating an element's property from one state to another state over a specified duration. It allows you to create smooth and fluid animations between different CSS styles without the need for JavaScript or complex scripting.

CSS tweening is typically achieved using CSS transitions or CSS animations, which are CSS properties and values that control the animation behavior.

1. **CSS Transitions**:
   - CSS transitions allow you to animate a property change from its initial state to a final state over a specified duration.
   - You define the transition using the `transition` property, specifying the property you want to animate, the duration of the animation, and the easing function (how the animation accelerates or decelerates over time).

   ```css
   /* Example of CSS transition */
   .box {
     width: 100px;
     height: 100px;
     background-color: blue;
     transition: width 1s ease;
   }

   .box:hover {
     width: 200px; /* Width will smoothly transition from 100px to 200px on hover */
   }
   ```

2. **CSS Animations**:
   - CSS animations provide more control and flexibility over the animation process.
   - You define animations using the `@keyframes` rule to specify the keyframes or intermediate states of the animation.
   - You then apply the animation to an element using the `animation` property, specifying the name of the animation, the duration, the timing function, and any other animation-related properties.

   ```css
   /* Example of CSS animation */
   @keyframes slide-in {
     0% {
       transform: translateX(-100%);
     }
     100% {
       transform: translateX(0);
     }
   }

   .box {
     animation: slide-in 1s ease;
   }
   ```

Both CSS transitions and animations provide a way to smoothly transition or animate properties, such as size, position, opacity, color, and more. They are widely used to add visual enhancements to web pages and create engaging user experiences. Tweening with CSS is a lightweight and performant approach compared to using JavaScript for animations, making it a popular choice for simple animations and interactions. However, for more complex and interactive animations, JavaScript and libraries like GSAP or Framer Motion may be more suitable.