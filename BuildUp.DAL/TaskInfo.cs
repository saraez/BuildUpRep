using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class TaskInfo
    {
        public int TaskInfoId { get; set; }
        public int TaskTypeId { get; set; }
        public int WorkerId { get; set; }
        public int StatusId { get; set; }
    }
}
