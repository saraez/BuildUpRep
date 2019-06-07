using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class StageTemplateToTaskType
    {
        public int StageTemplateToTaskTypeId { get; set; }
        public int StageTemplateId { get; set; }
        public int TaskTypeId { get; set; }
        public int Order { get; set; }

        public virtual StageTemplate StageTemplate { get; set; }
        public virtual TaskType TaskType { get; set; }
    }
}
