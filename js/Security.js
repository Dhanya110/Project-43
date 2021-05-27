class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(60,230);
        this.access1.style('background', 'lightblue');  

        this.button1 = createButton('Check');
        this.button1.position(110,260);
        this.button1.style('background', 'violet');    

        this.access2 = createInput("Code1")
        this.access2.position(450,230);
        this.access2.style('background', 'lightblue');  

        this.button2 = createButton('Check');
        this.button2.position(500,260);
        this.button2.style('background', 'violet');
//add code for creating and positioning the third input box and button

        this.access3 = createInput("Code1")
        this.access3.position(770,230);
        this.access3.style('background', 'lightblue');  

        this.button3 = createButton('Check');
        this.button3.position(830,260);
        this.button3.style('background', 'violet');

        this.access4 = createInput("Code1")
        this.access4.position(230,410);
        this.access4.style('background', 'lightblue');  

        this.button4 = createButton('Check');
        this.button4.position(280,440);
        this.button4.style('background', 'violet');

        this.access5 = createInput("Code1")
        this.access5.position(640,410);
        this.access5.style('background', 'lightblue');  

        this.button5 = createButton('Check');
        this.button5.position(700,440);
        this.button5.style('background', 'violet');
        
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
//add code for what happens when the third button is pressed
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        }); 

        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score++;
            }
        });

        this.button5.mousePressed(() => {
            if(system.authenticate(accessCode5,this.access5.value())){
                this.button5.hide();
                this.access5.hide();
                score++;
            }
        });

    }
}