const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
class board
{
    constructor(x,y,exist)
    {
        this.x = x * 25 + x * 5;
        this.y = y * 25 + y * 5;
        this.bx = x;
        this.by = y;
        this.exist = exist;
        if (this.exist)
        {
            this.color = "black";
        }
        else
        {
            this.color = "white";
        }
    }
    flipExists()
    {
        if (exist)
        {
            exist = false;
            this.color = "white";
        }
        else
        {
            exist = true;
            this.color = "black";
        }
        this.drawBoard();
    }
    drawBoard()
    {

        drawCell(this);
    }
}
class cell
{
    constructor(x,y,xsize,ysize,xvel,yvel,color)
    {
        this.x = x * 25 + 5;
        this.y = y * 25 + 5;
        this.bx = x;
        this.by = y;
        this.xsize = xsize;
        this.ysize = ysize;
        this.xvel = xvel;
        this.yvel = yvel;
        this.color = color;
    }
    tp(x,y)
    {
        let oldcolor = this.color;
        this.color = "white";
        drawCell(this);
        this.color = oldcolor;
        this.x = x * 25 + 5 * x;
        this.y = y * 25 + 5 * y;
        this.bx = x;
        this.by = y;
        drawCell(this);
    }
    move(x,y)
    {
    if (this.bx != 0 && x != 1 || this.bx != 9 && x != -1)
    {
    if (this.by != 0 && y != 1 || this.by != 19 && y != -1)
    {
        let oldcolor = this.color;
        this.color = "white";
        drawCell(this);
        this.color = oldcolor;
        this.x = this.x + x * 25 + 5 * x;
        this.y = this.y + y * 25 + 5 * y;
        this.bx = this.bx + x;
        this.by = this.by + y;
        drawCell(this);
        }
        }
    }
    rotate(x,y)
    {
        if(x == 1 && this.xvel == -1 || x == -1 && this.xvel == 1 || y == 1 && this.yvel == -1 || y == -1 && this.yvel == 1)
        {
            this.xvel = this.xvel;
            this.yvel = this.yvel;
        }
        else
        {
        this.xvel = x;
        this.yvel = y;
        }
    }
    getPosition(ax)
    {
        if (ax == 0)
        {
            return this.bx;
        }
        if (ax == 1)
        {
            return this.by;
        }
    }
}

var cell1 = new cell(0,0,25,25,0,1,"blue");
drawCell(cell1);
var boardArr = [0];
setup();
setInterval(tick,250)
function refreshboard()
{
        let i = 0;
        while (i != 199)
        {
            i += 1;
            drawCell(boardArr[i])
        }
}
const getValueByIndex = (object, index) => {

    return Object.values(object)[index];
    
    };
function getObjectLength(object) {
    let objectLength = Object.keys(object).length; 
    return objectLength;
}
function RandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
function drawCell(cell0)
{
    ctx.fillStyle = cell0.color;
    ctx.fillRect(cell0.x, cell0.y, 25, 25);
}
function cellcheck(x,y)
{
    let ret = false;
        if (typeof(board[x] == "object"))
        {
            ret = true;
        }
    
    return ret;
}
    function setup()
    {
    let i = 0;
    let a = 1;
    let b = 0;
        ctx.fillStyle = "grey";
        while (a != 12)
        {
        ctx.fillRect(i, 0, 5, 605);
        i += 30;
        a += 1;
        }
        i = 0;
        a = 1;
        while (a != 22)
        {
        ctx.fillRect(0,i, 305, 5);
        i += 30;
        a += 1;
        }
        i = 0;
        a = 0;
        b = 0;
        while (i != 199)
        {
            boardArr[i] = (new board(a,b,false));
            a += 1;
            if (a == 10)
            {
                a = 0;
                b += 1;
            }
            i += 1;
        }
        }
function tick() {
if(ypositions[cell1.bx] == cell1.by + 1)
    {
        ypositions[cell1.bx] = cell1.by;
        cell1 = new cell(0,0,25,25,0,1,"blue");
        }
    cell1.move(cell1.xvel,cell1.yvel);
}
