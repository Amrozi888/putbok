let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ 4 Bulan
├ 1 Bulan
├ 8 Bulan
└────
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Pulsa : 089518965891
Dana : 089518965891
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: silahkan cek katalog owner https://wa.me/p/5041857039194512/62858228754046,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '4 Bulan', description: "15.000\nSewa bot tanpa batasan waktu.", rowId:".masuk"},
        {title: '1 Bulan', description: "25.000\nSewa bot selama 1 bulan.", rowId:".masuk"},
        {title: '8 Bulan', description: "45.000\nSewa bot selama 8 Bulan.", rowId:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".snk"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy
