const closeGroup = async (client, m, getGroupAdmins, admin, group, botAdmin,isAdmin, isBotAdmin) => {
  if (!m.isGroup) return m.reply(group);
  if (!isBotAdmin) return m.reply(botAdmin);
  if (!isAdmin) return m.reply(admin);

  await client.groupSettingUpdate(m.chat, 'announcement');
  m.reply('Group successfully locked!');
};

export default closeGroup;