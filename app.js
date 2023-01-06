var ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath('C:/ffmpeg/bin/ffmpeg.exe')
ffmpeg.setFfprobePath('C:/ffmpeg/bin/ffprobe.exe')
function compress() {
  var filename = 'js.mp4'
  ffmpeg(filename)
    .withOutputFormat('mkv')
    .on('end', function () {
      console.log('finished')
    })
    .on('error', function (err) {
      console.log(err)
    })
    .save('video')
    // .saveToFile('js.compressed.mkv')
    // .videoCodec('libx264')
    // .noAudio()
    // .size('1280x720')
    // .on('error', function (err) {
    //   console.log(err)
    // })
    // .on('end', function (data) {
    //   console.log('finished')
    // })
    .run()
}
compress()
