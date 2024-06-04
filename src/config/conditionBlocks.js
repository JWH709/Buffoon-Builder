const conditionBlocks = [
    {
        title: "Scoring Card is Less Than/Equal To",
        id: "cd-1",
        LUA: "context.other_card:get_id() <= ",
        styles: "green-block",
        additionalInput: 'none',
        compatibilities: []
    },
    {
        title: "Scoring Card is Greater Than/Equal To",
        id: "cd-2",
        LUA: "context.other_card:get_id() >= ",
        styles: "green-block",
        additionalInput: 'none',
        compatibilities: []
    },
    {
        title: "Scoring Card is Divisible by 2",
        id: "cd-3",
        LUA: "context.other_card:get_id() <= 10 and context.other_card:get_id() >= 0 and context.other_card:get_id() % 2 == 0",
        styles: "green-block",
        additionalInput: 'none',
        compatibilities: ""
    },
  ];
  
  export default conditionBlocks;