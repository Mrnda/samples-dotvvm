class ObjectOperationsViewModel {
	public Person: KnockoutObservable<PersonDto>;
	public Name: KnockoutObservable<string>;
	public Age: KnockoutObservable<number>;
	public Persons: KnockoutObservableArray<PersonDto>;
	public UpdatePersonsAge()
		{
		this.Person().Age(Math.floor(1));
		}
	public CreateNewPerson()
		{
		this.Person(new PersonDto('Karel',27));
		}
	public AddPerson(name : string,age : number)
		{
this.Persons.push(ko.observable(new PersonDto(this.Name(),this.Age())));
		}
	public RemovePerson(dto : PersonDto)
		{
this.Persons.remove(function (item) { var rawItem = ko.unwrap(item); return rawItem == dto;});
		}
	 constructor()
		{
		this.Person = ko.observable();
		this.Name = ko.observable();
		this.Age = ko.observable();
		this.Persons = ko.observableArray();
		}
}
