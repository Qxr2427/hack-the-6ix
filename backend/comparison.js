const { ConsoleLoggingListener } = require('microsoft-cognitiveservices-speech-sdk/distrib/lib/src/common.browser/Exports');

module.exports = function(keywordsinput, entitiesinput) {
const keywords = require('./keywords.js');
const entities = require('./entities.js');
const similarity = require('./similarity.js');
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const mindmapSchema = require('./models/mindmap.model.js')
const mindmap = mongoose.model('mindmaps', mindmapSchema, 'mindmaps')
const link = 'http://d4054ef2-cb3f-4871-84f8-05f7f5fa6158.canadacentral.azurecontainer.io/score'

console.log(entitiesinput)
console.log(keywordsinput);
var index = 0;
entitiesinput1 = entitiesinput;
layer1 = [];
//proof of concept code to get longest entity array
for (let i = 0; i < entitiesinput1.length; i++) {
    if (entitiesinput1[i].matches.length > index) {
        index = entitiesinput1[i].matches.length
        mainideaindex = i
        //console.log(entitiesinput1[mainideaindex].name);                               //main idea
        entitiesinput1.splice(i, 1)
        i++
        //console.log(index, i)
    }
    /* if ('wikipediaUrl' in entitiesinput[i]); {
        layer1.push(entitiesinput1[i].name) 
        console.log(entitiesinput1[i])               //2nd layer
        entitiesinput1.splice(i, 1)
    } */
    
};

for (let i = 0; i < entitiesinput.length; i++) {
    for (let j = 0; j < keywordsinput.length; j++) {
        if (entitiesinput[i].name == keywordsinput[j]) {
                layer1.push(keywordsinput[j])  //if keyword and entity match, add to first layer
        }
    }
    };

console.log("MAIN IDEA", entitiesinput1[mainideaindex].name);
console.log(layer1)  //1st layer


const headers = {
    'Content-Type': 'application/json',
    'Accept': '*/*'
}
const body = JSON.stringify({'data': array });
 
    

fetch(link, {method: 'POST', headers: headers, body: body})
.then(response => response.text())
.then(responseData => {
console.log(responseData)

});







//proof of concept code to search api


};