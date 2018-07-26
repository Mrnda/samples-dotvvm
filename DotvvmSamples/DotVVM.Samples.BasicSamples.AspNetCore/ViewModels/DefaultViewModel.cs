using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using DotVVM.Framework.ViewModel;
using DotVVM.Framework.Hosting;
using DotVVM.Samples.BasicSamples.ViewModels.FeatureSamples.ClientSideMethods;

namespace DotVVM.Samples.BasicSamples.AspNetCore.ViewModels
{
    public class DefaultViewModel : MasterpageViewModel
    {
		public string Title { get; set;}

		public DefaultViewModel()
		{
			Title = "Hello from DotVVM!";
		}
    }
}
