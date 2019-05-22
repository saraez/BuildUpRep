using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BuildUp.DAL
{
    public partial class taskContext : DbContext
    {
        public taskContext()
        {
        }

        public taskContext(DbContextOptions<taskContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ConstructionProject> ConstructionProject { get; set; }
        public virtual DbSet<Professional> Professional { get; set; }
        public virtual DbSet<TaskInfo> TaskInfo { get; set; }
        public virtual DbSet<TaskType> TaskType { get; set; }
        public virtual DbSet<TaskTypeToProfessional> TaskTypeToProfessional { get; set; }
        public virtual DbSet<Worker> Worker { get; set; }
        public virtual DbSet<WorkerToProfessional> WorkerToProfessional { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySql("server=buildupdb.ciibyhqzli7d.us-east-2.rds.amazonaws.com;port=3306;uid=BuildUp;pwd=sarae888!;connect timeout=700;MinimumPoolSize=20;maximumpoolsize=500;SslMode=None;database=task");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ConstructionProject>(entity =>
            {
                entity.Property(e => e.ConstructionProjectId).HasColumnType("int(11)");

                entity.Property(e => e.ConstructionProjectName)
                    .IsRequired()
                    .HasColumnType("varchar(500)");
            });

            modelBuilder.Entity<Professional>(entity =>
            {
                entity.Property(e => e.ProfessionalId).HasColumnType("int(11)");

                entity.Property(e => e.ProfessionalName)
                    .IsRequired()
                    .HasColumnType("varchar(200)");
            });

            modelBuilder.Entity<TaskInfo>(entity =>
            {
                entity.Property(e => e.TaskInfoId).HasColumnType("int(11)");

                entity.Property(e => e.StatusId).HasColumnType("int(11)");

                entity.Property(e => e.TaskTypeId).HasColumnType("int(11)");

                entity.Property(e => e.WorkerId).HasColumnType("int(11)");
            });

            modelBuilder.Entity<TaskType>(entity =>
            {
                entity.Property(e => e.TaskTypeId).HasColumnType("int(11)");

                entity.Property(e => e.TaskTypeName)
                    .IsRequired()
                    .HasColumnType("varchar(200)");
            });

            modelBuilder.Entity<TaskTypeToProfessional>(entity =>
            {
                entity.HasIndex(e => e.ProfessionalId)
                    .HasName("ProfessionalId_idx");

                entity.HasIndex(e => e.TaskTypeId)
                    .HasName("TaskTypeId_idx");

                entity.Property(e => e.TaskTypeToProfessionalId).HasColumnType("int(11)");

                entity.Property(e => e.ProfessionalId).HasColumnType("int(11)");

                entity.Property(e => e.TaskTypeId).HasColumnType("int(11)");

                entity.HasOne(d => d.Professional)
                    .WithMany(p => p.TaskTypeToProfessional)
                    .HasForeignKey(d => d.ProfessionalId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ProfessionalId");

                entity.HasOne(d => d.TaskType)
                    .WithMany(p => p.TaskTypeToProfessional)
                    .HasForeignKey(d => d.TaskTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("TaskTypeId");
            });

            modelBuilder.Entity<Worker>(entity =>
            {
                entity.HasIndex(e => e.WorkerId)
                    .HasName("WorkerId_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.WorkerId).HasColumnType("int(11)");

                entity.Property(e => e.WorkerName)
                    .IsRequired()
                    .HasColumnType("varchar(200)");
            });

            modelBuilder.Entity<WorkerToProfessional>(entity =>
            {
                entity.Property(e => e.WorkerToProfessionalId).HasColumnType("int(11)");

                entity.Property(e => e.IsMainProfessional).HasColumnType("tinyint(4)");

                entity.Property(e => e.ProfessionalId).HasColumnType("int(11)");

                entity.Property(e => e.WorkerId).HasColumnType("int(11)");
            });
        }
    }
}
