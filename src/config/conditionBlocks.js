const conditionBlocks = [
    {
        title: "Card is Odd",
        id: "cd-1",
        LUA: "context.other_card:get_id() <= 10 and context.other_card:get_id() >= 0 and context.other_card:get_id() % 2 == 1",
        styles: ['rgb(53,108,85)','2px 2px rgb(45,95,74)'],
        additionalInput: 'none',
        compatibilities: [],
        inputType: 'none',
        exception: 'none'

    },
    {
        title: "Card is Even",
        id: "cd-2",
        LUA: "context.other_card:get_id() <= 10 and context.other_card:get_id() >= 0 and context.other_card:get_id() % 2 == 0",
        styles: ['rgb(53,108,85)','2px 2px rgb(45,95,74)'],
        additionalInput: 'none',
        compatibilities: "",
        inputType: 'none',
        exception: 'none'
    },
    {
        title: "Card is Face Card",
        id: "cd-3",
        LUA: "(context.other_card:is_face())",
        styles: ['rgb(53,108,85)','2px 2px rgb(45,95,74)'],
        additionalInput: 'none',
        compatibilities: "",
        inputType: 'none',
        exception: 'none'
    },
  ];
  
  export default conditionBlocks;