let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, fla + 'donasi', `
┌「 *Dana • Gopay* 」
├ 085828764046
└────
`.trim(), '© zifabotz2', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
