# PROJECT NOTES


## May 14th, 2024

### Goals

Today I plan on making a new section for adding details that do not strictly pretain to Joker logic. It should be placed between the builder section and the side panel.
If I make good progress on this, I'm then going to move on to adding aditional styles to the page, cleaning it up, and making it look more presentable.

### General Notes

- Currently, either node or vite is not working correctly. This may have something to do with having to format my drive recently, but it's odd, because I had it working yesterday.
npm run dev won't run, and it wants me to re-install all dependencies. Gonna do some googling on this front. The current solution has been to re-install vite. According to stack overflow, installing vite@4. something is the answer, but I did that and it threw an error, so then I just figured I'd try vite@latest, and that seemed to fix the problem. Still, I don't know why this happed, and it really bothers me that it did.
- For the center tab, I want to include the following: a space to drag and drop art assets, a space to edit the joker's name, a space to edit the joker's rarity, a space to edit the joker's discription, and a space to edit the jokers shop cost. A good additional feature would be the ability to hover over the art asset and see a preview of how the card would look in game.
- So I've managed to get a pretty good start on the center tab and I have a much clearer idea of how I'd like it to look. I'm think I may transition to two rows for inputs instead of a bunch of columns, and I will probably give make each option a unique background to make the tab itself more colorful. I'm trying to model the tab after the shot, so I may add a gif of the shop banner somewhere within. On the technical end, I need to look into how I want props to be passed between the JokerInput for cost, and the cost tab displayed at the top of the joker. I should also look into attaching the tab to the card itself, like in the game.
- New idea: preview. I think that once a user has filled out all the info in the main tab, they should be able to hover over the image card and be provided with a details section, modeled after the one from the game. 
