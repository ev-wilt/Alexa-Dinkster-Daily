const Alexa = require('ask-sdk-core');

const PlayDinksterHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'PlayDinksterIntent');
  },
  handle(handlerInput) {
    let audio = '<audio src="https://s3.amazonaws.com/dinkster-bucket/dinkster.mp3" />';
    return handlerInput.responseBuilder
      .speak("Here's your daily Dinkster!" + `${audio}`)
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
      PlayDinksterHandler
  )
  .lambda();