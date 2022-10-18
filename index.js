function shout(string) {
    return string.toUpperCase();

}

function whisper(string) {
    return string.toLowerCase();

}

const spy = "HELLO"

function logShout(spy) {
    console.log(spy.toUpperCase())
}

function logWhisper(spy) {
    console.log(spy.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    
  if (string === string.toLowerCase()) {
    return "I can\'t hear you!"; }
    
  else if (string === string.toUpperCase()) {
    return "YES INDEED!"; }

  else if (string === "Let\'s have dinner together!") {
    return "I would love to!" }

  else {}

  
}