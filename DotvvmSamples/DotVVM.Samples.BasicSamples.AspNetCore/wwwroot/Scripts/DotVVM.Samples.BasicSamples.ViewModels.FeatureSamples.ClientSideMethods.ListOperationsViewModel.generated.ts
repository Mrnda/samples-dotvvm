class ListOperationsViewModel {
	public NamesList: KnockoutObservableArray<string>;
	public Index: KnockoutObservable<number>;
	public Add()
		{
this.NamesList.push(ko.observable('test' + this.Index()));
		this.Index(this.Index() + 1);
		}
	public RemoveTest()
		{
this.Remove('test');
		}
	public Remove(name : string)
		{
this.NamesList.remove(function (item) { var rawItem = ko.unwrap(item); return rawItem == name;});
		}
	public Clear()
		{
this.NamesList.removeAll();
		}
	public Iterate()
		{
		for(let i = 0;i < this.NamesList().length;i++)			{
			let name = this.NamesList()[i]();
			if ( !(name.indexOf('iterated') !== -1))
				this.NamesList()[i](name + ' iterated';
			}
;
		}
	public PrintNames()
		{
		this.NamesList().forEach(function($name) {var name = ko.unwrap($name);
		{
console.log(name);;
		}
);
		}
	 constructor()
		{
		this.NamesList = ko.observableArray();
		this.Index = ko.observable();
		}
}
