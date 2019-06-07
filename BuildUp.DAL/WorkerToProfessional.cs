using System;
using System.Collections.Generic;

namespace BuildUp.DAL
{
    public partial class WorkerToProfessional
    {
        public int WorkerToProfessionalId { get; set; }
        public int WorkerId { get; set; }
        public int ProfessionalId { get; set; }
        public sbyte? IsMainProfessional { get; set; }

        public virtual Professional Professional { get; set; }
        public virtual Worker Worker { get; set; }
    }
}
