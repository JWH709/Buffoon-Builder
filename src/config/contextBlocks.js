const contextBlocks = [
    {
      title: "Scoring Card(s) Played",
      id: "cx-1",
      LUA: "context.individual and context.cardarea == G.play",
      styles: ['rgb(255,152,0)', '2px 2px rgb(225,136,0)'],
      additionalInput: 'none',
      compatibilities: "",
      inputType: 'none'
    },
    {
      title: "Hand Contains",
      id: "cx-2",
      LUA: "context.individual and context.cardarea == G.hand",
      styles: ['rgb(255,152,0)', '2px 2px rgb(225,136,0)'],
      additionalInput: 'none',
      compatibilities: "",
      inputType: 'none'
    },
    {
        title: "Booster is Opened",
        id: "cx-3",
        LUA: "context.open_booster",
        styles: ['rgb(255,152,0)', '2px 2px rgb(225,136,0)'],
        additionalInput: 'none',
        compatibilities: "",
        inputType: 'none'
    },
    {
        title: "Card is Sold",
        id: "cx-4",
        LUA: "context.selling_card",
        styles: ['rgb(255,152,0)', '2px 2px rgb(225,136,0)'],
        additionalInput: 'none',
        compatibilities: "",
        inputType: 'none'
    }
  ];
  
  export default contextBlocks;
  