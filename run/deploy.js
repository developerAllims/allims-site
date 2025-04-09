require('dotenv').config()

const { Client } = require('basic-ftp')

const path = require('path')

;(async () => {
  const { FTP_HOST, FTP_PORT, FTP_USER, FTP_PASS } = process.env
  const client = new Client()
  client.ftp.verbose = true
  try {
    await client.access({
      host: FTP_HOST,
      port: Number.parseInt(FTP_PORT),
      user: FTP_USER,
      password: FTP_PASS,
      secure: false
    })
    await client.cd('public_html')
    const localDir = path.resolve('../dist')
    //const remoteDir = path.resolve('/public_html')
    await client.uploadFromDir(localDir)
    //console.log(await client.pwd())
    //await client.uploadFrom('README.md', 'README_FTP.md')
    //await client.downloadTo('README_COPY.md', 'README_FTP.md')
  } catch (err) {
    console.log(err)
  }
  client.close()
})()
