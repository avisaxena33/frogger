var lives = 3;
var numberOfWins = 0;

var item = new Image();
        item.src = "bmw.jpg";
        var itemX = 250;
        var itemY = 480;
        var finishLine = new Image();
        finishLine.src = "finishline.jpg";
        var finishLineX = 0;
        var finishLineY = 0;
        var pictArray = [];
        var pictArray2 = [];

        
        function initialize() {
            //push an image into the array
            //once it is in the array it can be used by simply calling the array with an index.
            var context = document.getElementById("myCanvas").getContext('2d');
            pictArray.push(createImage("Koala.jpg", "Koala1", -400, 200));
            pictArray.push(createImage("frog.png", "frog", -200, 50));
            pictArray2.push(createImage("Koala.jpg", "Koala3", -300, 300));
            pictArray2.push(createImage("frog2.png", "frog2", -500, 50));
            //fill the image source property with the picture from file
            drawBackground();
        }
    
        function initializeTwo() {
            var context = document.getElementById("myCanvas").getContext('2d');
            pictArray.push(createImage("Koala.jpg", "Koala1", -400, 200));
            pictArray.push(createImage("frog.png", "frog", -200, 50));
            pictArray2.push(createImage("Koala.jpg", "Koala3", -300, 300));
            pictArray2.push(createImage("frog2.png", "frog2", -500, 50));
            drawBackgroundTwo();
        }
    
    
        function initializeThree()
        {
           var context = document.getElementById("myCanvas").getContext('2d');
            pictArray.push(createImage("Koala.jpg", "Koala1", -400, 200));
            pictArray.push(createImage("frog.png", "frog", -200, 50));
            pictArray2.push(createImage("Koala.jpg", "Koala3", -300, 300));
            pictArray2.push(createImage("frog2.png", "frog2", -500, 50));
            //fill the image source property with the picture from file2
            drawBackgroundThree();
        }

        //this function creates an image object.  The properties of the object are set when it is called and
        //can be used with or without an array
        var createImage = function(src, title,xcoord,ycoord) {
            var img   = new Image();
            img.src   = src;
            img.alt   = title;
            img.title = title;
            img.left = xcoord;
            img.top = ycoord;
            return img;
        };

        function startAnimation() {
            animate();
        }
        function stopAnimation() {
            cancelAnimationFrame(a);
            return;
        }
        //all functions in this method will run at the speed of your computers frame rate
        function animate(){
            a=requestAnimationFrame(animate);
            drawBackground();
            drawKoalas();
            drawKoalas2();
            ctx.drawImage(item, itemX, itemY, 30, 30);
            ctx.drawImage(finishLine, finishLineX, finishLineY, 500, 50);
            checkCollision();
            checkWin();
        }
        
        function animateTwo()
        {
            initializeTwo();
            a=requestAnimationFrame(animate);
            drawBackgroundTwo();
            drawKoalas();
            drawKoalas2();
            ctx.drawImage(item, itemX, itemY, 30, 30);
            ctx.drawImage(finishLine, finishLineX, finishLineY, 500, 50);
            checkCollision();
            checkWin();
        }
        
        function animateThree()
        {
            initializeThree();
            a=requestAnimationFrame(animate);
            drawBackgroundThree();
            drawKoalas();
            drawKoalas2();
            ctx.drawImage(item, itemX, itemY, 30, 30);
            ctx.drawImage(finishLine, finishLineX, finishLineY, 500, 50);
            checkCollision();
            checkWin();
        }

        $(document).keydown(function(event) {
            var keycode = (event.keyCode ? event.keyCode : event.which);

            // press w to move up
            if(keycode == 38) {
                itemY -= 20;
            }
            //a
            if(keycode == 37) {
                itemX -= 20;
            }
            // s
            if(keycode == 40) {
                itemY += 20;
            }
            // d
            if(keycode == 39) {
                itemX += 20;
            }

        });

        function checkCollision()
        {
            var context = document.getElementById("myCanvas").getContext('2d');
            for(var i = 0; i < pictArray.length; i++) {
                if(pictArray[i].left + 25 > itemX && pictArray[i].left < itemX + 25 && pictArray[i].top + 25 > itemY && pictArray[i].top < itemY + 25)
                {
                    stopAnimation();
                    clearCanv();
                    lives--;
                    document.getElementById("hearts").innerHTML ="You have " + lives + " lives";
                    if (lives === 0)
                    {
                        context.font= "30px Arial";
                        context.fillStyle = "#FF0000";
                        context.fillText("You Lost!", 30, 30);
                        stopAnimation();
                    }
                }
            }
            for(var i = 0; i < pictArray2.length; i++) {
                if(pictArray2[i].left + 25 > itemX && pictArray2[i].left < itemX + 25 && pictArray2[i].top + 25 > itemY && pictArray2[i].top < itemY + 25)
                {
                    stopAnimation();
                    clearCanv();
                    lives--;
                    document.getElementById("hearts").innerHTML ="You have " + lives + " lives";
                    if (lives === 0) 
                    {
                        context.font= "30px Arial";
                        context.fillStyle = "#FF0000";
                        context.fillText("You Lost!", 30, 30);
                        stopAnimation();
                    }
                }
            }
            
        }

        function checkWin()
        {
            var context = document.getElementById("myCanvas").getContext("2d");
            document.getElementById("wins").innerHTML = "You have won " + numberOfWins + " times";
            if (itemY === 0 && numberOfWins === 0)
            {
                stopAnimation();
                numberOfWins++;
                context.font= "30px Arial";
                context.fillStyle = "#FF0000";
                context.fillText("You have beat level 1!", 30, 30);
                setTimeout(function(){ clearCanvTwo(); }, 2000);
            }
            
            else if (itemY === 0 && numberOfWins === 1)
            {
                stopAnimation();
                numberOfWins++;
                context.font= "30px Arial";
                context.fillStyle = "#FF0000";
                context.fillText("You have beat level 2!", 30, 30);
                setTimeout(function(){ clearCanvThree(); }, 2000);
            }
            
            else if (itemY === 0 && numberOfWins === 2)
            {
                stopAnimation();
                numberOfWins++;
                context.font= "30px Arial";
                context.fillStyle = "#FF0000";
                context.fillText("You have beat level 3!", 30, 30);
                document.getElementById("wins").innerHTML = "You have won " + numberOfWins + " times";
                toGif();
            }
            
            
        }


        // Drawn backgrounds
        function drawBackground() {
            ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "rgb(0,200,25)";	//sets the fill color (neon green)
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
            drawRoads();

        }
        
        function drawBackgroundTwo() {
            ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "rgb(0,200,25)";
            ctx.fillRect(0,0, window.innerWidth, window.innerHeight);
            drawRoadsTwo();
        }
        
        function drawBackgroundThree()
        {
            ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "rgb(0,200,25)";
            ctx.fillRect(0,0, window.innerWidth, window.innerHeight);
            drawRoadsThree();
        }

        function drawRoads() {
            ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.fillRect(-400,250,1000,50);
            ctx.fillRect(-400, 400, 1000, 50);
            ctx.fillRect(-400, 100, 1000, 50);
        }
        
        function drawRoadsThree() {
            ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "rgb(0, 0, 0)";
            ctx.fillRect(-400,250,1000,50);
            ctx.fillRect(-400, 400, 1000, 50);
            ctx.fillRect(-400, 100, 1000, 50);
            ctx.fillRect(-400, 150, 1000, 50);
            ctx.fillRect(-400, 300, 1000, 50);
        }
        
        function drawRoadsTwo() {
            ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.fillRect(-400,250,1000,50);
            ctx.fillRect(-400, 400, 1000, 50);
            ctx.fillRect(-400, 100, 1000, 50);
            ctx.fillRect(-400, 150, 1000, 50);
        }
        function drawKoalas() {
            for(i = 0;i<pictArray.length;i++){
                pictArray[i].left+=5;
                ctx.drawImage(pictArray[i],pictArray[i].left, pictArray[i].top,40,25);
                if(pictArray[i].left>500){
                    pictArray[i].left = -200;
                }
            }
        }
        function drawKoalas2() {
            for(i = 0;i<pictArray2.length;i++){
                pictArray2[i].left-=5;
                ctx.drawImage(pictArray2[i],pictArray2[i].left, pictArray2[i].top,40,25);
                if(pictArray2[i].left<0){
                    pictArray2[i].left = 1000;
                }
            }
        }

    function clearCanv()
    {
        var context = document.getElementById("myCanvas").getContext("2d");
        context.clearRect(0, 0, 500, 500);
        itemY= 480;
        animate();
    }
    
    function clearCanvTwo()
    {
        var context = document.getElementById("myCanvas").getContext("2d");
        context.clearRect(0, 0, 500, 500);
        itemY= 480;
        animateTwo();
    }
    
    function clearCanvThree()
    {
        var context = document.getElementById("myCanvas").getContext("2d");
        context.clearRect(0, 0, 500, 500);
        itemY= 480;
        animateThree();
    }

    function playAgain()
    {
        location.reload();
    }
    
    function toGif()
    {
        window.location.href = "http://giphy.com/gifs/great-job-AL0XsYU0pkFTq";
    }
