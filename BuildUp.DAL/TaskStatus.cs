using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class TaskStatus
    {
        public TaskStatus()
        {
            TaskInfo = new HashSet<TaskInfo>();
        }

        public int TaskStatusId { get; set; }
        public string TaskStatusName { get; set; }

        public virtual ICollection<TaskInfo> TaskInfo { get; set; }
    }
}
