using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class WorkerConditionToWorker
    {
        public int WorkerConditionToWorkerId { get; set; }
        public int? WorkerConditionId { get; set; }
        public int? WorkerId { get; set; }

        public virtual Worker Worker { get; set; }
        public virtual WorkerCondition WorkerCondition { get; set; }
    }
}
