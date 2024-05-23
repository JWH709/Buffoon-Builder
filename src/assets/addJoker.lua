local mod_id = ""
local mod_name = ""
local mod_version = "1.0"
local mod_author = "BuffoonBuilder"

local function jokerEffect(card, context)
    if card.ability.name == "" then
    end
end
table.insert(mods, {
    mod_id = mod_id,
    name = mod_name,
    version = mod_version,
    author = mod_author,
    enabled = true,
    on_enable = function()
        centerHook.addJoker(self, "", -- id
        '', -- name
        jokerEffect, -- effect function
        nil, -- order
        true, -- unlocked
        true, -- discovered
        0, -- cost
        {
            x = 0,
            y = 0
        }, -- sprite position
        nil, -- internal effect description
        {
            extra = {
                x_mult = 2
            }
        }, -- config
        {"", ""}, -- description text
        1, -- rarity
        true, -- blueprint compatibility
        true, -- eternal compatibility
        nil, -- exclusion pool flag
        nil, -- inclusion pool flag
        nil, -- unlock condition
        true, -- collection alert
        "pack", -- sprite path
        (""), -- sprite name
        {
            px = 71,
            py = 95
        } -- sprite size
        )
    end,
    on_disable = function()
        centerHook.removeJoker(self, "")
    end
})
