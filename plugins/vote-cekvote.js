let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.sendButton(m.chat, `Tidak ada voting digrup ini!`, '© zifabotz2', 'Mulai', `${usedPrefix}+vote`, m)
    let [reason, upvote, devote] = conn.vote[id]
    let caption = `
「 *Vote* 」

*Alasan:* ${reason}

*Upvote*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split`@`[0]).join('\n')}

*Devote*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split`@`[0]).join('\n')}

© Zifabotz2
    `.trim()
    await conn.send3Button(m.chat, caption, '© zifabotz2', 'Upvote', `${usedPrefix}upvote`, 'Devote', `${usedPrefix}devote`, 'Hapus', `${usedPrefix}-vote`, m)
}
handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote$/i

module.exports = handler
