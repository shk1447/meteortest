PSType = {
	Rect : function (left_, top_, right_, bottom_)
	{
		this.typeName = "Rect";
		this.left = 0;
		this.top = 0;
		this.right = 0;
		this.bottom = 0;
		
		if (left_) this.left = left_;
		if (top_) this.top = top_;
		if (right_) this.right = right_;
		if (bottom_) this.bottom = bottom_;
	},

	Color : function (color_, opacity_)
	{
		this.typeName = "Color";
		this.opacity = 1.0;
		this.color = '';
		
		if (color_) this.color = color_;
		if (opacity_) this.opacity = opacity_;
	},

	Point : function (x_, y_)
	{
		this.typeName = "Point";
		this.x = 0;
		this.y = 0;
		
		if (x_) this.x = x_;
		if (y_) this.y = y_;
	},
	
	ShapeType : function ()
	{
		this.typeName = "ShapeType";
        this.Rectangle = 0;
        this.VerticalPipe = 1;
        this.HorizontalPipe = 2;
        this.Image = 3;
	},
	
	TextAlignment : function ()
	{
		this.typeName = "TextAlignment";
		this.Left = 0;
		this.Right = 1;
		this.Center = 2;
		this.Justify = 3;
	},
	
	CapType : function ()
    {
		this.typeName = "CapType";
        this.None = 0;
        this.Arrow = 1;
    },
	
    JoinType : function ()
    {
		this.typeName = "JoinType";
		this.Miter = 0;
		this.Bevel = 1;
		this.Round = 2;
    },
	
    StrokeType : function ()
    {
		this.typeName = "StrokeType";
		this.FullLine = 1;
		this.CircleDottedLine = 2;
		this.SquareDottedLine = 3;
		this.BrokenLine = 4;
		this.OnePointChainLine = 5;
		this.LongBrokenLine = 6;
		this.LongOnePointChainLine = 7;
		this.TwoPointChainLine = 8;
    },
	
	PointArray : function ()
	{
		this.typeName = "PointArray";
		this.Points = [];
	}
}
