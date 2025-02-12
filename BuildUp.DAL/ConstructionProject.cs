﻿using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class ConstructionProject
    {
        public ConstructionProject()
        {
            ManagerUserToConstructionProject = new HashSet<ManagerUserToConstructionProject>();
            ManagerUserToWorker = new HashSet<ManagerUserToWorker>();
            StageInfo = new HashSet<StageInfo>();
        }

        public int ConstructionProjectId { get; set; }
        public string ConstructionProjectName { get; set; }

        public virtual ICollection<ManagerUserToConstructionProject> ManagerUserToConstructionProject { get; set; }
        public virtual ICollection<ManagerUserToWorker> ManagerUserToWorker { get; set; }
        public virtual ICollection<StageInfo> StageInfo { get; set; }
    }
}
