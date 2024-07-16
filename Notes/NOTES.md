# PROJECT NOTES


## Current Issues


- Filtering jokers causes issues with drag and drop. Dropped joker will be a different joker than the one dragged.


## Things to do


- I like the idea of putting the image hover effect over different elements so that - when hovered - they give explanations on what their functions are.
- Get more art assets from balatro
- refine the input elements for each section to accept only certain amounts or types of characters.
- Add a handler for the downloader that will reject an attempt to download a joker with incomplete data.
- media queries


## General Notes


### May 14th:


- Currently, either node or vite are not working correctly. This may have something to do with having to format my drive recently, but it's odd, because I had it working yesterday.
npm run dev won't run, and it wants me to re-install all dependencies. Gonna do some googling on this front. The current solution has been to re-install vite. According to stack overflow, installing vite@4. Something is the answer, but I did that and it threw an error, so then I just figured I'd try vite@latest, and that seemed to fix the problem. Still, I don't know why this happened, and it really bothers me that it did.
- For the center tab, I want to include the following: a space to drag and drop art assets, a space to edit the joker's name, a space to edit the joker's rarity, a space to edit the joker's description, and a space to edit the jokers shop cost. A good additional feature would be the ability to hover over the art asset and see a preview of how the card would look in game.
- So I've managed to get a pretty good start on the center tab and I have a much clearer idea of how I'd like it to look. I think I may transition to two rows for inputs instead of a bunch of columns, and I will probably make each option a unique background to make the tab itself more colorful. I'm trying to model the tab after the shot, so I may add a gif of the shop banner somewhere within. On the technical end, I need to look into how I want props to be passed between the JokerInput for cost, and the cost tab displayed at the top of the joker. I should also look into attaching the tab to the card itself, like in the game.
- New idea: preview. I think that once a user has filled out all the info in the main tab, they should be able to hover over the image card and be provided with a details section, modeled after the one from the game.


### May 15th:


- The first order of business for today is to finish creating the functionality for the center tab. After this, I'll need to style it accordingly, and then add the preview concept I was thinking of yesterday.
- For the cost display, I think it's best to move it to the hover effect. This makes it both easier on me, as I can just pass the props to the hover component when I add it, and better for the user, as it keeps everything tied into the preview effect, making things appear less detached. For now I can leave it where it is, but when it comes time to add the preview portion, reconfigure it.
- I've now built pretty much all the components I want to include. The issue is now the JokerPreview itself. I need to find a way to make the preview behave like the one in game, however, it seems like what I'm looking for isn't in the hover library, and chatGPT doesn't quite understand what I want from it.


### May 16th:


- I've started the day by fixing the JokerPreview. It was actually a lot easier than I thought it would be. I think the next step is to add some logic to how the inputs will function, like limiting the amount of characters in the name and effect inputs and limiting the cost to numbers only and ensuring the dollar sign is a permanent fixture. After that I'll move to fixing some simple style changes before moving on to settling on a layout design for the center tab. The biggest (and honestly, maybe only) style issue I have right now is how the JokerEffect component is rendering the rightmost div. For some reason, the left side div is fine, but the right side is all bunched up and squished. The second issue is how the text in the rarity component is being squished. This should be an easy fix. Another thing I should do is add a stock joker to sit in the builder as the site loads, giving the user a more intuitive sense of how the builder functions. On initial inspection, it should become very clear how the center tab functions. I think the final touch on the center tab, for now, will be the implementation of a (hidden) LUA section. The parameters being passed in the center tab are really easy to translate to Balatro's logic, so it should take minimal effort to convert them, and also give me the chance to figure out exactly how I'm going to start adding LUA to the project.
- add image image_rendering: pixilated; to all art assets. Change cover to scale.


### May 17th:


- In preparation for dedicating the weekend to LUA work, I think the best course of action today is to bug fix & clean current code. Rarity name & effect right side shouldn't be too difficult, I'm pretty sure the number's in the cost bug can just be fixed by passing props for type, and the empty inputs can be tape & popsicle sticks fixed by setting default inputs on load. As for the filtered jokers art glitch, I'll probably have to do some investigating to fix that one.
- setting placeholder text in the input elements does not fix the dnd crash issue. Why is this happening?
- SOLVED: JokerCost was crashing the site because it was trying to read the length property of null. Change the if statement to (JokerCost == null)
- Once bug fixes are done, do a little CSS work to make the main tab presentation look a little nicer, and add some basic stuff to the side panel.


### May 20th:


- Started working on implementing my own jokers. So far, it seems like the best practice is to actively borrow code from pre-existing jokers. In the customer jokers I've looked at so far, it seems like this is the most common way of getting custom card logic to behave properly. There's also now dev tools for Balamod, which helps in testing jokers.
- As of right now, the joker I've made can be found in Balatro, however, I don't think it's working correctly. I've changed the bloodstone logic to trigger on aces instead of hearts, however, when I've played aces with it, it doesn't seem to trigger. I'll take another look at this tomorrow, however, right now, it seems that adding basic joker logic is possible through the center tab of the web app
- Another thing I should look into is newer joker mods. Currently, there's no proper site to organize these (like a nexus), but I should be able to find some within the balamod community mod directory. The main joker I'm comparing my code against uses an older version of arachni's center_hook api, so finding one that uses a later release would probably yield better results in deciphering what everything means in the context of adding stuff to the game. The Balamod documentation also has (minimal) information on native functions added with balamod.


## May 21st:


- Today I'd like to focus 50/50 on the website and my own joker. I think the site mostly needs aesthetic work, but I think going forward I should look into changing the "joker" tab to have custom art assets instead of pre-existing ones, as that seems like it would be more useful than using default art assets. Ultimately, it's purpose would be best served as a space where you can upload your own art assets, however, I don't know how much work that would require on back-end stuff.
- The block system may need to be reimagined. I'm not sure how this would work yet, but I'm going to look into making "even keegan" today, using parts from two jokers.


## May 23rd:


- I've figured out how to actually use the center_hook the way I want to. I don't know what the margin for error is, but the config value is not behaving properly for me. The solution was to avoid using it all together, and instead of setting mult = card.ability.extra.mult or whatever, just set it to mult = 2 or whatever number is needed.
- I've started looking into what I need to make a downloadable lua file, and it seems like there's a simple to use library for that, however, interfacing with the lua in JSX is going to be tricky. I think the best path forward is to wrap the main building components in a div, and set three states for managing the info added in different sections, then pass these states to the best suited gather place for the info needed. 


## May 24th:


- using the joker preview, I'm able to set up all of the naming conventions for the local variables in the lua resource file. Now I just need to start theory crafting block types and how to assemble them without breaking the joker function. 
- Added a few basic blocks, plan is to assemble the two jokers I've previously made using the blocks, then seeing if I can get a full, working lua file from them


## May 25th: 


- Going to start by adding the drag and drop local image thing today, then move on to resizing all of the tabs to 33% each


## May 29th: 


- Rete.js seems extremely complicated, and to make matters worse it's written in TS, I'm gonna do some additional exploration into it later, but as of right now, I think I want to see how far I can get with just react.dnd. As for react DnD, I need to make three containers in my building area: one for context, one for conditions, and one for returns (or rewards, I need to think of a more intuitive name for that section). Each section should essentially be a drop space that creates a new LogicBlock item when a logic block is dropped into it. Once a block is in, another block can be added, and they are then stacked (either vertically or horizontally idk yet) and can be rearranged.
- The first step is to overhaul the ItemTypes to make each logic block unique. This will prevent context blocks from ending up in the return or conditions sections and viceversa


## May 30th:


- Reconfigured the BuildingList component so that it can function for every itemType. Overhauled the blocks to now contain their LUA. I'll now need to start working on a way to access the LUA that's stored inside each building space, as well as pass a method of gathering all of the lua from a single building space to conjoin it together. I'm trying to not put the chicken before the egg here, but the problem is that I cannot identify which is the chicken and which is the egg right now. I can proceed with getting the functionality for conjoining LUA right now, or I can reconfigure DnD to allow for me to add multiple blocks into the same BuildingList. TLDR, I can finish the DnD stuff or I can finish the LUA stuff. I'm THINKING it's probably better to do the LUA stuff first, so I can get an idea of whether or not he current approach works/how it will work. Conjoining logic will be tricky, mostly with thens, ands, & ends, however this will probably give me more insight going ahead into making the DnD functional


## June 1st: 


- Going to reconfigure the logic blocks to have additional types so that some can be generated with inputs that accept numbers. I'm thinking this may eliminate the need for value blocks all together and also make assigning a value to a block much more intuitive.
- I need to move the state updaters for the lua downloader out of the preview. It messes with the way they're called when I use the LUA downloader component. As of right now, I can generate all of the lua needed for "Even Keegan" (test joker repo on my github) with the blocks, and I've reconfigured the blocks to accept values now. I should remove the ValueBlock tab (and value blocks all together), and begin styling and stress testing the assembly area before moving on to adding the mod downloader.


## June 3rd:


- The bug from Saturday was fixed by wrapping the state updates in useEffect. If a component relies on an update effect change to render, it breaks react, so in the future, when sending state updaters super deep, wrap them in useEffect. Always remember that useEffect is for "side effects".
- Now that I can get a complete LUA file made, I need to figure out the whole wrapping/downloading thing.
- I have the downloader set up properly now, but the image is bugged out when downloaded. I think this may have to do with the way I'm accessing it.


## June 4th:


- Going to spend the day organizing/refactoring my repo. Currently, I've divided everything into several folders, however, I now need to make the distinction between what is and is not a component for a specific section. I've also left main and App on the top level, I feel like that kinda makes sense. Going to do some reading and adjust accordingly.


## June 6th:


- Going to start focusing on styling. I should make assets for each section's background. I've gotten half decent at editing the containers from balatro itself, so this shouldn't be a huge feat or anything. So far, I've managed to convert a lot of the original px values to %, which I personally prefer, and will also cause less of a headache when it comes time for media queries. I need to move onto doing this for both side panels.
- I need to style the blocks to be flexible when their titles are larger than they are small. I also need to finish editing the inputs on the result blocks


## June 7th:


- The checklist for today is as follows: Add remaining backgrounds for sections, refactor remaining px measurements in CSS to %, start looking for inspiration for some cool CSS stuff. Would be cool to get the visuals from the menu into the background instead of just the static image. Idk how viable that is, it may be stressful on render times & just super difficult in general. Should also continue to refactor and reorganize. Another Idea is to make things kind of float. Would be cool to have a floaty effect on the building lists, some of the JokerInfo stuff, etc

## June 10th


- Main focus of today was to add the last of the background assets and correct some CSS stuff. Right now I'm feeling pretty good about all of that, however, I'm questioning the layout choices now. I'd think it would be best to take a look at some similarly themed websites (the hand calculator and other more pixel art focused pages) to draw some inspiration from. It's also worth looking into spring to add some of the hover effects from the game.


## June 11th


- Fixed up some of the last remaining CSS conflicts and pixel errors in the assets. 
- Add child classes to logic blocks to clean up css
TASKS FOR THE WEEK:

- Add drop shadows to boxes
- Add hover effect to reduce color shade on hover
- Add Move to the root element on mouse move
- Add titles to the center blocks
- Add remove on the blocks
- CSS Crt Filter on top
- Write down 3-4 you notice (balatro stuff)


## June 13th


- Fixed minor CSS bug involving font.
- Added a screen shake effect, however, I now need to look into adding interpolation to this effect using react spring. The margins of the main three tabs should also be looked into.
- Should look into adding depth to the page. General depth can be added to individual items, but it would be cool to replace the page bg with an animation, and provide shadows to all of the main elements to create a depth effect


## June 14th


- Started by working on the screen shake effect by implementing spring, however, I can't seem to find my way around it quite yet. I have two theories, one is that I'm not using the animated.div component, which is what's preventing the animation error. I think the only way to fix this is to basically convert the app to include all of the stuff from the ScreenShake component and return it in an animated.div. The issue with this is mostly CSS based, and I think after changing a few things I could manage to get everything working as intended. The second theory is that something in the useEffects to set up the initial screen shake is interfering in how useSpring is working. I think I can troubleshoot this mostly with console.logs, but what I'm interested in most is how the page doesn't break at all with the two (potentially) conflicting issues. Anyways, I have an extra theory, which is that I'm dumb, and that the answer is obvious and will come to me after I move on for a bit, so I'm going to commit what I have and come back later.
- Added basic CRT effect to the entire page, however, as it stands now, it's too subtle. Going to look into spacing out the lines a little bit, and add an animation of a slightly bigger line passing through every so often.


## June 17th

 
- SLIDER BUTTON: Added styles to the slider button to make it more aesthetically inline with the rest of the page, however, before I'm 100% finished I should change in white dot to take up 100% height, and start on the far left, exactly alined on the x.
- BLOCKS: Started cleaning up the boxes. Removed extra redundant CSS by adding the bg color and text shadow CSS to the styles property in the block configs, added intuitive value setters for blocks with inputs (getting that useEffect warning, just not sure where to put it this time, will come back to this), added drop shadows to blocks, added styles to logic blocks with inputs, and added the ability to expand if their titles overflow
- LISTS: added titles to lists


## June 18th


### TODO: 
- Add hover/onClick CSS effects to buttons
- add restrictions to joker inputs


- I'm going to have an aneurysm if I keep working on the screenshake component. I need to take a day to make a separate project dedicated to learning react spring. My main suspicion at this point is that there are conflicts between the screen shake effect and the transition effect. I need a break from it right now, moving on to something else while I think about it. Inverted the colors on the tabs, added delete buttons for the joker lists.



## June 20th


- Resized center div to allow for extra margin space, making the presentation less awkward when combined with the scrren hake effect. Fix the image uploader to reject files that aren't the correct size. Added restrictions to the JokerCost component, keeping users from setting a Joker's value to a negative number.


## OUT OF TOWN


## June 28th

- Need to focus on finishing the last two tasks from last week over this weekend. In addition to onClick styles & hover highlights for buttons, I should pad out the downloader section to make it actually look nice. Then I can move on to adding small little functionality tweaks while I focus on learning three.js/drei. I need to add restrictions to the downloader as well. If information isn't correctly filled out, it should prevent downloads.

- Added style changes on click & hover for all current buttons. I should, however, look into what makes a good on click style change, not 100% sure with the ones I have currently.
- Made it so that on hover, buttons are darkened, but on click they light up.


## June 29th: 

- Spent the day working with three.js. I think I have a solid understanding of the basics, so I've decided to move on to react three fiber, however, it's wonky, or at least my understanding of it is. It's supposed to be more "reactful" however, I'm getting the impression that it's a bit more complicated than how I seem to be thinking about it. Going to take another look at it tomorrow once I add some basic restrictions to the downloader tomorrow.


## June 30th: 


- Going to take a stab at finishing off the dowloader today.
- So I've created a basic stopgap when downloading a joker that prevents a user from downloading a joker if it's missing information, however, upon testing this, I noticed that while they clear buttons clear out all of the logic block LUA, they don't remove the logic block LUA from the LUA itself.
- Fixed issue by filling out blank if statement I left for when I added this feature. Good job me, I guess. BuildingSpace will make sure JokerEffect is null so long as one or more blocks is missing from the overall LUA code.
- Going to play a round of Balatro to see what I could do to make the download area more interesting.
- Look into adding a pack to the download section. You can get the pack explosion asset from the game via Balamod.
- ToDo: Style downloader, add more blocks, get three.js bg working, screenshake interpolation.



## July 2nd:


- Messed around some more with react three fiber today in a seperate repo. Still having issues figuring out the skybox. Switch to working on this repo afterwards. Mostly just did asset work and CSS stuff today. Added some flare to the downloader. The next thing I'd like to add is the JokerPreview component to the download area, so you can check your joker before you download it. Another cool thing would be to animate the download button, so when you click it, the voucher tears and "Joker Downloaded!" plays across the screen like it does in Balatro. Idk if that's too much voodoo, but would be a fun thing to look into.
- Next up on my bucket list is making that X button on top of the joker image look nice/rotate with the card itself. Going to have to check the tilt docs to see if I can match the buttons rotation to the parent's. May also be a lot of voodoo.


# Goals for the 2nd-8th:

- Resources: https://voronianski.github.io/react-swipe/demo/?continuous=true https://www.framer.com/motion/gestures/ https://www.framer.com/motion/examples/
- Add shake to rarity icon ✔️
- Debug some more issues with block text size/Overflow ✔️
- Add a basic animation, probably shake, to the voucher claim ✔️
- Clean up text boxes for the joker inputs ✔️
- Add icons to simplify text/blocks ✔️
- 
- Keep messing with three fiber/try out drei*
- Put some thought into mobile design/layout*

## July 3rd:


- Busy day, didn't get much work done. Created an outline of all the goals I should work on this week. Going to start by looking into shake effects with spring tomorrow. Also remembered that I need to fix the interpolation on the screen shake effect, maybe once I try using spring some more with the rarity icon/voucher, I can take another stab at that.


## July 4th:


- Added shake to the rarity icon using spring. The way I have it set up, I can probably add it to the download button as well without much hassle, however, right now it does this irritating thing where it shakes on reset, making it seem like the shake animation is playing twice. Going to look into fixing this later.
- Added the animation to the voucher, however it's still cursed. I think I need to go back to the drawing board on how I'm using spring completely. For a glue and popsicle stick creating, right now it's fine. I can refine it throughout the week, as spring is a blackhole I don't want to have consume me completely today.


## July 5th:


- Created all the assets I'll need to condense block texts. Going to start applying them as I add more blocks. 
- Got the skybox working in three.js, added several planets, set the rotation & tilt of each planet, however, I noticed that doing this was a lot more simple than it was for the Earth, so it's possible that I'm using too much voodoo in that scenario. Also manged to get camera controls using drei, very simple for what I'm trying to do. Changed the point of light to the sun.


## July 8th:


- Icons to blocks, clean up CSS, debug spring shake, think about mobile.
- I should add inputs to the condition blocks to allow for selecting cards.
- The main CSS fixes should be to the building lists, joker inputs, and then the blocks themselves. 
- So I have a component now for title that changes h2 to h4 on overflow, however it's pretty jank. I'm still not 100% sure how to handle the title overflow issue, because things tend to get pretty squished regardless of h element size.
- Changed the shifting h elements to just have the text shrink on screen size change. This also feels jank, but I'll look into finding ways to make it feel less jank with spring or something.


# Goals for the 8th-15th:


- Fix double Shake ✔️
- Fix setState in render problems ✔️
- Basic animation, probably shake, to the voucher claim ✔️
- Screen resize issues

## July 10th:


- Input CSS: Removed the images used for the inputs, using CSS to mimic the styles from the game instead. Removed the ability to resize the textarea element for the joker's description.
- Bad State: Fixed the bad state in building space. Just remember that when you're encountering this issue, check to see if you messing with state from another component outside of a useEffect.
- Double shake: Fixed double shake by using async functions instead of what I had. Still nowhere near 100% with useSpring, but I'm seeing more and more how good it is, it just has a lot of properties I need a better understanding of. I'm pretty sure I can use it to mimic the card opening from balatro on the voucher. Going to try that tomorrow.


## July 11th:


- Going to keep working with useSpring today. Now that I understand it a little more, I should look into getting a more desirable effect for the lua downloader
- LuaDownloader: Added a rotation effect with useSpring. It seems that async functions are the best method for getting use spring to work. I'm curious to see what more I can add. Stacking effects in useSpring would be cool, however, right now I'm happy with how the voucher is looking. I should think of some ideas on what other elements I could add effects to.
- Made a bunch of minor CSS tweaks, mostly involving the ability to highlight text. 

## July 12th: 


- Mostly focused on learning more shader code today. Going to prepare to take a crack at converting that shadertoy balatro background to three.js on Monday.
  

## July 15th:


- Started the day by trying to fix a bad state call in JokerRarity, however, this seems more difficult than I anticipated. I've take several steps to try and eliminate the bad state call, however, nothing seems to be working as of right now. Going to take a look at some shader code while I think about how I'm going to go about fixing this.
- After several hours of bashing my head off of three.js/fiber documentation, and chatGPT, I've finalyl managed to create the animated background effect. There are some current issues. The main one is the iResolution issue. When resizing the page, the background doesn't mutate with it. It needs to be refreshed before it adjusts to the same size as the current screen size. The second issue is mostly based on my screen size. I think the red outnumbers the blue a little too much.
- Added favicon and proper page title to the page.


# Goals for 15th-22nd:


- Add suspense to canvas, full screen loader
- Add image cropper/resizer
- Fix Background load
	- Causing by balatroMaterial.current being null and conditionally rendering the primitive
- Fix Shader resize reso
	- Bugs probably caused from ShaderMaterial getting created in render loop
	- Look into examples with material creation moved outside the loop
- Joker Rarity State Fix
	- Problem occurs in setRarity since another state is also set in it as well
- Think on Result blocks color
- Hover modal on controls
	- EX. Hover on condition blocks, read explaination
- Start Thinking about Start + Info Screen


## July 16th:


- Add Image cropper
- Fix canvas issues