using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class TaskType
    {
        public TaskType()
        {
            StageTemplateToTaskType = new HashSet<StageTemplateToTaskType>();
            TaskInfo = new HashSet<TaskInfo>();
            TaskTypeToProfessional = new HashSet<TaskTypeToProfessional>();
        }

        public int TaskTypeId { get; set; }
        public string TaskTypeName { get; set; }

        public virtual ICollection<StageTemplateToTaskType> StageTemplateToTaskType { get; set; }
        public virtual ICollection<TaskInfo> TaskInfo { get; set; }
        public virtual ICollection<TaskTypeToProfessional> TaskTypeToProfessional { get; set; }
    }
}
