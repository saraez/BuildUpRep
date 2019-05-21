using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuildUp.DAL
{
    public static class ConfigurationManager
    {
        public static void ConfigureDALServices(IServiceCollection services)
        {
            services.AddTransient<taskContext, taskContext>();
        }
    }
}
