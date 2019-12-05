import SpellsService from "../Services/SpellsService.js";
import store from "../store.js";
import Spells from "../Models/Spells.js";

//Private
function _drawSpells() {
  let template = "";
  let spells = store.State.spells;
  console.log(spells);
  spells.forEach(
    s =>
      (template += `<li onclick="app.spellsController.selectSpellAsync('${s.id}')">${s.name}</li>`)
  );
  document.getElementById("spells").innerHTML = template;
}

//Public
export default class SpellsController {
  constructor() {
    store.subscribe("values", _drawSpells);
    console.log("hello from controller");
  }
}
