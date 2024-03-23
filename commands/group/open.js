const openGroup = async (client, m, getGroupAdmins, admin, group, botAdmin,isAdmin, isBotAdmin) => {
  if (!m.isGroup) return m.reply(group);
  if (!isBotAdmin) return m.reply(botAdmin);
  if (!isAdmin) return m.reply(admin);

  await client.groupSettingUpdate(m.chat, 'not_announcement');
  m.reply('Group successfully opened!');
};

export default openGroup;