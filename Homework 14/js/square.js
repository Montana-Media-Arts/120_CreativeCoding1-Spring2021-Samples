class Square
{

    constructor(x,y,size,r,g,b)
    {
        this.x = x;
        this.y = y;
        this.size = size;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    display()
    {
        fill(this.r, this.g, this.b);
        square(this.x, this.y, this.size);
    }
}