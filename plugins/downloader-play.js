/*
var {
	youtubeSearch,
	youtubedl,
	youtubedlv2,
	youtubedlv3
                } = require('@bochilteam/scraper');
   var handler = async (m, { 
    conn,
    text, 
    usedPrefix
               }) => {
  if (!text) throw 'Enter Title'
  var vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak Ditemukan'
  var { title, 
        description, 
        thumbnail, 
        videoId, 
        durationH, 
        durationS,
        viewH,
        publishedTime
                       } = vid
  var url = 'https://www.youtube.com/watch?v=' + videoId
  let web = `https://ytdl.tiodevhost.my.id/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
  var captionvid = `⭔ Title: ${title}\n⭔ Published: ${publishedTime}\n⭔ Duration: ${durationH}\n⭔ Views: ${viewH}\n⭔ Description: ${description}\n⭔ Url:  ${url}\nID: ${videoId}`
  var pesan = await conn.sendButtonImg(m.chat, thumbnail,  captionvid, '_Audio on progress..._', 'Video', '.ytv ${url}', m, {  
      quoted: m})
 if (durationS > 18000000) return conn.sendMessage(m.chat, { text: `*Link Original:* ${await cut(url)}\n\n_Durasi terlalu panjang_` }, { quoted: pesan })
  conn.sendMessage(m.chat, { audio: { url: web }, mimetype: 'audio/mpeg' }, { quoted: pesan })
}
handler.command = handler.help = ['play','song'];
handler.tags = ['downloader'];
handler.exp = 0;
handler.limit = true;
handler.premium = false;
module.exports = handler;
async function cut(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://api.botcahx.biz.id/api/linkshort/cuttly?link=${url}&apikey=Admin`)
  if (!res.ok) throw false
  return await res.text()
}
*/

var {
	youtubeSearch,
	youtubedl,
	youtubedlv2,
	youtubedlv3
                } = require('@bochilteam/scraper');
   var handler = async (m, { 
    conn,
    text, 
    usedPrefix
               }) => {
  if (!text) throw 'Enter Title'
  var vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak Ditemukan'
  var { title, 
        description, 
        thumbnail, 
        videoId, 
        durationH, 
        durationS,
        viewH,
        publishedTime
                       } = vid
  var url = 'https://www.youtube.com/watch?v=' + videoId

 /*let vide = `https://ytdl.tiodevhost.my.id/?url=${url}&filter=audioandvideo&quality=highestvideo&contenttype=video/mp4`*/

  let web = `https://ytdl.tiodevhost.my.id/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
  var tmb = thumbnail
  var captionvid = `  ∘ Title: ${title}
  ∘ Published: ${publishedTime}
  ∘ Duration: ${durationH}
  ∘ Second: ${durationS}
  ∘ Views: ${viewH}  
  ∘ Url:  ${url}
  ∘ Description: ${description}`
var pesan = await conn.sendMessage(m.chat, {
text: captionvid,
contextInfo: {
externalAdReply: {
title: "",
body: "Powered by",
thumbnailUrl: tmb ,
sourceUrl: web,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})

if (durationS > 18000) return conn.sendMessage(m.chat, { text: `*Link Original:* ${await cut(url)}\n\n_Durasi terlalu panjang..._\n*Duration Limit!*` }, { quoted: pesan })
  conn.sendMessage(m.chat, { audio: { url: web }, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: title,
body: "",
thumbnailUrl: tmb,
sourceUrl: web,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: pesan })
/*await delay(10000);
conn.sendMessage(m.chat, { video: { url: vide }, mimetype: 'video/mp4' }, { quoted: pesan })*/
}
handler.command = handler.help = ['play','song','ds'];
handler.tags = ['downloader'];
handler.exp = 0;
handler.limit = true;
handler.premium = false;
module.exports = handler;
async function cut(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://api.botcahx.biz.id/api/linkshort/bitly?link=${url}&apikey=Admin`)
  if (!res.ok) throw false
  return await res.text()
}
/*async function delay(ms) {
   await new Promise(resolve => setTimeout(resolve, ms));
}*/
