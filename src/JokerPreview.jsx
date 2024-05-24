/* eslint-disable react/prop-types */
import JokerCostTab from "./JokerCost";
import common from "./assets/rarity/common.png";
import uncommon from "./assets/rarity/uncommon.png";
import rare from "./assets/rarity/rare.png";
import legendary from "./assets/rarity/legendary.png";
import previewBackground from "./assets/preview_bg.png";
import previewEffect from "./assets/preview_effect.png";

const JokerPreview = ({
  jokerName,
  jokerEffect,
  jokerRarity,
  jokerCost,
  position,
  updateLuaLocals,
  updateLuaTableInsert,
}) => {
  let rarityTitle = "Common";
  let rarityImg = common;

  const getInitRarity = () => {
    switch (jokerRarity) {
      case 1:
        rarityTitle = "Common";
        rarityImg = common;
        break;
      case 2:
        rarityTitle = "Uncommon";
        rarityImg = uncommon;
        break;
      case 3:
        rarityTitle = "Rare";
        rarityImg = rare;
        break;
      case 4:
        rarityTitle = "Legendary";
        rarityImg = legendary;
        break;
    }
  };
  getInitRarity();

  const checkLuaLocals = () => {
    if (jokerName == null || jokerEffect == null || jokerCost == null) {
      //do nothing
    } else {
      const luaJokerNameLower = jokerName.toLowerCase();
      const luaJokerID = luaJokerNameLower.replaceAll(" ", "_");
      updateLuaLocals(`
      --All mods made using the center_hook api (https://github.com/nicholassam6425/balatro-mods)

      local mod_id = "${luaJokerID}"
      local mod_name = "${jokerName}"
      local mod_version = "1.0"
      local mod_author = "BuffoonBuilder"`);
    }
  };
  checkLuaLocals();

  const checkLuaTableInsert = () => {
    if (jokerName == null || jokerEffect == null || jokerCost == null) {
      //do nothing
    } else {
      const luaJokerNameLower = jokerName.toLowerCase();
      const luaJokerID = luaJokerNameLower.replaceAll(" ", "_");
      const luaJokerTableID = "j_" + luaJokerID;
      updateLuaTableInsert(`
      table.insert(mods, {
        mod_id = mod_id,
        name = mod_name,
        version = mod_version,
        author = mod_author,
        enabled = true,
        on_enable = function()
            centerHook.addJoker(self, "${luaJokerTableID}", -- id
            '${jokerName}', -- name
            jokerEffect, -- effect function
            nil, -- order
            true, -- unlocked
            true, -- discovered
            ${jokerCost}, -- cost
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
            {"${jokerEffect}"}, -- description text
            ${jokerRarity}, -- rarity
            true, -- blueprint compatibility
            true, -- eternal compatibility
            nil, -- exclusion pool flag
            nil, -- inclusion pool flag
            nil, -- unlock condition
            true, -- collection alert
            "pack", -- sprite path
            ("${luaJokerID}"), -- sprite name
            {
                px = 71,
                py = 95
            } -- sprite size
            )
        end,
        on_disable = function()
            centerHook.removeJoker(self, "${luaJokerTableID}")
        end
    })`);
    }
  };
  checkLuaTableInsert();

  return (
    <div
      className="joker-preview"
      style={{
        position: "fixed",
        top: position.y + 10,
        left: position.x + 10,
      }}
    >
      <JokerCostTab jokerCost={jokerCost} />
      <div
        className="joker-preview-background"
        style={{ backgroundImage: `url(${previewBackground})` }}
      >
        <h2 className="joker-preview-name">{jokerName}</h2>
        <div
          className="joker-preview-effect-container"
          style={{ backgroundImage: `url(${previewEffect})` }}
        >
          <p className="joker-preview-effect">{jokerEffect}</p>
        </div>
        <div
          className="joker-preview-rarity-container"
          style={{ backgroundImage: `url(${rarityImg})` }}
        >
          <h3 className="joker-preview-rarity">{rarityTitle}</h3>
        </div>
      </div>
    </div>
  );
};

export default JokerPreview;
