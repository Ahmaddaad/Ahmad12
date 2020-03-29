const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "=";


//bot user information
client.on("message", pixelbot => {
  // itzZa1D - Codes Team.
  if (pixelbot.content.startsWith(prefix + "user")) {
    // itzZa1D - Codes Team.
    if (pixelbot.author.bot) return;
    if (!pixelbot.guild)
      return pixelbot.reply("**:x: - This Command is only done on Servers**");
    pixelbot.guild.fetchInvites().then(invites => {
      // itzZa1D - Codes Team.
      let personalInvites = invites.filter(
        i => i.inviter.id === pixelbot.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var roles = pixelbot.member.roles
        .map(roles => `**__${roles.name}__ |**`)
        .join(` `);
      let pixeluser = new Discord.RichEmbed() // itzZa1D - Codes Team.
        .setColor("#00000")
        .setTitle(" :beginner: :heartpulse:   | Use  r Info") // itzZa1D - Codes Team.
        .setAuthor(pixelbot.author.username, pixelbot.author.avatarURL)
        .addField("**✽ Name :**   ", pixelbot.author.username, true)
        .addField("**✽ Tag :**   ", pixelbot.author.discriminator, true)
        .addField("**✽ ID :** ", pixelbot.author.id, true) // itzZa1D - Codes Team.
        .addField(
          "**✽ Joined At :**   ",
          moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "**✽ Created At :**    ",
          moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField("**✽ Total invites :**    ", inviteCount, true)
        .setTimestamp(); // itzZa1D - Codes Team.

      pixelbot.channel.sendEmbed(pixeluser).then(c => {}); // itzZa1D - Codes Team.
    });
  }
}); // itzZa1D - Codes Team.

client.on("message", zaid => {
  if (zaid.content === "=bot") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("#00000")
      .addField(
        "✽ **Bot Ping** : ",
        `» ${Date.now() - zaid.createdTimestamp}` + " ms",
        true
      )
      .addField("**Servers** :  ", `» ${client.guilds.size}`, true)
      .addField("**Channels** : ", `» ${client.channels.size} `, true)
      .addField("**Users** : ", `» ${client.users.size} `, true)
      .addField("**Bot Name** :  ", `» ${client.user.tag} `, true)
      .addField("**Bot Owner** :  ", `» <@335645388323160064>`, true) // تعديل مهم عدل هذا الرقم لايدي حسابك
      .setImage(
        ""
      )
      .setFooter(zaid.author.username, zaid.author.avatarURL);
    zaid.channel.send(bot);
  }
});
/////////////////////////////


let room = ""; //تعديل مهم ايدي روم عد الاعضاء والترحيب ، روم صوتي

client.on("guildMemberAdd", member => {
  let guild = client.channels.get(room).guild.id;

  if (member.guild.id != guild) return;
  client.channels
    .get(room)
    .setName("Welcome " + member.user.username)
    .then(m => {
      setTimeout(() => {
        client.channels
          .get(room)
          .setName(member.guild.name + " - " + member.guild.members.size);
      }, 3000);
    });
});

client.on("guildMemberRemove", member => {
  let guild = client.channels.get(room).guild.id;

  if (member.guild.id != guild) return;
  client.channels
    .get(room)
    .setName("Member Left :(")
    .then(m => {
      setTimeout(() => {
        client.channels
          .get(room)
          .setName(member.guild.name + " - " + member.guild.members.size);
      }, 3000);
    });
});

client.on("voiceStateUpdate", (oldMember, newMember) => {
  let guild = client.channels.get(room).guild.id;

  if (oldMember.guild.id != guild) return;
  let newUserChannel = newMember.voiceChannel;
  let oldUserChannel = oldMember.voiceChannel;
  if (oldUserChannel === undefined && newUserChannel !== undefined) {
    client.channels
      .get(room)
      .setName("Hi, " + oldMember.user.username)
      .then(m => {
        setTimeout(() => {
          client.channels
            .get(room)
            .setName(
              oldMember.guild.name + " - " + oldMember.guild.members.size
            );
        }, 3000);
      });
  } else if (newUserChannel === undefined) {
    client.channels
      .get(room)
      .setName("Bye, " + oldMember.user.username)
      .then(m => {
        setTimeout(() => {
          client.channels
            .get(room)
            .setName(
              oldMember.guild.name + " - " + oldMember.guild.members.size
            );
        }, 3000);
      });
  }
});






//color

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "color")) {
    if (!message.channel.guild)
      return message.channel
        .send("**هذا الأمر فقط للسيرفرات**")
        .then(m => m.delete(5000));
    message.channel.sendFile(`https://i.imgur.com/dZbFIob.png`).then(msg => {
      msg.react("🖤").then(r => {
        msg.react("❤").then(r => {
          msg.react("💛").then(r => {
            msg.react("💚").then(r => {
              msg.react("💙").then(r => {
                msg.react("🐸").then(r => {
                  msg.react("💩").then(r => {
                    msg.react("😡").then(r => {
                      msg.react("😈").then(r => {
                        msg.react("💀").then(r => {
                          msg.react("😜").then(r => {
                            msg.react("❌").then(r => {
                              let activeFilter = (reaction, user) =>
                                reaction.emoji.name === "🖤" &&
                                user.id === message.author.id;

                              let active = msg.createReactionCollector(
                                activeFilter,
                                { time: 15000 }
                              );

                              //red
                              active.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "Black")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#000000")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون الأسود**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });

                              //لون اسود

                              let y1Filter = (reaction, user) =>
                                reaction.emoji.name === "❤" &&
                                user.id === message.author.id;

                              let y1 = msg.createReactionCollector(y1Filter, {
                                time: 15000
                              });

                              //t
                              y1.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "D-Red")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#FF0000")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون الأحمر الغامق**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });

                              //لون احمر
                              let y2Filter = (reaction, user) =>
                                reaction.emoji.name === "💛" &&
                                user.id === message.author.id;

                              let y2 = msg.createReactionCollector(y2Filter, {
                                time: 15000
                              });

                              y2.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "Yellow")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#e7fa02")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون الاصفر**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });

                              //الون الاخضر

                              let dgFilter = (reaction, user) =>
                                reaction.emoji.name === "💚" &&
                                user.id === message.author.id;

                              let dg = msg.createReactionCollector(dgFilter, {
                                time: 15000
                              });

                              dg.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "D-Green")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#09fa2a")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون الاخضر**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });
                              //الون اللبني

                              let aqFilter = (reaction, user) =>
                                reaction.emoji.name === "💙" &&
                                user.id === message.author.id;

                              let aq = msg.createReactionCollector(aqFilter, {
                                time: 15000
                              });

                              aq.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "Aqua")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#00BFFF")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون اللبني**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });
                              //الون الازرق فاتح

                              let grFilter = (reaction, user) =>
                                reaction.emoji.name === "🐸" &&
                                user.id === message.author.id;

                              let gr = msg.createReactionCollector(grFilter, {
                                time: 15000
                              });

                              gr.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "Green")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#00FF00")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون الأخضر**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });

                              let brFilter = (reaction, user) =>
                                reaction.emoji.name === "💩" &&
                                user.id === message.author.id;

                              let br = msg.createReactionCollector(brFilter, {
                                time: 15000
                              });

                              br.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "Brown")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#3B170B")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون البني**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });

                              let reFilter = (reaction, user) =>
                                reaction.emoji.name === "😡" &&
                                user.id === message.author.id;

                              let re = msg.createReactionCollector(reFilter, {
                                time: 15000
                              });

                              re.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "Red")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#FF0000")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون الأحمر**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });

                              let prFilter = (reaction, user) =>
                                reaction.emoji.name === "😈" &&
                                user.id === message.author.id;

                              let pr = msg.createReactionCollector(prFilter, {
                                time: 15000
                              });

                              pr.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "Purple")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#A901DB")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون الأرجواني**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });

                              let whFilter = (reaction, user) =>
                                reaction.emoji.name === "💀" &&
                                user.id === message.author.id;

                              let wh = msg.createReactionCollector(whFilter, {
                                time: 15000
                              });

                              wh.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "White")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#ffffff")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون الأبيض**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });

                              let orFilter = (reaction, user) =>
                                reaction.emoji.name === "😜" &&
                                user.id === message.author.id;

                              let or = msg.createReactionCollector(orFilter, {
                                time: 15000
                              });

                              or.on("collect", r => {
                                message.member.addRole(
                                  message.guild.roles.find("name", "Orange")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("#FFBF00")

                                  .setDescription(
                                    "**:art:تم اعطائك اللون الأرجواني**"
                                  )
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });

                              let y6Filter = (reaction, user) =>
                                reaction.emoji.name === "❌" &&
                                user.id === message.author.id;

                              let y6 = msg.createReactionCollector(y6Filter, {
                                time: 15000
                              });

                              y6.on("collect", r => {
                                message.member.removeRole(
                                  message.guild.roles.find("name", "black")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "D-Red")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "Yellow")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "D-Green")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "Aqua")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "Green")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "Brown")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "Red")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "Purple")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "White")
                                );
                                message.member.removeRole(
                                  message.guild.roles.find("name", "Orange")
                                );

                                const embed = new Discord.RichEmbed()
                                  .setColor("RANDOM")

                                  .setDescription("**:art:تم ازالة اللون**")
                                  .setFooter(
                                    message.author.tag,
                                    message.author.avatarURL
                                  );

                                message.channel.sendEmbed(embed).then();
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }
});

client.on("message", message => {
  if (message.content === prefix + "creatcolores") {
    if (!message.channel.guild)
      return message.channel.send("**This Commnad only For Servers !**");

    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel
        .send("**You Dont Have** `ADMINISTRATOR` **premission**")
        .then(msg => msg.delete(6000));
    message.guild.createRole({
      name: "Black",
      color: "#000000",
      permissions: []
    });
    message.guild.createRole({
      name: "D-Red",
      color: "#e64d62",
      permissions: []
    });
    message.guild.createRole({
      name: "Yellow",
      color: "#ffea35",
      permissions: []
    });
    message.guild.createRole({
      name: "D-Green",
      color: "#bce86d",
      permissions: []
    });
    message.guild.createRole({
      name: "Aqua",
      color: "#5dafdf",
      permissions: []
    });
    message.guild.createRole({
      name: "Green",
      color: "#70ca70",
      permissions: []
    });
    message.guild.createRole({
      name: "Brown",
      color: "#9a5746",
      permissions: []
    });
    message.guild.createRole({
      name: "Red",
      color: "#ff0025",
      permissions: []
    });
    message.guild.createRole({
      name: "Purple",
      color: "#aa8fd6",
      permissions: []
    });
    message.guild.createRole({
      name: "White",
      color: "#f9f9f9",
      permissions: []
    });
    message.guild.createRole({
      name: "Orange",
      color: "#ffcc4d",
      permissions: []
    });

    message.channel.sendMessage({
      embed: new Discord.RichEmbed()
        .setColor("#502faf")
        .setAuthor(`${message.author.username}'`, message.author.avatarURL)
        .setDescription("``الالوان قيد الانشاء ....``")
    });
  }
});
//color





//فيفاوي

client.on("message", async message => {
  var room;
  var title; //HactorMC
  var duration; //HactorMC
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if (message.content.startsWith(prefix + "giveaway")) {
    //return message.channel.send('**في مشكله ببعض الاساسيات من فضلك انتظر شوي**');
    if (!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        ":heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**"
      );
    message.channel
      .send(`**من فضلك اكتب اسم الروم بدون منشن ( # )**`)
      .then(msgg => {
        message.channel
          .awaitMessages(filter, {
            max: 1, //HactorMC
            time: 20000,
            errors: ["time"]
          })
          .then(collected => {
            let room = message.guild.channels.find(
              "name",
              collected.first().content
            );
            if (!room)
              return message.channel.send(
                "**لم اقدر علي ايجاد الروم | اعد المحاوله لاحقا**"
              );
            room = collected.first().content;
            collected.first().delete();
            msgg.edit("**اكتب مدة القيف اواي بالدقائق**").then(msg => {
              message.channel
                .awaitMessages(filter, {
                  max: 1, //HactorMC
                  time: 20000,
                  errors: ["time"]
                })
                .then(collected => {
                  if (isNaN(collected.first().content))
                    return message.channel.send(
                      ":heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**"
                    );
                  duration = collected.first().content * 60000;
                  collected.first().delete();
                  msgg
                    .edit(
                      ":eight_pointed_black_star:| **اكتب على ماذا تريد القيف اواي**"
                    )
                    .then(msg => {
                      message.channel
                        .awaitMessages(filter, {
                          max: 1,
                          time: 20000,
                          errors: ["time"]
                        })
                        .then(collected => {
                          title = collected.first().content;
                          collected.first().delete();
                          try {
                            let giveEmbed = new Discord.RichEmbed()
                              .setAuthor(
                                message.guild.name,
                                message.guild.iconURL
                              )
                              .setTitle(title)
                              .setDescription(
                                `المدة : ${duration / 60000} دقائق`
                              )
                              .setFooter(
                                message.author.username,
                                message.author.avatarURL
                              );
                            message.guild.channels
                              .find("name", room)
                              .send(giveEmbed)
                              .then(m => {
                                let re = m.react("🎉");
                                setTimeout(() => {
                                  let users = m.reactions.get("🎉").users;
                                  let list = users
                                    .array()
                                    .filter(u => u.id !== m.author.id);
                                  let gFilter =
                                    list[
                                      Math.floor(Math.random() * list.length) +
                                        0
                                    ];
                                  if (users.size === 1)
                                    gFilter = "**لم يتم التحديد**";
                                  let endEmbed = new Discord.RichEmbed()
                                    .setAuthor(
                                      message.author.username,
                                      message.author.avatarURL
                                    )
                                    .setTitle(title)
                                    .addField(
                                      "انتهى القيف اواي !",
                                      `الفائز هو : ${gFilter}`
                                    )
                                    .setFooter(
                                      message.guild.name,
                                      message.guild.iconURL
                                    );
                                  m.edit(endEmbed);
                                }, duration);
                              });
                            msgg.edit(
                              `:heavy_check_mark:| **تم اعداد القيف اواي**`
                            );
                          } catch (e) {
                            msgg.edit(
                              `:heavy_multiplication_x:| **لم اقدر علي اعداد القيف اواي بسبب عدم توفر البرمشن المطلوب**`
                            );
                            console.log(e);
                          }
                        });
                    });
                });
            });
          });
      });
  }
});

///سحب جميع الاعضاء

client.on("message", message => {
  var prefix = "=";
  if (message.content.startsWith(prefix + "mall")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send("**:x: You Dont Have Perms `MOVE_MEMBERS`**");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null)
      return message.channel.send(`**You Have To Be In Room Voice**`);
    var author = message.member.voiceChannelID;
    var m = message.guild.members.filter(m => m.voiceChannel);
    message.guild.members
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      })
      .setTitle(`✽ **Premium**`)
      .setImage(
        ""
      );

    message.channel.send(
      `**:white_check_mark: Success Moved All To Your Channel**`
    );
  }
});


//فتح و اغلاق الشات


client.on("message", message => {
  if (message.content === "$close") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("تم تقفيل الشات");
      });
  }
  if (message.content === "$open") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("تم فتح الشات  ");
      });
  }
});






//mute


client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "=unmute") {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** لا يوجد لديك برمشن 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find("name", "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find("name", "Muted");
    if (!muteRole)
      return message
        .reply("** لا يوجد لديك رتبه الميوت 'Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** يجب عليك منشنت شخص اولاً**")
        .catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("الأستعمال:", "اسكت/احكي")
      .addField(
        "تم فك الميوت عن:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "بواسطة:",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** لا يوجد لدي برمشن Manage Roles **")
        .catch(console.error);

    if (message.guild.member(user).removeRole(muteRole.id)) {
      return message
        .reply("**:white_check_mark: .. تم فك الميوت عن الشخص **")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .removeRole(muteRole)
        .then(() => {
          return message
            .reply("**:white_check_mark: .. تم فك الميوت عن الشخص **")
            .catch(console.error);
        });
    }
  }
});



client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "=mute") {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** لا يوجد لديك برمشن 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find("name", "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find("name", "Muted");
    if (!muteRole)
      return message
        .reply("** لا يوجد رتبة الميوت 'Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** يجب عليك منشنت شخص اولاً**")
        .catch(console.error);

    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("الأستعمال:", "اسكت/احكي")
      .addField(
        "تم ميوت:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "بواسطة:",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** لا يوجد لدي برمشن Manage Roles **")
        .catch(console.error);

    if (message.guild.member(user).roles.has(muteRole.id)) {
      return message
        .reply("**:white_check_mark: .. تم اعطاء العضو ميوت**")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .addRole(muteRole)
        .then(() => {
          return message
            .reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**")
            .catch(console.error);
        });
    }
  }
});



//ticket
client.on("message", message => {
  if (message.content.startsWith("=new")) {
    const reason = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!message.guild.roles.exists("name", "Fivem support"))
      return message.channel.send(
` لازم تسوي رتبة اسمها \`Fivem support\`.`
      );
    if (
      message.guild.channels.exists(
        "name",
        "ticket-{message.author.id}" + message.author.id
      )
    )
      return message.channel.send(`You already have a ticket open.`);
    message.guild
      .createChannel(`ticket-${message.author.username}`, "text")
      .then(c => {
        let role = message.guild.roles.find("name", "Fivem support");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        message.channel.send(
          `:white_check_mark: Your ticket has been created, #${c.name}.`
        );
        const embed = new Discord.RichEmbed()
          .setColor(0xcf40fa)
          .addField(
            `Hey ${message.author.username}!`,
            `الرجاء شرح مشكلتك`
          )
          .setTimestamp();
        c.send({
          embed: embed
        });
      })
      .catch(console.error);
  }
}); 



// الرد التلقائي

client.on("message", msg => {
  if (msg.content === "السلام عليكم") {
    msg.reply("**و عليكم السلام الرجاء شرح مشكلتك واذا كان عندك صور للمشكلة بيكون افضل**");
  }
});

client.on("message", msg => {
  if (msg.content === "سلام عليكم") {
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
client.user.setGame(`DENVER`,"https://www.twitch.tv/sammour")
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
    if(message.content.startsWith(prefix + "help")) {
        let help = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`**__برودكاست بوت | Version 1.1__ 

            برودكاست عادي : ${prefix}bc
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


client.login(process.env.BOT_TOKEN);
