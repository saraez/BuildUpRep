using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class TaskTypeToProfessional
    {
        public int TaskTypeToProfessionalId { get; set; }
        public int TaskTypeId { get; set; }
        public int ProfessionalId { get; set; }

        public virtual Professional Professional { get; set; }
        public virtual TaskType TaskType { get; set; }
    }
}
