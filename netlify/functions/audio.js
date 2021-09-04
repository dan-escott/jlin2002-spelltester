const axios = require('axios');
exports.handler = async(event, context) => {
    try {
        const response = await axios.post("https://texttospeech.googleapis.com/v1/text:synthesize?key=" + process.env.TTS_API_KEY, {
            "audioConfig": {
                "audioEncoding": "LINEAR16",
                "pitch": 0.1,
                "speakingRate": 0.9
            },
            "input": {
                "text": JSON.parse(event.body).word
            },
            "voice": {
                "languageCode": "en-AU",
                "name": "en-AU-Wavenet-A"
            }
        })
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        }
    } catch (error) {
        return {
            statusCode: 404,
            body: error.toString(),
        }
    }
}