using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using BuildUp.DAL.Accessor;
using BuildUp.DAL.Interface;

namespace BuildUp.BL
{
    public static class ConfigurationManager
    {
        public static void ConfigureBLServices(IServiceCollection services)
        {
            services.AddTransient<ITaskAccessor, TaskAccessor>();
            BuildUp.DAL.ConfigurationManager.ConfigureDALServices(services);

        }
    }
}
