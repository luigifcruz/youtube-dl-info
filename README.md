### youtube-dl-info

Get actual video link (or any other metadata you want) of any compatible website of youtube-dl like YouTube, Twitter, Vine and much more! And also have the practice of JSON and NodeJS.

### Installation

IMPORTANT: You will need to install [youtube-dl](https://github.com/rg3/youtube-dl/#installation) first.

    npm install youtube-dl-info

### Demonstration

#### Input

```javascript
https://twitter.com/TheMichaelMoran/status/673581573409775617
```

#### Output

```json
{
	"display_id": "673581573409775617",
	"extractor": "twitter",
	"playlist": null,
	"uploader": "Michael Moran",
	"title": "Michael Moran - December 7th tomorrow. No avoiding it now. Christmas is coming\u2026",
	"url": "https://pbs.twimg.com/tweet_video/CVkK1qJWIAESurD.mp4",
	"extractor_key": "Twitter",
	"format": "0 - unknown",
	"thumbnail": null,
	"width": null,
	"ext": "mp4",
	"playlist_index": null,
	"webpage_url": "https://twitter.com/TheMichaelMoran/status/673581573409775617",
	"requested_subtitles": null,
	"id": "673581573409775617",
	"format_id": "0",
	"height": null,
	"http_headers": {
		"Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
		"Accept-Language": "en-us,en;q=0.5",
		"Accept-Encoding": "gzip, deflate",
		"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
		"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20150101 Firefox/20.0 (Chrome)"
	},
	"uploader_id": "TheMichaelMoran",
	"webpage_url_basename": "673581573409775617",
	"description": "Michael Moran on Twitter: \"December 7th tomorrow. No avoiding it now. Christmas is coming\u2026 https://t.co/fjD1kjHyYb\""
}
```

### Usage

```javascript
var info = require('youtube-dl-info');

var url = "https://twitter.com/TheMichaelMoran/status/673581573409775617";

info.get(url, function(err, json){
   if (err) throw err; // Crash if returns some error.
   console.log(json) // Show you the URL Video info.
})
```

### API

### shorten(url, callback)
* `url` URL you want to parse info.
* `callback(err, json)` JSON callback with URL video info.
