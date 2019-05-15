using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class TaskType
    {
        public TaskType()
        {
            TaskTypeToProfessional = new HashSet<TaskTypeToProfessional>();
        }

        public int TaskTypeId { get; set; }
        public string TaskTypeName { get; set; }

        public virtual ICollection<TaskTypeToProfessional> TaskTypeToProfessional { get; set; }
    }
}
