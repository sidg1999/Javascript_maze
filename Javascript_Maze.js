<!--

    Sid Gupta
    January 15th, 2016
    Creates a maze game for the user to solve. The maze is generated from a 2-D array, and the movements are controlled by user input from the arrow keys

-->


<!DOCTYPE html>
<html>
    <head>
        <style type="text/css">
            body{margin: 40px; background:#666; }
            #myCanvas{ background:#ffffff; border:#000 0px solid; }
        </style>
        <script>

            function mainMethod() {
                //the maze is initialized from a 2-D array like grid. 1 represents a wall, and 0 represents a free space to travel through

                //          0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40            
        var maze  /*0*/ = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    /*1*/  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    /*2*/  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
                    /*3*/  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
                    /*4*/  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                    /*5*/  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
                    /*6*/  [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
                    /*7*/  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
                    /*8*/  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                    /*9*/  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
                    /*10*/ [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                    /*11*/ [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                    /*12*/ [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
                    /*13*/ [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
                    /*14*/ [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
                    /*15*/ [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                    /*16*/ [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                    /*17*/ [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                    /*18*/ [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                    /*19*/ [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
                    /*20*/ [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
                    /*21*/ [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
                    /*22*/ [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1],
                    /*23*/ [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
                    /*24*/ [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
                    /*25*/ [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
                    /*26*/ [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                    /*27*/ [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                    /*28*/ [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
                    /*29*/ [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    /*30*/ [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                ];
                //declare variables
                var indexX;
                var indexY;
                var num;
                var orignlX;
                var orignlY;
                var badInput;
                var input;
                var phrase;

                //declare the context (ctx). this allows you to draw to the canvas that is created in the web browser
                var ctx = document.getElementById('myCanvas').getContext('2d');
                //set the fill style to white
                ctx.fillStyle = "white";

                //draw the maze
                for (var i = 0; i < 31; i++) {
                    for (var j = 0; j < 41; j++) {
                        //look through each element of the maze by rows (look through all elements in row1, then all elements in row2
                        num = maze[i][j];
                        //initialize your x and y indexes
                        indexX = 0;
                        indexY = 0;
                        //if the element is 0, that means it is free space, and it is a white block
                        if (num === 0) {
                            ctx.fillStyle = "white";
                            //if it is 1, that means it is a wall and a black block
                        } else {
                            ctx.fillStyle = "black";
                        }
                        //each block is 20x20 pixels. find the exact pixel location of the block and place it there (index * 20);
                        for (var q = 0; q < i; q++) {
                            indexY = indexY + 20;
                        }
                        for (var z = 0; z < j; z++) {
                            indexX = indexX + 20;
                        }
                        //fill the block at the designated index
                        ctx.fillRect(indexX, indexY, 20, 20);
                    }
                }

                //fill in the end position block green so user knows where to go
                indexX = 21 * 20;
                indexY = 30 * 20;
                ctx.fillStyle = "green";
                ctx.fillRect(indexX, indexY, 20, 20);

                //assign start position of x and y
                indexX = 23 * 20;
                indexY = 30 * 20;
                ctx.fillStyle = "red";
                ctx.fillRect(indexX, indexY, 20, 20);
                //converts to array index positions
                indexX = indexX / 20;
                indexY = indexY / 20;

                //when the user enters arrow key input, perform the following
                document.onkeydown = function (e) {
                    //set the x and y positions to a seperate variable, for they will be changed
                    orignlX = indexX;
                    orignlY = indexY;
                    switch (e.keyCode) {
                        //if the left key is pressed, see if the left element is a wall or free space
                        case 37:
                            //if it is a free space, move one space to the left (-1, 0)
                            if (maze[indexY][indexX - 1] === 0) {
                                indexX = indexX - 1;
                                //move the square
                                moveSquare(indexX, indexY, orignlX, orignlY);
                            }
                            break;
                        case 38:
                            //since you are starting at the bottom, if it is a free space, move one space up (0, -1)
                            if (maze[indexY - 1][indexX] === 0) {
                                indexY = indexY - 1;
                                //move the square
                                moveSquare(indexX, indexY, orignlX, orignlY);
                            }
                            break;
                        case 39:
                            //if it is a free space, move one space to the right (1, 0)
                            if (maze[indexY][indexX + 1] === 0) {
                                indexX = indexX + 1;
                                //move the square
                                moveSquare(indexX, indexY, orignlX, orignlY);
                            }
                            break;
                        case 40:
                            //since you are starting at the bottom, if it is a free space, move one space down (0, 1)
                            if (maze[indexY + 1][indexX] === 0) {
                                indexY = indexY + 1;
                                //move the square
                                moveSquare(indexX, indexY, orignlX, orignlY);
                                //the only way to get to the green square is moving down. if you move down and you are at the green square,
                            } else if (maze[indexY + 1][indexX] === 3) {
                                phrase = "";
                                badInput = true;
                                //tell the user that they have completed the maze. ask them if they want to play again (yes or no) and repeat asking until
                                //they respond with an appropriate input (Y or N)
                                while (badInput) {
                                    input = prompt(phrase + "Congratz! you've completed the maze! Play again? (Y or N)");
                                    if (input === "Y") {
                                        //if they answered yes, place a white square in place of your current position and move the square back 
                                        //to the starting position
                                        moveSquare(23, 30, indexX, indexY);
                                        //reset the x and y indexes to the starting position
                                        indexX = 23;
                                        indexY = 30;
                                        badInput = false;

                                        //if they answered no, let them roam the maze freely    
                                    } else if (input === "N") {
                                        alert("Have fun exploring the maze!");
                                        badInput = false;
                                        //output a response indicating that they did not give good input.
                                    } else {
                                        phrase = "You did not enter appropriate input.\n";
                                    }
                                }
                            }
                            break;
                    }
                };

                /**
                 * if there is an empty space ahead, places a red block in the space and replaces the previous space with a white one (moves block)
                 * @param indexX (positions of the new block
                 * @param indexY
                 * @param orignlX (positions of the current block
                 * @param orignlY 
                 * @return void
                 */
                var moveSquare = function moveSquare(indexX, indexY, orignlX, orignlY) {
                    //convert the array indices into the pixel indices
                    indexX = indexX * 20;
                    indexY = indexY * 20;
                    orignlX = orignlX * 20;
                    orignlY = orignlY * 20;
                    //place a white block where the user originally was
                    ctx.fillStyle = "white";
                    ctx.fillRect(orignlX, orignlY, 20, 20);
                    //place a red block where the user wants to go
                    ctx.fillStyle = "red";
                    ctx.fillRect(indexX, indexY, 20, 20);
                };
            };

            window.onload = mainMethod;
        </script>   
    </head>
    <body>
        <canvas id="myCanvas" width="820" height="620"></canvas>
    </body>
</html>
