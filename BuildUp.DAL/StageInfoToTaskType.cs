using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class StageInfoToTaskType
    {
        public int StageInfoToTaskTypeId { get; set; }
        public int StageInfoId { get; set; }
        public int TaskInfoId { get; set; }
        public int Order { get; set; }

        public virtual StageInfo StageInfo { get; set; }
        public virtual TaskInfo TaskInfo { get; set; }
    }
}
