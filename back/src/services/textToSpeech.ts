// import { pipeline } from "node:stream/promises";
// import { createWriteStream } from "node:fs";
// import { Readable } from "stream";
// import got from "got";

// async function textToSpeech() {
//     await pipeline(
//     Readable.from(['Продолжительность жизни альпаки в дикой природе составляет около 15-20 лет, а в неволе может достигать 25-30 лет.']),
//     got.stream.post(
//         `https://api.narakeet.com/text-to-speech/m4a?voice=Ivan`,
//         {
//             headers: {
//                 accept: "application/octet-stream",
//                 "x-api-key": APIKEY,
//                 "content-type": "text/plain",
//             },
//         }
//     ),
//     createWriteStream("result.mp3")
// );


