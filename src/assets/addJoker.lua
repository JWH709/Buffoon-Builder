local mod_id = "test_new"

local function jokerEffect(card, context)
    if card.ability.name == "Test New" and context.individual and context.cardarea == G.play then
        if context.other_card:get_id() <= 10 and context.other_card:get_id() >= 0 and context.other_card:get_id() % 2 ==
            0 then
            return {
                x_mult = 4,
                card = card
            }
        end
    end
end

-- logger
local logging = require("logging")
local logger = logging.getLogger(mod_id)

-- APIs
local joker = require('joker')

-- config
local mod_config = {}

local function on_enable()
    -- Add an example joker
    joker.add({
        mod_id = mod_id,
        id = "j_test_new",
        name = "Test New",
        desc = {'Cool guy stuff'},
        effect = "Cool guy stuff",
        calculate_joker_effect = jokerEffect,
        unlocked = true,
        discovered = true,
        cost = 9,
        blueprint_compat = true
    })
end

local function on_disable()
    joker.remove("j_test_new")
end

return {
    on_enable = on_enable,
    on_disable = on_disable
}
