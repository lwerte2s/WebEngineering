export default {
    probs:['mytext', 'words', 'spaces' ],
        template: '<div><textarea v-model="mytext"></textarea>'+
        '<p>Anzahl der Wörter: {{count(mytext)[0]}}</p>'+
        '<p>Anzahl der Buchstaben: {{count(mytext)[1]}}</p>'+
        '<p>Anzahl der  Leerzeichen: {{count(mytext)[2]}}</p></div>',
    data: function (){ return {mytext: ""}},
    methods: { count(){
        let words = this.mytext.split(/\s+/);
        let woerter = 0;
        if (words[words.length-1] === ""){
            woerter = words.length-1;
        } else {
            woerter = words.length;
        }
        console.log(words);
        const lengthText = words.join("").length
        return [woerter, lengthText, this.mytext.length-lengthText]

    }
    }
}
