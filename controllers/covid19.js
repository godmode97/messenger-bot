const request = require('request')

exports.fetch_active = function (country = 'philippines', callback = () => { }) {
  request({
    uri: `https://api.covid19api.com/total/country/${country}/status/confirmed`,
    headers: {
      'Content-Type': 'application/json'
    }
  }, function (error, response, body = []) {
    if (!error) {
      const [latest] = [...JSON.parse(body)].reverse()
      callback(latest)
    }

  })
}
