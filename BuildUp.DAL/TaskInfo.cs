using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class TaskInfo
    {
        public TaskInfo()
        {
            StageInfoToTaskType = new HashSet<StageInfoToTaskType>();
        }

        public int TaskInfoId { get; set; }
        public string TaskInfoDescription { get; set; }
        public int TaskTypeId { get; set; }
        public int WorkerId { get; set; }
        public int TaskStatusId { get; set; }

        public virtual TaskStatus TaskStatus { get; set; }
        public virtual TaskType TaskType { get; set; }
        public virtual Worker Worker { get; set; }
        public virtual ICollection<StageInfoToTaskType> StageInfoToTaskType { get; set; }
    }
}
