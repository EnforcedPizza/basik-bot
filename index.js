var commando = require("discord.js-commando");
var yourbot = new commando.Client();

yourbot.login('NTI5MzExMTc0MzIwMTkzNTU2.Dwu_rw.Pu9RBuYYb7xa9yca7e3X3j1RZdE');

yourbot.registry.registerGroup('other', 'Other');
yourbot.registry.registerCommandsIn(__dirname + "/commands")
yourbot.registry.registerDefaults();
