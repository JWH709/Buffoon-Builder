const resultBlocks = [
    {
        title: "Mult +",
        id: "vb-1",
        LUA: "mult = ",
        styles: ['rgb(0,147,255)','2px 2px rgb(0,90,166)'],
        additionalInput: 'number',
        compatibilities: "",
        inputType: 'mult',
        exception: 'none'

      },
      {
        title: "Chips +",
        id: "vb-2",
        LUA: "chips = ",
        styles: ['rgb(0,147,255)','2px 2px rgb(0,90,166)'],
        additionalInput: 'number',
        compatibilities: "",
        inputType: 'chips',
        exception: 'none'

      },
      {
        title: "Mult x",
        id: "vb-3",
        LUA: "x_mult = ",
        styles: ['rgb(0,147,255)','2px 2px rgb(0,90,166)'],
        additionalInput: 'number',
        compatibilities: "",
        inputType: 'mult',
        exception: 'none'

    },
    {
      title: "Retrigger",
      id: "vb-4",
      LUA: "message = localize('k_again_ex'), repetitions = 1,",
      styles: ['rgb(0,147,255)','2px 2px rgb(0,90,166)'],
      additionalInput: 'none',
      compatibilities: "",
      inputType: 'mult',
      exception: 'retrigger'
  },
  ];
  
  export default resultBlocks;