// Part 1: Number Facts

// 1
async function getFact(num){
    let req = await axios.get(`http://numbersapi.com/${num}?json`);
    console.log(req.data.text);
}


// 2
async function factMultipleNum(randomNumbers){
    let req = await axios.get(`http://numbersapi.com/${randomNumbers}?json`);
    console.log(req.data);
}

// 3

async function multiFacts(num){
    let req = await Promise.all([
        axios.get(`http://numbersapi.com/${num}?json`),
        axios.get(`http://numbersapi.com/${num}?json`),
        axios.get(`http://numbersapi.com/${num}?json`),
        axios.get(`http://numbersapi.com/${num}?json`),
    ]);
    console.log(req[0].data.text);
    console.log(req[1].data.text);
    console.log(req[2].data.text);
    console.log(req[3].data.text);
}

// Part 2: Deck of Cards

// 1
async function pickRandom(){
    let req = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1");
    console.log(req.data.cards[0].value + " of " + req.data.cards[0].suit);
}

// 2

async function randomCardSameDeck(){
    let deckRequest = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    let deckId = deckRequest.data.deck_id;
    let draWCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    console.log(draWCard.data.cards[0].value + " of " + draWCard.data.cards[0].suit);

}

//3



async function game(){
    let deckRequest = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1");
    let deckId = deckRequest.data.deck_id;
    console.log(deckId);
    $("#pick").on("click",async function(deck_id){
        let cardPick = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        let deg = Math.random() * 360;
        $(".result").append(
            $('<img>', {
              src: cardPick.data.cards[0].image,
              css: {
                transform: `rotate(${deg}deg)`
              }
            })
        );

    });
    
}


game();
