class MathematicalOperationsViewModel {
	public Left: KnockoutObservable<number>;
	public Right: KnockoutObservable<number>;
	public Result: KnockoutObservable<number>;
	public Sum()
		{
		let result = this.Left() + this.Right();
		this.Result(Math.floor(result));
		}
	public Divide()
		{
		if (this.Right() == 0)
			return;
		this.Result(Math.floor(this.Left() / this.Right()));
		}
	public Fibonacci()
		{
		let a = 0;
		let b = 1;
		for(let i = 0;i < this.Right();i++)			{
			let temp = a;
			a = Math.floor(b);
			b = Math.floor(temp + b);
			}
;
		this.Result(Math.floor(a));
		}
	 constructor()
		{
		this.Left = ko.observable();
		this.Right = ko.observable();
		this.Result = ko.observable();
		}
}
