const conditionBlocks = [
    {
        title: "Scoring Card is Less Than/Equal To",
        id: "cd-1",
        LUA: "context.other_card:get_id() <= ",
        styles: "green-block",
        compatibilities: []
    },
    {
        title: "Scoring Card is Greater Than/Equal To",
        id: "cd-2",
        LUA: "context.other_card:get_id() >= ",
        styles: "green-block",
        compatibilities: []
    },
    {
        title: "Scoring Card is Divisible by 2",
        id: "cd-3",
        LUA: "context.other_card:get_id() % 2",
        styles: "green-block",
        compatibilities: ""
    },
  ];
  
  export default conditionBlocks;