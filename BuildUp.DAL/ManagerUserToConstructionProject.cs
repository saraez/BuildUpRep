using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class ManagerUserToConstructionProject
    {
        public int ManagerUserToConstructionProjectId { get; set; }
        public int ManagerUserId { get; set; }
        public int ConstructionProjectId { get; set; }

        public virtual ConstructionProject ConstructionProject { get; set; }
        public virtual ManagerUser ManagerUser { get; set; }
    }
}
