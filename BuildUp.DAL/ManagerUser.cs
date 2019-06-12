using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class ManagerUser
    {
        public ManagerUser()
        {
            ManagerUserToConstructionProject = new HashSet<ManagerUserToConstructionProject>();
            ManagerUserToWorker = new HashSet<ManagerUserToWorker>();
        }

        public int ManagerUserId { get; set; }
        public string ManagerUserName { get; set; }

        public virtual ICollection<ManagerUserToConstructionProject> ManagerUserToConstructionProject { get; set; }
        public virtual ICollection<ManagerUserToWorker> ManagerUserToWorker { get; set; }
    }
}
