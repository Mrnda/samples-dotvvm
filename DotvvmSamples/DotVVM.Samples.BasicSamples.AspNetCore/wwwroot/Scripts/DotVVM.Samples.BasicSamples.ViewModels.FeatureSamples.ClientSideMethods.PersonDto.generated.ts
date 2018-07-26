class PersonDto {
	public Name: KnockoutObservable<string>;
	public Age: KnockoutObservable<number>;
	public constructor(name : string,age : number)
		{
		this.Name = ko.observable();
		this.Age = ko.observable();
		this.Name(name);
		this.Age(Math.floor(age));
		}
}
