using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class StageInfo
    {
        public StageInfo()
        {
            StageInfoToTaskType = new HashSet<StageInfoToTaskType>();
        }

        public int StageInfoId { get; set; }
        public string StageInfoDescription { get; set; }
        public int ConstructionProjectId { get; set; }

        public virtual ConstructionProject ConstructionProject { get; set; }
        public virtual ICollection<StageInfoToTaskType> StageInfoToTaskType { get; set; }
    }
}
