class Form{
    constructor(){
         this.title = createElement('h2')
         this.input = createInput('Name')
        this.button = createButton('Start')
        this.greeting = createElement('h3')
        this.reset = createButton('Reset')
    }
    hide(){
        this.title.hide() 
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        //createElement is used to create heading and h2 is the size of the heading
        //.html is used to give the content in the heading
        this.title.html('Zombie invasion')
        this.title.position(120,0)
        this.reset.position(700,20)
        
        //createInput creates the input place
        
        this.input.position(130,160)
    
        //createButton creates a button
        
        this.button.position(250,200)
    
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            var name = this.input.value()
            playerCount += 1
            player.updateCount(playerCount)
        
            this.greeting.html('Hello '+ name)
            this.greeting.position(130,160)
        })
        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.updateState(0)
        })
    }
    }