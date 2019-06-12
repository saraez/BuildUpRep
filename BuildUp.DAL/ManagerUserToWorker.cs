using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class ManagerUserToWorker
    {
        public int ManagerUserToWorkerId { get; set; }
        public int ManagerUserId { get; set; }
        public int WorkerId { get; set; }
        public int ConstructionProjectId { get; set; }

        public virtual ConstructionProject ConstructionProject { get; set; }
        public virtual ManagerUser ManagerUser { get; set; }
        public virtual Worker Worker { get; set; }
    }
}
