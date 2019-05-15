using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class Professional
    {
        public Professional()
        {
            TaskTypeToProfessional = new HashSet<TaskTypeToProfessional>();
        }

        public int ProfessionalId { get; set; }
        public string ProfessionalName { get; set; }

        public virtual ICollection<TaskTypeToProfessional> TaskTypeToProfessional { get; set; }
    }
}
