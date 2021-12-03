---
title:  "Color Scale"
type: play
image: /images/projects/test4-compressor.jpg
date:   ''
thumbnail: /images/thumbnails/Group_90.png
excerpt:
  "The basic premise of the color scale was to be able to create based on a few cutters, fewer colors as possible a full color theme based on a scaling principle that was similar to the ones that were used in material design."
---



The basic premise of the color scale was to be able to create based on a few cutters, fewer colors as possible a full color theme based on a scaling principle that was similar to the ones that were used in material design. Initially, when I worked on this, I tried to understand what material design and Google design had done in the process of making these scales. Unfortunately, I could not see any underlying patterns or maths that would create such a scale. So what I did was I had to alter and change manipulate what was going on with the colored scale, the color scale was initially built in Sass, where I could input in in variables, and it would process out the scale. So once you would put in your main variable, you would only have to call upon the a variable map that would showcase a specific weighted color on the sky, I used waited colors to closely mirror what was happening with Google. And then material design. What I encountered though was I could only set those colors if when they were the midpoint when they so if a color was too dark, most colors that had a higher weight would end up being black. Similarly, if the color was to light, it would end up being the lower weights would be white.

---
 
<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="mLwRWY" data-user="jtregenza" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/jtregenza/pen/mLwRWY">
  Color-Scale Function Redemption</a> by Josh Tregenza (<a href="https://codepen.io/jtregenza">@jtregenza</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

---

So with that in mind, this the color scale is it works when you use it within its constraints, where you can rapidly pull out color themes and entire color scale based on a few choice colors. What needs to be done in order to improve this color scale is for it to be able to understand the colors that you're putting in now, because we're able to diagnose the hue, the saturation and the lightness of any color, the lightness and the saturation could be used to diagnose where it would fit in the scale. So based on specific white ranges, will be able to detect the colors initial weight and then build out from there. So that say you had a color that was within the 700 weighted range, well, it would generate out the 500 and it would generate at all from 100 to 900 effectively, this can then be scaled out to have its complementary colors, its combative colors.
  
And then where I would like to take this color scale project is to align it with accessibility so that the colors that you use within the scale can only be the best contrasting colors. The purpose of this project for me was one of exploration one of the light but as I went through it, I began believing that the more I put into this project, the more I would be able to align it with a more efficient implementation process so that when I was in my design phase, I will be able to to create a fully customized and responsive design rapidly so that as soon as we got to development, I would have all of my styles ready to go all my colors, all my shadows, all my fonts. That's where I want to take this this project where how it will expand upon itself.
