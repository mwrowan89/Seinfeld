let excuseArr = [
    "Sorry, I can't. I have to wash my hair.",
    "I'm really not feeling well.",
    "I have to walk my neighbor's cat.",
    "I have a previous engagement.",
    "My car broke down.",
    "I have to meet my parents for dinner.",
    "I have to attend a work function.",
    "I promised my friend I'd help them move.",
    "I have a dentist appointment.",
    "I'm swamped with work.",
    "Sorry, I have to organize my sock drawer.",
    "I have to return some videotapes.",
    "I'm on a juice cleanse and can't leave the house.",
    "I'm in the middle of a really good book.",
    "My astrologer advised against it.",
    "I'm fasting today.",
    "I'm trapped in an ATM vestibule with Jill Goodacre.",
    "I have a mandatory family game night.",
    "I'm boycotting that establishment.",
    "I'm attending a seminar on sponge-worthiness.",
    "I have to wait for the cable guy.",
    "I'm testing out my new mattress.",
    "I have a pressing engagement with my sofa.",
    "I'm in the middle of a 'Seinfeld' marathon.",
    "I'm allergic to [insert anything here].",
    "I'm on a self-imposed social media detox.",
    "I'm stuck in traffic.",
    "I'm waiting for the plumber to fix my sink.",
    "I have to alphabetize my CD collection.",
    "I'm helping a friend perfect their Elaine dance.",
    "I'm attending a support group for people with fear of commitment.",
    "I'm practicing my yodeling.",
    "I have to reorganize my wallet.",
    "I'm teaching my dog to speak Spanish.",
    "I'm participating in a staring contest with myself.",
    "I'm binge-watching a new series.",
    "I have to research the mating habits of sea turtles.",
    "I'm auditing a yoga class.",
    "I'm meditating.",
    "I'm practicing my magic tricks.",
    "I'm studying the art of origami.",
    "I'm attending a workshop on how to become a pirate.",
    "I'm perfecting my karaoke skills.",
    "I'm participating in a sleep study.",
    "I'm waiting for my laundry to finish.",
    "I'm trying out a new recipe for homemade pasta.",
    "I'm in the middle of a DIY project.",
    "I have to update my fantasy football team lineup.",
    "I'm lost in thought contemplating the meaning of life."
];


document.addEventListener('DOMContentLoaded', () => {

    // let startBtnT = document.getElementById('start-btn-t');
    // startBtnT.addEventListener('click', () => {
    //     pickRandomExcuse(excuseArr);
    // });

    let startBtnB = document.getElementById('start-btn-b');
    startBtnB.addEventListener('click', () => {
        pickRandomExcuse(excuseArr);
    });

});





function pickRandomExcuse(excuseArr) {

    let random = Math.floor(Math.random() * excuseArr.length);
    let newExcuse = excuseArr[random];

    console.log(newExcuse);
    let excuse = document.querySelector('.excuse');
    excuse.textContent = newExcuse ;

};

function moveButton() { 
    if(TopOn === true){
        BotOn === true
    }
}