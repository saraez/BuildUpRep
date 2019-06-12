using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class Worker
    {
        public Worker()
        {
            ManagerUserToWorker = new HashSet<ManagerUserToWorker>();
            TaskInfo = new HashSet<TaskInfo>();
            WorkerConditionToWorker = new HashSet<WorkerConditionToWorker>();
            WorkerToProfessional = new HashSet<WorkerToProfessional>();
        }

        public int WorkerId { get; set; }
        public string WorkerName { get; set; }
        public string Nickname { get; set; }
        public string IdentificationId { get; set; }
        public string PhoneNumber { get; set; }

        public virtual ICollection<ManagerUserToWorker> ManagerUserToWorker { get; set; }
        public virtual ICollection<TaskInfo> TaskInfo { get; set; }
        public virtual ICollection<WorkerConditionToWorker> WorkerConditionToWorker { get; set; }
        public virtual ICollection<WorkerToProfessional> WorkerToProfessional { get; set; }
    }
}
