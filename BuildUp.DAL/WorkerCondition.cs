using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class WorkerCondition
    {
        public WorkerCondition()
        {
            WorkerConditionToWorker = new HashSet<WorkerConditionToWorker>();
        }

        public int WorkerConditionId { get; set; }
        public string WorkerConditionName { get; set; }

        public virtual ICollection<WorkerConditionToWorker> WorkerConditionToWorker { get; set; }
    }
}
