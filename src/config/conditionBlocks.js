const conditionBlocks = [
    {
        title: "Scoring Card is ≤",
        id: "cd-1",
        LUA: "context.other_card:get_id() <= ",
        styles: ['rgb(53,108,85)','2px 2px rgb(45,95,74)'],
        additionalInput: 'none',
        compatibilities: [],
        inputType: 'none'
    },
    {
        title: "Scoring Card is ≥",
        id: "cd-2",
        LUA: "context.other_card:get_id() >= ",
        styles: ['rgb(53,108,85)','2px 2px rgb(45,95,74)'],
        additionalInput: 'none',
        compatibilities: [],
        inputType: 'none'
    },
    {
        title: "Scoring Card is Divisible by 2",
        id: "cd-3",
        LUA: "context.other_card:get_id() <= 10 and context.other_card:get_id() >= 0 and context.other_card:get_id() % 2 == 0",
        styles: ['rgb(53,108,85)','2px 2px rgb(45,95,74)'],
        additionalInput: 'none',
        compatibilities: "",
        inputType: 'none'
    },
  ];
  
  export default conditionBlocks;