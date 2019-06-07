using BuildUp.DAL.Interface;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuildUp.DAL.Accessor
{
    public class TaskAccessor : ITaskAccessor
    {
        private readonly taskContext _Context;
        public TaskAccessor(taskContext context)
        {
            _Context = context;
        }

        public void Test()
        {
            _Context.Worker.Add(new Worker() { WorkerName = "test name 5", IdentificationId = "3333", Nickname= "בדיקה", PhoneNumber="2222"});
            _Context.SaveChanges();
                }

    }
}
