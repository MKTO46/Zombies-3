class Player {
    constructor() {}

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }
    getValue1(){
        database.ref("player1").on('value',function(data){
            position = data.val()
            player1.name = position.name
            player1.x = position.x
            player1.y = position.y
        })
    }
    getValue2(){
        database.ref("player2").on('value',function(data){
            position = data.val()
            player2.name = position.name
            player2.x = position.x
            player2.y = position.y
        })
    }
    updateValue1(name,x,y){
        database.ref("player1").set({
name: name,
x: x,
y: y
        })
    }
    updateValue2(name,x,y){
        database.ref("player2").set({
name: name,
x: x,
y: y
        })
    }
}