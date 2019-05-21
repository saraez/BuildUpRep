using BuildUp.DAL.Interface;
using System;

namespace BuildUp.BL
{
    public class TaskManager : ITaskManager
    {
        private readonly ITaskAccessor _TaskAccessor;

        public TaskManager(ITaskAccessor taskAccessor)
        {
            _TaskAccessor = taskAccessor;
        }
        public void Test()
        {
            _TaskAccessor.Test();
        }
    }
}
