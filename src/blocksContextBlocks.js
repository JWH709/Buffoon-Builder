const contextBlocks = [
    {
      title: "Scoring Card(s) Played",
      id: "cx-1",
      LUA: "context.individual and context.cardarea == G.play",
      styles: "yellow-block",
      additionalInput: 'none',
      compatibilities: ""
    },
    {
      title: "Hand Contains",
      id: "cx-2",
      LUA: "context.individual and context.cardarea == G.hand",
      styles: "yellow-block",
      additionalInput: 'none',
      compatibilities: ""
    },
    {
        title: "Booster is Opened",
        id: "cx-3",
        LUA: "context.open_booster",
        styles: "yellow-block",
        additionalInput: 'none',
        compatibilities: ""
    },
    {
        title: "Card is Sold",
        id: "cx-4",
        LUA: "context.selling_card",
        styles: "yellow-block",
        additionalInput: 'none',
        compatibilities: ""
    }
  ];
  
  export default contextBlocks;
  