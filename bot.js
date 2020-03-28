const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "=";




// الرد التلقائي

client.on("message", msg => {
  if (msg.content === "السلام عليكم") {
    msg.reply("**و عليكم السلام الرجاء شرح مشكلتك واذا كان عندك صور للمشكلة بيكون افضل**");
  }
});

client.on("guildMemberAdd", member => {
  let id = member.user.id;
  let m = member.user;
  var embed = new Discord.RichEmbed()
    .setThumbnail(m.avatarURL)
    .setImage(
      ""
    )
    .addField(
      `<a:NW:620727189528117258><a:NE:620727187196215306><a:NL:620727189272526876><a:NC:620727189184446501><a:NO:620727189205155840><a:NM:620727189154955265><a:NE:620727187196215306>`,
      `<@${id}>`
    )
    .addField(" **اهلا وسهلا بك في سيرفنا حصريات وسكربتات واشياء كثير حصرية تنورنا**", `**${member.guild.name}**`)
    .addField("**انت العضو رقم** ", `${member.guild.memberCount} `)
    .setColor("RANDOM");
  var channel = member.guild.channels.find("name", "الترحيب-💫"); //تعديل مهم اسم روم الولكم
  if (!channel) return;
  channel.send({ embed: embed });
});


// عدد الدعوات
client.on("message", async message => {
  if (message.content.startsWith(prefix + "invites")) {
    //// وهون الامر طبعا
    let oi = message.mentions.users.first()
      ? message.mentions.users.first().id
      : message.author.id;
    let Tag = message.mentions.users.first()
      ? message.mentions.users.first().tag
      : message.author.tag;
    let Username = message.mentions.users.first()
      ? message.mentions.users.first().username
      : message.author.username;
    let Avatar = message.mentions.users.first()
      ? message.mentions.users.first().avatarURL
      : message.author.avatarURL;

    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(oi);
      let personalInvites = invs.filter(i => i.inviter.id === oi);
      let urll = invs.filter(i => i.inviter.id === oi);
      let link = urll.reduce(
        (p, v) =>
          v.url + ` , Total de membros recrutados no convite: ${v.uses}.\n` + p,
        `\nServidor: ${message.guild.name} \n `
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      let inviteCode = personalInvites.reduce((p, v) => v.code);
      let possibleInvites = [["Total de membros recrutados:"]];
      possibleInvites.push([inviteCount, inviteCode]);
      let user = message.mentions.users.first() || message.author;
      let mem = message.guild.member(user);
      let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
      let daysJoined = millisJoined / 1000 / 60 / 60 / 24;

      var inviteInfo = new Discord.RichEmbed()
        .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
        .addField(
          "**عدد الدعوات للسيرفر**",
          `**➥** [ شخص **${Number(inviteCount)}** ]   `
        )
        .addField(
          "**تاريخ انضمامك لسيرفرنا **",
          `**➥** [ منذ  **${daysJoined.toFixed(0)}** يوم ]   `
        )
        .addField(
          "**رابط الدعوة الذي دخلت منه**  ",
          `**➥** [ **https://discord.gg/${inviteCode || "Zm2U6we"}** ]   `
        )
        .setImage(
          ""
        )
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(Tag, Avatar);

      message.channel.send(inviteInfo);
    });
  }
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Brodcast Bot`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Brodcast Bot ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`DENVER`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});







client.on("message", async message => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
        if(!message.channel.guild) return;
            var args = message.content.split(" ").slice(1).join(" ");
            if(command == "bc") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
                }
                    if(!args) {
                        return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
                    }
                        message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.memberCount} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.forEach(member => {
                                            let bc = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("Broadcast")
                                            .addField("Server", message.guild.name)
                                            .addField("Sender", message.author.username)
                                            .addField("Message", args);

                                            member.sendEmbed(bc);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send("**Broadcast Canceled.**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
            if(command == "bco") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
                }
                    if(!args) {
                        return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
                    }
                        message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.filter(r => r.presence.status !== "offline").size} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.filter(r => r.presence.status !== "offline").forEach(member => {
                                            let bco = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("Broadcast")
                                            .addField("Server", message.guild.name)
                                            .addField("Sender", message.author.username)
                                            .addField("Message", args);

                                            member.sendEmbed(bco);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send("**Broadcast Canceled.**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
});



client.on("message", async message => {
    if(message.content == prefix + "server") {
        if(!message.channel.guild) return;
            if(!message.member.hasPermission("MANAGE_GUILD")) {
                return message.channel.send("ليس لديك الصلآحية الكآفية . :broken_heart:");
            }

                let server = new Discord.RichEmbed()
                    .setAuthor(message.guild.name)
                    .setColor("RANDOM")
                    .setTitle("Server Info :hearts: :sparkles:")
                    .setDescription(`Members :bust_in_silhouette: : ${message.guild.memberCount}\nOwner :crown: : ${message.guild.owner.user.username}\nServer ID :id: : ${message.guild.id}\nRoles :lock: : ${message.guild.roles.size}\nRegion :earth_africa: : ${message.guild.region.toUpperCase()}`);

                    message.channel.sendEmbed(server);

    }
});
client.on("message", async message => {
    if(message.content.startsWith(prefix + "banned")) {
        if(!message.guild) return;
        message.guild.fetchBans()
        .then(bans => {
            let b = bans.size;
            let bb = bans.map(a => `${a}`).join(" - ");
            message.channel.send(`**\`${b}\` | ${bb}**`);
        });
    }
});
client.on("message", async message => {
    if(message.content.startsWith(prefix + "invite")) {
        let invite = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setThumbnail(message.author.avatarURL)
            
            .setURL(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`);
            message.channel.sendEmbed(invite);
    }
});
client.on("message", async message => {
    if(message.content.startsWith(prefix + "help")) {
        let help = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`**__برودكاست بوت | Version 1.1__ 

            برودكاست عادي : ${prefix}bc
            دعوة البوت لسيرفرك : ${prefix}invite
            معلومات عن السيرفر : ${prefix}server
            برودكاست للأونلاين فقط : ${prefix}bco
            يعرض لك عدد المتبندين من سيرفرك : ${prefix}banned
            **`);
            message.channel.sendEmbed(help); // رابط السيرفر يعود الى سيرفر CODES .
    }
});


client.on("message", message => { //clear
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**? اسف لكن هذا الامر للسيرفرات فقط **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**?  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تــم مسح الشات ``",
          color: 0x5016f3, 
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
});

// Calling Packages
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const db = require('quick.db');

// We can call the file with all the functions here.
const func = require('./functions.js'); // If this returns an error for you (or you might be on ubuntu/linux), try '../functions.js'    
// You can also change the name of func to something else like tools.

// We can call the JSON file here
const commands = JSON.parse(fs.readFileSync('Storage/commands.json', 'utf8'));
// We need to call the serverPrefixes JSON file
const serverPrefixes = JSON.parse(fs.readFileSync('Storage/serverPrefixes.json', 'utf8'))

// Listener Event: Runs whenever a message is received.
bot.on('message', message => {

    // We want to make sure there is a GUILD, and it is not in DMs
    if (message.channel.type != 'text') return message.channel.send('Please use commands in the server!')

    // Global Settings - We need the prefix to change every time a message is run.
    db.fetchObject(`guildPrefix_${message.guild.id}`).then(i => { // This fetches the current prefix, if none is supplied it would be an empty string.

        let prefix;

        if (i.text) { // This will run if i.text(exisiting prefix) is defined...
            prefix = i.text
        } else { // This will run if i.text(existing prefix) is not defined...
            prefix = '=' // You can set this to your default prefix
        }

        // Variables - Variables make it easy to call things, since it requires less typing.
        let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
        let sender = message.author; // This variable takes the message, and finds who the author is.
        let args = message.content.slice(prefix.length).trim().split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
        let cmd = args.shift().toLowerCase(); // This takes away the first object in the cont array, then puts it in this.

        // Message Leveling System - Make sure you require quick.db
        db.updateValue(message.author.id + message.guild.id, 1).then(i => { // You pass it the key, which is authorID + guildID, then pass it an increase which is 1 in this instance.
            // It also returns the new updated object, which is what we will use.

            let messages; // Create an empty variable - These IF statements will run if the new amount of messages sent is the same as the number.
            if (i.value == 25) messages = 25; // Level 1
            else if (i.value == 50) messages = 50; // Level 2
            else if (i.value == 100) messages = 100; // Level 3 - You can set these to any number, and any amount of them.

            if (!isNaN(messages)) { // If messages IS STILL empty, run this.
                db.updateValue(`userLevel_${message.author.id + message.guild.id}`, 1).then(o => { // This returns the updated object of userLevel_ID. 
                    message.channel.send(`You sent ${messages} messages, so you leveled up! You are now level ${o.value}`) // Send their updated level to the channel.
                })
            }

        })

        // We also need to make sure it doesn't respond to bots
        if (sender.bot) return;
        if (!message.content.startsWith(prefix)) return; // We also want to make it so that if the message does not start with the prefix, return.

        // Command Handler - .trim() removes the blank spaces on both sides of the string
        try {
            let commandFile = require(`./commands/${cmd}.js`); // This will assign that filename to commandFile
            commandFile.run(bot, message, args, func); // This will add the functions, from the functions.js file into each commandFile.
        } catch (e) { // If an error occurs, this will run.
            console.log(e.message); // This logs the error message
        } finally { // This will run after the first two clear up
            console.log(`${message.author.username} ran the command: ${cmd}`);
        }

    })

});

// Listener Event: Runs whenever the bot sends a ready event (when it first starts for example)
bot.on('ready', () => {

    // We can post into the console that the bot launched.
    console.log('Bot started.');

});



client.login(process.env.BOT_TOKEN);
