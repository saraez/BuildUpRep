using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BuildUp.DAL
{
    public partial class BuildUpDBContext : DbContext
    {
        public BuildUpDBContext()
        {
        }

        public BuildUpDBContext(DbContextOptions<BuildUpDBContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySql("server=buildupdb.ciibyhqzli7d.us-east-2.rds.amazonaws.com;port=3306;uid=BuildUp;pwd=sarae888!;connect timeout=200;MinimumPoolSize=20;maximumpoolsize=500;SslMode=None;database=BuildUpDB");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {}
    }
}
