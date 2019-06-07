using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class StageTemplate
    {
        public StageTemplate()
        {
            StageTemplateToTaskType = new HashSet<StageTemplateToTaskType>();
        }

        public int StageTemplateId { get; set; }
        public string StageTemplateName { get; set; }

        public virtual ICollection<StageTemplateToTaskType> StageTemplateToTaskType { get; set; }
    }
}
