# PROJECT NOTES


## Current Issues


- If the inputs are empty when a piece of art is dropped in the main tab, the site will crash
- Filtering jokers causes issues with drag and drop. Dropped joker will be a different joker than the one dragged.


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


- In preparation for dedicating to weekend to LUA work, I think the best course of action today is to bug fix & clean current code. Rarity name & effect right side shouldn't be too difficult, I'm pretty sure the number's in the cost bug can just be fixed by passing props for type, and the empty inputs can be tape & popsicle sticks fixed by setting default inputs on load. As for the filtered jokers art glitch, I'll probably have to do some investigating to fix that one.
- Once bug fixes are done, do a little CSS work to make the main tab presentation look a little nicer, and add some basic stuff to the side panel.