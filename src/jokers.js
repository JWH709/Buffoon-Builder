const jokers = [
    {
      Nr: 1,
      Joker: "Joker",
      Cost: "$2",
      Rarity: "Common",
      UnlockRequirement: "Available before the start - this cheeky chappy shows you the tutorial!",
      Effect: "+4 Mult"
    },
    {
      Nr: 2,
      Joker: "Greedy Joker",
      Cost: "$5",
      Rarity: "Common",
      UnlockRequirement: "Available from start",
      Effect: "Played cards with Diamond suit icon Diamond suit give +4 Mult when scored"
    },
    {
      Nr: 3,
      Joker: "Lusty Joker",
      Cost: "$5",
      Rarity: "Common",
      UnlockRequirement: "Available from start",
      Effect: "Played cards with Heart suit icon Heart suit give +4 Mult when scored"
    },
    {
      Nr: 4,
      Joker: "Wrathful Joker",
      Cost: "$5",
      Rarity: "Common",
      UnlockRequirement: "Available from start",
      Effect: "Played cards with Spade suit icon Spade suit give +4 Mult when scored"
    },
    {
      Nr: 5,
      Joker: "Gluttonous Joker",
      Cost: "$5",
      Rarity: "Common",
      UnlockRequirement: "Available from start",
      Effect: "Played cards with Club suit icon Club suit give +4 Mult when scored"
    },
    {
      Nr: 6,
      Joker: "Jolly Joker",
      Cost: "$3",
      Rarity: "Common",
      UnlockRequirement: "Available from start",
      Effect: "+8 Mult if played hand contains a Pair"
    },
    {
      Nr: 7,
      Joker: "Zany Joker",
      Cost: "$4",
      Rarity: "Common",
      UnlockRequirement: "Available from start",
      Effect: "+12 Mult if played hand contains a Three of a Kind"
    },
    {
      Nr: 8,
      Joker: "Mad Joker",
      Cost: "$4",
      Rarity: "Common",
      UnlockRequirement: "Available from start",
      Effect: "+20 Mult if played hand contains a Four of a Kind"
    },
    {
      Nr: 9,
      Joker: "Crazy Joker",
      Cost: "$4",
      Rarity: "Common",
      UnlockRequirement: "Available from start",
      Effect: "+12 Mult if played hand contains a Straight"
    },
    {
      Nr: 10,
      Joker: "Droll Joker",
      Cost: "$4",
      Rarity: "Common",
      UnlockRequirement: "Available from start",
      Effect: "+10 Mult if the played hand contains a Flush"
    },
    {
      Nr: 11,
      Joker: "Sly Joker",
      Cost: "$3",
      Rarity: "Common",
      UnlockRequirement: "Available from start",
      Effect: "+50 Chips if played hand contains a Pair"
    },
    {
      Nr: 12,
      Joker: "Wily Joker",
      Cost: "$4",
      Rarity: "Common",
      UnlockRequirement: "Available from start",
      Effect: "+100 Chips if played hand contains a Three of a Kind"
    },
    {
      Nr: 13,
      Joker: "Clever Joker",
      Cost: "$4",
      Rarity: "Common",
      UnlockRequirement: "Available from start",
      Effect: "+150 Chips if played hand contains a Four of a Kind"
    },
    {
      Nr: 14,
      Joker: "Devious Joker",
      Cost: "$4",
      Rarity: "Common",
      UnlockRequirement: "Available from start",
      Effect: "+100 Chips if played hand contains a Straight"
    },
    {
      Nr: 15,
      Joker: "Crafty Joker",
      Cost: "$4",
      Rarity: "Common",
      UnlockRequirement: "Available from start",
      Effect: "+80 Chips if played hand contains a Flush"
    },
    {
      Nr: 16,
      Joker: "Half Joker",
      Cost: "$5",
      Rarity: "Common",
      UnlockRequirement: "Available from start",
      Effect: "+20 Mult if played hand contains 3 or fewer cards"
    },
    {
      Nr: 17,
      Joker: "Joker Stencil",
      Cost: "$8",
      Rarity: "Uncommon",
      UnlockRequirement: "Available from start",
      Effect: "X1 Mult for each empty Joker slot (Joker Stencil included)"
    },
    {
      Nr: 18,
      Joker: "Four Fingers",
      Cost: "$7",
      Rarity: "Uncommon",
      UnlockRequirement: "Available from start",
      Effect: "All Flushes and Straights can be made with 4 cards"
    },
    {
      Nr: 19,
      Joker: "Mime",
      Cost: "$5",
      Rarity: "Uncommon",
      UnlockRequirement: "Available from start",
      Effect: "Retrigger all card 'held in hand' abilities"
    },
    {
      Nr: 20,
      Joker: "Credit Card",
      Cost: "$1",
      Rarity: "Common",
      UnlockRequirement: "Available from start",
      Effect: "Go up to -$20 in debt"
    },
    {
        Nr: 21,
        Joker: "Ceremonial Dagger",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "When Blind is selected, destroy Joker to the right and permanently add double its sell value to this Mult"
      },
      {
        Nr: 22,
        Joker: "Banner",
        Cost: "$5",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "+40 Chips for every remaining Discard"
      },
      {
        Nr: 23,
        Joker: "Mystic Summit",
        Cost: "$5",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "+15 Mult when 0 Discards remaining"
      },
      {
        Nr: 24,
        Joker: "Marble Joker",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Adds one Stone card to the deck when Blind is selected"
      },
      {
        Nr: 25,
        Joker: "Loyalty Card",
        Cost: "$5",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "X4 Mult once every 6 hands played"
      },
      {
        Nr: 26,
        Joker: "8 Ball",
        Cost: "$5",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Creates a Planet card when the played hand holds at least two 8s"
      },
      {
        Nr: 27,
        Joker: "Misprint",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Adds a random Mult between 0 and 23 inclusive"
      },
      {
        Nr: 28,
        Joker: "Dusk",
        Cost: "$5",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Retrigger all played cards in final hand of round"
      },
      {
        Nr: 29,
        Joker: "Raised Fist",
        Cost: "$5",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Adds double the rank of lowest card held in hand to Mult"
      },
      {
        Nr: 30,
        Joker: "Chaos the Clown",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "1 free reroll per shop"
      },
      {
        Nr: 31,
        Joker: "Fibonacci",
        Cost: "$7",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Each played Ace, 2, 3, 5, and 8 gives +8 Mult when scored"
      },
      {
        Nr: 32,
        Joker: "Steel Joker",
        Cost: "$7",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "This Joker gains X0.25 Mult for each Steel Card in your full deck"
      },
      {
        Nr: 33,
        Joker: "Scary Face",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Played face cards give +30 Chips when scored"
      },
      {
        Nr: 34,
        Joker: "Abstract Joker",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "+3 Mult for each Joker card"
      },
      {
        Nr: 35,
        Joker: "Delayed Gratification",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Earn $2 per discard if no discards are used by end of the round"
      },
      {
        Nr: 36,
        Joker: "Hack",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Retriggers each played 2, 3, 4, and 5"
      },
      {
        Nr: 37,
        Joker: "Pareidolia",
        Cost: "$5",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "All cards are considered face cards"
      },
      {
        Nr: 38,
        Joker: "Gros Michel",
        Cost: "$5",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "+15 Mult, but 1 in 4 chance this card is destroyed at the end of each round"
      },
      {
        Nr: 39,
        Joker: "Even Steven",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Played cards with even rank give +4 Mult when scored (2, 4, 6, 8, 10)"
      },
      {
        Nr: 40,
        Joker: "Odd Todd",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Played cards with odd rank give +30 Chips when scored (Ace, 3, 5, 7, and 9)"
      },
      {
        Nr: 41,
        Joker: "Scholar",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Played Aces give +20 Chips and +4 Mult when scored"
      },
      {
        Nr: 42,
        Joker: "Business Card",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Played face cards have a 1 in 2 chance to give $2 when scored"
      },
      {
        Nr: 43,
        Joker: "Supernova",
        Cost: "$5",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Adds the number of times poker hand has been played to Mult"
      },
      {
        Nr: 44,
        Joker: "Ride the Bus",
        Cost: "$6",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "+1 Mult for every hand played without a scoring face card, starts at and resets to 0 when a face card is scored"
      },
      {
        Nr: 45,
        Joker: "Space Joker",
        Cost: "$5",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "1 in 4 chance to upgrade the level of played poker hand, before it's scored"
      },
      {
        Nr: 46,
        Joker: "Egg",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Gains $3 of sell value at end of round"
      },
      {
        Nr: 47,
        Joker: "Burglar",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "When Blind is selected, gain +3 Hands and lose all discards"
      },
      {
        Nr: 48,
        Joker: "Blackboard",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "x3 Mult if all cards held in hand are Spades or Clubs"
      },
      {
        Nr: 49,
        Joker: "Runner",
        Cost: "$5",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Gains +10 Chips if played hand contains a Straight"
      },
      {
        Nr: 50,
        Joker: "Ice Cream",
        Cost: "$5",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "+100 Chips\n-5 Chips for every hand played"
      },
      {
        Nr: 51,
        Joker: "DNA",
        Cost: "$8",
        Rarity: "Rare",
        UnlockRequirement: "Available from start",
        Effect: "If first hand of round has only 1 card, add a permanent copy to deck and draw it to hand"
      },
      {
        Nr: 52,
        Joker: "Splash",
        Cost: "$3",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Every played card counts in scoring"
      },
      {
        Nr: 53,
        Joker: "Blue Joker",
        Cost: "$5",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "+2 Chips for each remaining card in your deck"
      },
      {
        Nr: 54,
        Joker: "Sixth Sense",
        Cost: "$6",
        Rarity: "Rare",
        UnlockRequirement: "Available from start",
        Effect: "If first hand of round is a single 6, destroy it and create a Spectral Card"
      },
      {
        Nr: 55,
        Joker: "Constellation",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Gains X0.1 Mult per Planet card used"
      },
      {
        Nr: 56,
        Joker: "Hiker",
        Cost: "$5",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Every played card permanently gains +4 Chips when scored"
      },
      {
        Nr: 57,
        Joker: "Faceless Joker",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Earn $5 if 3 or more face cards are discarded at the same time"
      },
      {
        Nr: 58,
        Joker: "Green Joker",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "+1 Mult per hand played, -1 Mult per discard"
      },
      {
        Nr: 59,
        Joker: "Superposition",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Create a Tarot Card if poker hand contains an Ace and a Straight"
      },
      {
        Nr: 60,
        Joker: "To Do List",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Earn $5 if poker hand is a specific poker hand, poker hand changes on every payout"
      },
      {
        Nr: 61,
        Joker: "Cavendish",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start, but only appears in shops if Gros Michel Gros Michel was destroyed by its 1 in 4 effect during the same run",
        Effect: "x3 Mult, but 1 in 1000 chance this card is destroyed at the end of round"
      },
      {
        Nr: 62,
        Joker: "Card Sharp",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "x3 Mult if played poker hand has already been played this round"
      },
      {
        Nr: 63,
        Joker: "Red Card",
        Cost: "$5",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Starting at +0 Mult, gains +3 Mult when any Booster pack is skipped"
      },
      {
        Nr: 64,
        Joker: "Madness",
        Cost: "$7",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "When Blind is selected, gain X0.5 Mult and destroy a random Joker"
      },
      {
        Nr: 65,
        Joker: "Square Joker",
        Cost: "$5",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Gains +4 Chips if played hand contains exactly four cards"
      },
      {
        Nr: 66,
        Joker: "Séance",
        Cost: "$7",
        Rarity: "Rare",
        UnlockRequirement: "Available from start",
        Effect: "If poker hand is a Straight Flush, create a random Spectral card"
      },
      {
        Nr: 67,
        Joker: "Riff-Raff",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "When Blind is selected, create up to 2 Common Jokers"
      },
      {
        Nr: 68,
        Joker: "Vampire",
        Cost: "$7",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Gains X0.2 Mult per Enhanced card played, removes the Enhancement"
      },
      {
        Nr: 69,
        Joker: "Shortcut",
        Cost: "$7",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Allows Straights to be made with one or more gaps of 1 rank (ex: 2 3 5 7 8)"
      },
      {
        Nr: 70,
        Joker: "Hologram",
        Cost: "$7",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Gains X0.25 Mult per playing card added to your deck, starts at X1 Mult"
      },
      {
        Nr: 71,
        Joker: "Vagabond",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Create a Tarot card if hand is played with $3 or less"
      },
      {
        Nr: 72,
        Joker: "Baron",
        Cost: "$8",
        Rarity: "Rare",
        UnlockRequirement: "Available from start",
        Effect: "Each King held in hand gives X1.5 Mult"
      },
      {
        Nr: 73,
        Joker: "Cloud 9",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Earn $1 for each 9 in your complete deck at end of round"
      },
      {
        Nr: 74,
        Joker: "Rocket",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Earn $1 at the end of round. Earning increases by $2 when Boss Blind is defeated"
      },
      {
        Nr: 75,
        Joker: "Obelisk",
        Cost: "$8",
        Rarity: "Rare",
        UnlockRequirement: "Available from start",
        Effect: "X0.2 Mult per consecutive hand played without playing one of your most played poker hands, starts at X1 Mult"
      },
      {
        Nr: 76,
        Joker: "Midas Mask",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "All face cards become Gold cards when played"
      },
      {
        Nr: 77,
        Joker: "Luchador",
        Cost: "$5",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Sell this card during a Boss Blind to disable the effects of the current Boss Blind"
      },
      {
        Nr: 78,
        Joker: "Photograph",
        Cost: "$5",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "First played face card gives X2 Mult when scored"
      },
      {
        Nr: 79,
        Joker: "Gift Card",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Adds $1 to the sell value of every Joker and Consumable card at the end of round"
      },
      {
        Nr: 80,
        Joker: "Turtle Bean",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "+5 hand size, reduces by 1 each round"
      },
      {
        Nr: 81,
        Joker: "Erosion",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "+4 Mult for every card less than your starting deck amount in your complete deck"
      },
      {
        Nr: 82,
        Joker: "Reserved Parking",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Each face card held in hand has a 1 in 2 chance to give $1"
      },
      {
        Nr: 83,
        Joker: "Mail-In Rebate",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Earn $3 for each discarded card of a random rank, rank changes every round"
      },
      {
        Nr: 84,
        Joker: "To the Moon",
        Cost: "$5",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Earn an extra $1 of interest for every $5 you have at the end of round"
      },
      {
        Nr: 85,
        Joker: "Hallucination",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "When any Booster Pack is opened, there is a 1 in 2 chance of creating a random Tarot card"
      },
      {
        Nr: 86,
        Joker: "Fortune Teller",
        Cost: "$6",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "+1 Mult per Tarot card used this run"
      },
      {
        Nr: 87,
        Joker: "Juggler",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "+1 to your hand size"
      },
      {
        Nr: 88,
        Joker: "Drunkard",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "+1 discard"
      },
      {
        Nr: 89,
        Joker: "Stone Joker",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "This Joker gains +25 Chips for each Stone Card in your full deck"
      },
      {
        Nr: 90,
        Joker: "Golden Joker",
        Cost: "$6",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Earn $4 at the end of each round"
      },
      {
        Nr: 91,
        Joker: "Lucky Cat",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Gains X0.2 Mult each time a Lucky card successfully triggers, starts at X1 Mult"
      },
      {
        Nr: 92,
        Joker: "Baseball Card",
        Cost: "$8",
        Rarity: "Rare",
        UnlockRequirement: "Available from start",
        Effect: "Uncommon Jokers each give X1.5 Mult"
      },
      {
        Nr: 93,
        Joker: "Bull",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "+2 Chips for each dollar you have"
      },
      {
        Nr: 94,
        Joker: "Diet Cola",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Sell this card to create a free Double Tag"
      },
      {
        Nr: 95,
        Joker: "Trading Card",
        Cost: "$5",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "If first discard of round has only 1 card, destroy it and earn $3"
      },
      {
        Nr: 96,
        Joker: "Flash Card",
        Cost: "$5",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "+2 Mult per reroll in the shop"
      },
      {
        Nr: 97,
        Joker: "Popcorn",
        Cost: "$5",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Starts at +20 Mult, but -4 Mult for each round played"
      },
      {
        Nr: 98,
        Joker: "Spare Trousers",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Gains +2 Mult if a scoring hand contains a Two Pair, starts at +0 Mult"
      },
      {
        Nr: 99,
        Joker: "Ancient Joker",
        Cost: "$8",
        Rarity: "Rare",
        UnlockRequirement: "Available from start",
        Effect: "X1.5 Mult for each card scored of a specific suit, the suit changes at the end of each round"
      },
      {
        Nr: 100,
        Joker: "Ramen",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Gives X2 Mult, but loses X0.01 Mult per card discarded (minimum of X1 Mult)"
      },
      {
        Nr: 101,
        Joker: "Walkie Talkie",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Each played 10 or 4 gives +10 Chips and +4 Mult when scored"
      },
      {
        Nr: 102,
        Joker: "Seltzer",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "Retrigger all cards played for the next 10 hands"
      },
      {
        Nr: 103,
        Joker: "Castle",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Available from start",
        Effect: "This Joker gains +3 Chips per discarded card from a random Suit, the suit changes every round"
      },
      {
        Nr: 104,
        Joker: "Smiley Face",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Available from start",
        Effect: "Played face cards give +4 Mult when scored"
      },
      {
        Nr: 105,
        Joker: "Campfire",
        Cost: "$9",
        Rarity: "Rare",
        UnlockRequirement: "Available from start",
        Effect: "This Joker gains X0.5 Mult for each card sold, starts at and resets to X1 Mult when Boss Blind is defeated"
      },
      {
        Nr: 106,
        Joker: "Golden Ticket",
        Cost: "$5",
        Rarity: "Common",
        UnlockRequirement: "Play a five card hand that contains only Gold cards",
        Effect: "Played Gold cards earn $3 when scored"
      },
      {
        Nr: 107,
        Joker: "Mr. Bones",
        Cost: "$5",
        Rarity: "Uncommon",
        UnlockRequirement: "Lose five runs",
        Effect: "Prevents Death if Chips scored are at least 25% of the value required to beat the blind. Self Destructs after it saves you"
      },
      {
        Nr: 108,
        Joker: "Acrobat",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Play 200 hands",
        Effect: "x3 Mult on the final hand of the round"
      },
      {
        Nr: 109,
        Joker: "Sock and Buskin",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Play 300 face cards",
        Effect: "Retriggers all face cards an additional time"
      },
      {
        Nr: 110,
        Joker: "Swashbuckler",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Sell 20 Joker cards",
        Effect: "Adds the sell value of all owned Jokers left of this card to Mult"
      },
      {
        Nr: 111,
        Joker: "Troubadour",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Win 5 consecutive rounds by playing only 1 hand each round",
        Effect: "+2 hand size, -1 hands per round"
      },
      {
        Nr: 112,
        Joker: "Certificate",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Have a Gold Card that also has a Gold Seal",
        Effect: "When round begins, add a random playing card with a random seal to your hand"
      },
      {
        Nr: 113,
        Joker: "Smeared Joker",
        Cost: "$7",
        Rarity: "Uncommon",
        UnlockRequirement: "Have 3 or more Wild Cards in your deck",
        Effect: "Hearts and Diamonds count as the same suit, Spades and Clubs count as the same suit"
      },
      {
        Nr: 114,
        Joker: "Throwback",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Continue a Saved run from the main menu (save a run by pausing it then exiting to main menu)",
        Effect: "X0.25 Mult for each Blind skipped this run, starts at X1 Mult"
      },
      {
        Nr: 115,
        Joker: "Hanging Chad",
        Cost: "$4",
        Rarity: "Common",
        UnlockRequirement: "Beat a Boss Blind with a High Card hand",
        Effect: "Retrigger the first played card used in scoring"
      },
      {
        Nr: 116,
        Joker: "Rough Gem",
        Cost: "$7",
        Rarity: "Uncommon",
        UnlockRequirement: "Have at least 30 Diamonds in your deck",
        Effect: "Played cards with Diamond suit icon Diamond suit earn $1 when scored"
      },
      {
        Nr: 117,
        Joker: "Bloodstone",
        Cost: "$7",
        Rarity: "Uncommon",
        UnlockRequirement: "Have at least 30 Hearts in your deck",
        Effect: "1 in 3 chance for played cards with Heart suit icon Heart suit to give X2 Mult when scored"
      },
      {
        Nr: 118,
        Joker: "Arrowhead",
        Cost: "$7",
        Rarity: "Uncommon",
        UnlockRequirement: "Have at least 30 Spades in your deck",
        Effect: "Played cards with Spade suit icon Spade suit give +50 Chips when scored"
      },
      {
        Nr: 119,
        Joker: "Onyx Agate",
        Cost: "$7",
        Rarity: "Uncommon",
        UnlockRequirement: "Have at least 30 Clubs in your deck",
        Effect: "Played cards with Club suit icon Club suit give +8 Mult when scored"
      },
      {
        Nr: 120,
        Joker: "Glass Joker",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Have 5 or more Glass Cards in your deck",
        Effect: "Gain X0.5 Mult for each Glass Card that is destroyed, starts at X1 Mult"
      },
      {
        Nr: 121,
        Joker: "Showman",
        Cost: "$5",
        Rarity: "Uncommon",
        UnlockRequirement: "Reach Ante Level 4",
        Effect: "Joker, Tarot, Planet, and Spectral cards may appear multiple times"
      },
      {
        Nr: 122,
        Joker: "Flower Pot",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Reach Ante Level 8",
        Effect: "x3 Mult if played hand has a scoring Diamond card, Club card, Heart card, and Spade card."
      },
      {
        Nr: 123,
        Joker: "Blueprint",
        Cost: "$10",
        Rarity: "Rare",
        UnlockRequirement: "Win a run",
        Effect: "Copies ability of Joker to the right"
      },
      {
        Nr: 124,
        Joker: "Wee Joker",
        Cost: "$8",
        Rarity: "Rare",
        UnlockRequirement: "Win a run in 18 or fewer rounds",
        Effect: "This Joker gains +8 Chips when each played 2 is scored, starts at +10 Chips"
      },
      {
        Nr: 125,
        Joker: "Merry Andy",
        Cost: "$7",
        Rarity: "Uncommon",
        UnlockRequirement: "Win a run in 12 or fewer rounds",
        Effect: "+3 discards, -1 hand size"
      },
      {
        Nr: 126,
        Joker: "Oops! All 6s",
        Cost: "$4",
        Rarity: "Uncommon",
        UnlockRequirement: "Earn at least 10,000 Chips in a single hand",
        Effect: "Doubles all probabilities (ex: 1 in 3 -> 2 in 3)"
      },
      {
        Nr: 127,
        Joker: "The Idol",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Earn at least 1 million (1,000,000) Chips in a single hand",
        Effect: "Each played [random, specific card] gives X2 Mult when scored, card changes every round"
      },
      {
        Nr: 128,
        Joker: "Seeing Double",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Play a hand that contains four 7 of Clubs.",
        Effect: "X2 Mult if played hand has a scoring Club card and a scoring card of any other suit"
      },
      {
        Nr: 129,
        Joker: "Matador",
        Cost: "$7",
        Rarity: "Uncommon",
        UnlockRequirement: "Defeat a Boss Blind in one hand, without using discards",
        Effect: "Earn $8 if the played hand triggers the Boss Blind's ability"
      },
      {
        Nr: 130,
        Joker: "Hit the Road",
        Cost: "$8",
        Rarity: "Rare",
        UnlockRequirement: "Discard five Jacks at the same time",
        Effect: "Gains X0.5 Mult for every Jack discarded this round"
      },
      {
        Nr: 131,
        Joker: "The Duo",
        Cost: "$8",
        Rarity: "Rare",
        UnlockRequirement: "Win a run without playing a Pair",
        Effect: "X2 Mult when the hand contains a Pair"
      },
      {
        Nr: 132,
        Joker: "The Trio",
        Cost: "$8",
        Rarity: "Rare",
        UnlockRequirement: "Win a run without playing a Three of a Kind",
        Effect: "x3 Mult when the hand contains a Three of a Kind"
      },
      {
        Nr: 133,
        Joker: "The Family",
        Cost: "$8",
        Rarity: "Rare",
        UnlockRequirement: "Win a run without playing a Four of a Kind",
        Effect: "x4 Mult when the hand contains Four of a Kind"
      },
      {
        Nr: 134,
        Joker: "The Order",
        Cost: "$8",
        Rarity: "Rare",
        UnlockRequirement: "Win a run without playing a Straight",
        Effect: "x3 Mult if played hand contains a Straight"
      },
      {
        Nr: 135,
        Joker: "The Tribe",
        Cost: "$8",
        Rarity: "Rare",
        UnlockRequirement: "Win a run without playing a Flush",
        Effect: "x2 Mult when the hand contains a Flush"
      },
      {
        Nr: 136,
        Joker: "Stuntman",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Earn at least 100 million (100,000,000) Chips in a single hand",
        Effect: "+300 Chips, -2 hand size"
      },
      {
        Nr: 137,
        Joker: "Invisible Joker",
        Cost: "$10",
        Rarity: "Rare",
        UnlockRequirement: "Win a run without having more than 4 Jokers at any one time",
        Effect: "After three rounds, sell this Joker to duplicate a random Joker (removes Negative from copy)"
      },
      {
        Nr: 138,
        Joker: "Brainstorm",
        Cost: "$10",
        Rarity: "Rare",
        UnlockRequirement: "Discard a Royal Flush",
        Effect: "Copies the ability of leftmost Joker"
      },
      {
        Nr: 139,
        Joker: "Satellite",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Have $400 or more",
        Effect: "Gain $1 at the end of round for every unique Planet Card used this run"
      },
      {
        Nr: 140,
        Joker: "Shoot the Moon",
        Cost: "$5",
        Rarity: "Common",
        UnlockRequirement: "Play every Heart card in your deck in one round",
        Effect: "+13 Mult for each Queen held in hand"
      },
      {
        Nr: 141,
        Joker: "Drivers License",
        Cost: "$7",
        Rarity: "Rare",
        UnlockRequirement: "Enhance 16 or more cards in your deck",
        Effect: "x3 Mult if you have at least 16 enhanced cards"
      },
      {
        Nr: 142,
        Joker: "Cartomancer",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Discover every Tarot card",
        Effect: "Create a Tarot whenever Blind is selected"
      },
      {
        Nr: 143,
        Joker: "Astronomer",
        Cost: "$8",
        Rarity: "Uncommon",
        UnlockRequirement: "Discover every Planet card",
        Effect: "All Planet cards and Celestial Packs in the shop are free"
      },
      {
        Nr: 144,
        Joker: "Burnt Joker",
        Cost: "$6",
        Rarity: "Uncommon",
        UnlockRequirement: "Sell 50 cards",
        Effect: "Upgrade the level of the first discarded poker hand each round"
      },
      {
        Nr: 145,
        Joker: "Bootstraps",
        Cost: "$7",
        Rarity: "Uncommon",
        UnlockRequirement: "Have at least 2 Polychrome Jokers",
        Effect: "+2 Mult for every $5 you have"
      },
      {
        Nr: 146,
        Joker: "Canio",
        Cost: "N/A",
        Rarity: "Legendary",
        UnlockRequirement: "A chance when using the Soul spectral card",
        Effect: "Gains X1 Mult when a face card is destroyed, starts at X1 Mult"
      },
      {
        Nr: 147,
        Joker: "Triboulet",
        Cost: "N/A",
        Rarity: "Legendary",
        UnlockRequirement: "A chance when using the Soul spectral card",
        Effect: "Played Kings and Queens each give X2 Mult when scored"
      },
      {
        Nr: 148,
        Joker: "Yorick",
        Cost: "N/A",
        Rarity: "Legendary",
        UnlockRequirement: "A chance when using the Soul spectral card",
        Effect: "x5 Mult, but alas, only after using 23 discards"
      },
      {
        Nr: 149,
        Joker: "Chicot",
        Cost: "N/A",
        Rarity: "Legendary",
        UnlockRequirement: "A chance when using the Soul spectral card",
        Effect: "Disables effect of every Boss Blind"
      },
      {
        Nr: 150,
        Joker: "Perkeo",
        Cost: "N/A",
        Rarity: "Legendary",
        UnlockRequirement: "A chance when using the Soul spectral card",
        Effect: "Create a Negative copy of 1 random Consumable card in your possession at the end of the shop"
      }
  ];
  
  export default jokers;
  