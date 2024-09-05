# ![The Buffoon Builder](https://raw.githubusercontent.com/JWH709/Buffoon-Builder/main/src/assets/logo.png)  Buffoon Builder 

- [  Buffoon Builder](#--buffoon-builder)
  - [Overview](#overview)
    - [What is Buffoon Builder?](#what-is-buffoon-builder)
    - [How to use Buffoon Builder](#how-to-use-buffoon-builder)
    - [How Buffoon Builder works](#how-buffoon-builder-works)
  - [Notable Features](#notable-features)
    - [Desktop](#desktop)
    - [Mobile](#mobile)
    - [Used Libraries and Technology](#used-libraries-and-technology)
  - [Notes](#notes)
    - [Planned Features](#planned-features)
    - [Known Bugs \& Issues](#known-bugs--issues)

## Overview

### What is Buffoon Builder?

Buffoon Builder is a React-based web app that uses a modding tool called [Balamod](https://github.com/balamod/balamod) to create custom Jokers for Balatro. To use Buffoon Builder, you must have a valid copy of Balatro for PC and a working version of UwUDev's [Balamod mod loader](https://github.com/balamod/balamod).

### How to use Buffoon Builder

Buffoon Builder requires several elements from the user. A Joker cannot be downloaded until all the required fields have been filled out. The building tab requires the user to drag and drop logic blocks into their corresponding tabs to create the logic behind the Joker. The info tab reflects all the information that will be visually displayed to a user. Here, a user will fill out all the information about their Joker, such as name and description. An image for the Joker can be added here as well.

### How Buffoon Builder works

Buffoon Builder was built in React to be compatible with Balamod. Due to Balatro being made with LUA, its source files are very easy to access, and therefore, it isn't too difficult to deconstruct the logic used for the game's Jokers. To create the logic blocks used by the app, code is taken from a pre-existing Joker and reduced down to represent three factors:

- **Context:** `if card.ability.name == 'Example' and context.individual and context.cardarea == G.play then...`
- **Condition:** `if context.example_condition:get_example() == 1 then`
- **Result:** `return { example_mult = 2, card = card }`

The three required values are then combined in a format that satisfies the required fields for the joker API provided by Balamod to add a Joker to the game:
```lua
local function jokerEffect(card, context)
    if card.ability.name == 'Example' and context.individual and context.cardarea == G.play then
        if context.example_condition:get_example() then
            return {
                example_value = 2,
                card = card
            }
        end
    end
end
```
The same process is repeated for information about the card such as name, image, cost, description, etc. Once a user has finished adding all the details needed for a Joker, they can then download a `.zip` file that contains all the files needed to add their Joker to the game. The user then needs to find the Balamod folder on their PC and drag and drop the folder found inside the zip there.

## Notable Features

### Desktop

On desktop, Buffoon Builder has drag-and-drop features, several animations created using the React Spring library, tilt on certain elements, a screenshake effect that mimics the one found in the game, a CRT filter that can be toggled with a switch at the top of the screen, and a shader that mimics the background effect from the game.

### Mobile

While Buffoon Builder is primarily made for desktop usage, it can also be accessed on mobile. On mobile, the drag-and-drop features have been removed, as well as the screenshake, to make the experience more compatible with mobile. To add blocks to a logic section, you can now tap them. For ease of access, a swiper has been added to swap between logic tabs. The info and building areas have been separated to keep the screen compact and clear.

### Used Libraries and Technology

Buffoon Builder was created with Vite + React, using JavaScript. It makes use of the following libraries: react-tilt, react-spring, @react-three/drei, @react-three/fiber, three.js, react-bootstrap, react-dnd, react-image-crop, SwiperJS, gh-pages.

## Notes

### Planned Features

This is an early proof of concept. After this project has become stable, I plan to add the following:

- **More Blocks**: Right now, blocks have been limited to the bare basics. I plan to start adding more blocks as I discover which blocks are/are not compatible with each other.
- **Stacked Blocks**: The ability to stack two blocks together, either giving you multiple contexts, conditions, or results.
- **Image Cropper Overhaul**: Changes to the image cropper that will allow transparency, better cropping parameters, and possibly the ability to create your own Joker image in-app.
- **Block Hover Info**: The ability to hover on a block to see exactly what it does, plus the code involved in the block.

### Known Bugs & Issues

As of right now, I've dealt with all bugs that I've noticed; however, that doesn't mean there are no bugs. If you discover a bug while using the app, please feel free to let me know!