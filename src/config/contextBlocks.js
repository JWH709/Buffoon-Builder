const contextBlocks = [
    {
      title: "Scoring Card(s) Played",
      id: "cx-1",
      LUA: "context.individual and context.cardarea == G.play",
      styles: ['rgb(255,152,0)', '2px 2px rgb(225,136,0)'],
      additionalInput: 'none',
      compatibilities: "",
      inputType: 'none',
      exception: 'none'

    }
  ];
  
  export default contextBlocks;
  