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
        public virtual DbSet<ManagerUser> ManagerUser { get; set; }
        public virtual DbSet<ManagerUserToConstructionProject> ManagerUserToConstructionProject { get; set; }
        public virtual DbSet<ManagerUserToWorker> ManagerUserToWorker { get; set; }
        public virtual DbSet<Professional> Professional { get; set; }
        public virtual DbSet<StageInfo> StageInfo { get; set; }
        public virtual DbSet<StageInfoToTaskType> StageInfoToTaskType { get; set; }
        public virtual DbSet<StageTemplate> StageTemplate { get; set; }
        public virtual DbSet<StageTemplateToTaskType> StageTemplateToTaskType { get; set; }
        public virtual DbSet<TaskInfo> TaskInfo { get; set; }
        public virtual DbSet<TaskStatus> TaskStatus { get; set; }
        public virtual DbSet<TaskType> TaskType { get; set; }
        public virtual DbSet<TaskTypeToProfessional> TaskTypeToProfessional { get; set; }
        public virtual DbSet<Worker> Worker { get; set; }
        public virtual DbSet<WorkerCondition> WorkerCondition { get; set; }
        public virtual DbSet<WorkerConditionToWorker> WorkerConditionToWorker { get; set; }
        public virtual DbSet<WorkerToProfessional> WorkerToProfessional { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySql("server=buildupdb.ciibyhqzli7d.us-east-2.rds.amazonaws.com;port=3306;uid=BuildUp;pwd=sarae888!;connect timeout=200;MinimumPoolSize=20;maximumpoolsize=500;SslMode=None;database=task");
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

            modelBuilder.Entity<ManagerUser>(entity =>
            {
                entity.Property(e => e.ManagerUserId).HasColumnType("int(11)");

                entity.Property(e => e.ManagerUserName).HasColumnType("varchar(400)");
            });

            modelBuilder.Entity<ManagerUserToConstructionProject>(entity =>
            {
                entity.HasIndex(e => e.ConstructionProjectId)
                    .HasName("ManagerUserToConstructionProject_ConstructionProject_idx");

                entity.HasIndex(e => e.ManagerUserId)
                    .HasName("ManagerUserToConstructionProject_ManagerUser_idx");

                entity.Property(e => e.ManagerUserToConstructionProjectId).HasColumnType("int(11)");

                entity.Property(e => e.ConstructionProjectId).HasColumnType("int(11)");

                entity.Property(e => e.ManagerUserId).HasColumnType("int(11)");

                entity.HasOne(d => d.ConstructionProject)
                    .WithMany(p => p.ManagerUserToConstructionProject)
                    .HasForeignKey(d => d.ConstructionProjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ManagerUserToConstructionProject_ConstructionProject");

                entity.HasOne(d => d.ManagerUser)
                    .WithMany(p => p.ManagerUserToConstructionProject)
                    .HasForeignKey(d => d.ManagerUserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ManagerUserToConstructionProject_ManagerUser");
            });

            modelBuilder.Entity<ManagerUserToWorker>(entity =>
            {
                entity.HasIndex(e => e.ConstructionProjectId)
                    .HasName("ManagerUserToWorker_ConstructionProject_idx");

                entity.HasIndex(e => e.ManagerUserId)
                    .HasName("ManagerUserToWorker_ManagerUserToWorker_idx");

                entity.HasIndex(e => e.WorkerId)
                    .HasName("ManagerUserToWorker_Worker_idx");

                entity.Property(e => e.ManagerUserToWorkerId).HasColumnType("int(11)");

                entity.Property(e => e.ConstructionProjectId).HasColumnType("int(11)");

                entity.Property(e => e.ManagerUserId).HasColumnType("int(11)");

                entity.Property(e => e.WorkerId).HasColumnType("int(11)");

                entity.HasOne(d => d.ConstructionProject)
                    .WithMany(p => p.ManagerUserToWorker)
                    .HasForeignKey(d => d.ConstructionProjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ManagerUserToWorker_ConstructionProject");

                entity.HasOne(d => d.ManagerUser)
                    .WithMany(p => p.ManagerUserToWorker)
                    .HasForeignKey(d => d.ManagerUserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ManagerUserToWorker_ManagerUser");

                entity.HasOne(d => d.Worker)
                    .WithMany(p => p.ManagerUserToWorker)
                    .HasForeignKey(d => d.WorkerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ManagerUserToWorker_Worker");
            });

            modelBuilder.Entity<Professional>(entity =>
            {
                entity.Property(e => e.ProfessionalId).HasColumnType("int(11)");

                entity.Property(e => e.ProfessionalName)
                    .IsRequired()
                    .HasColumnType("varchar(200)");
            });

            modelBuilder.Entity<StageInfo>(entity =>
            {
                entity.HasIndex(e => e.ConstructionProjectId)
                    .HasName("StageInfo_ConstructionProject_idx");

                entity.Property(e => e.StageInfoId).HasColumnType("int(11)");

                entity.Property(e => e.ConstructionProjectId).HasColumnType("int(11)");

                entity.Property(e => e.StageInfoDescription)
                    .IsRequired()
                    .HasColumnType("varchar(400)");

                entity.HasOne(d => d.ConstructionProject)
                    .WithMany(p => p.StageInfo)
                    .HasForeignKey(d => d.ConstructionProjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("StageInfo_ConstructionProject");
            });

            modelBuilder.Entity<StageInfoToTaskType>(entity =>
            {
                entity.HasIndex(e => e.StageInfoId)
                    .HasName("StageInfoToTaskType_StageInfo_idx");

                entity.HasIndex(e => e.TaskInfoId)
                    .HasName("StageInfoToTaskType_TaskInfo_idx");

                entity.Property(e => e.StageInfoToTaskTypeId).HasColumnType("int(11)");

                entity.Property(e => e.Order).HasColumnType("int(11)");

                entity.Property(e => e.StageInfoId).HasColumnType("int(11)");

                entity.Property(e => e.TaskInfoId).HasColumnType("int(11)");

                entity.HasOne(d => d.StageInfo)
                    .WithMany(p => p.StageInfoToTaskType)
                    .HasForeignKey(d => d.StageInfoId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("StageInfoToTaskType_StageInfo");

                entity.HasOne(d => d.TaskInfo)
                    .WithMany(p => p.StageInfoToTaskType)
                    .HasForeignKey(d => d.TaskInfoId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("StageInfoToTaskType_TaskInfo");
            });

            modelBuilder.Entity<StageTemplate>(entity =>
            {
                entity.Property(e => e.StageTemplateId).HasColumnType("int(11)");

                entity.Property(e => e.StageTemplateName)
                    .IsRequired()
                    .HasColumnType("varchar(500)");
            });

            modelBuilder.Entity<StageTemplateToTaskType>(entity =>
            {
                entity.HasIndex(e => e.StageTemplateId)
                    .HasName("StageTemplateToTaskType_StageTemplate_idx");

                entity.HasIndex(e => e.TaskTypeId)
                    .HasName("StageTemplateToTaskType_TaskType_idx");

                entity.Property(e => e.StageTemplateToTaskTypeId).HasColumnType("int(11)");

                entity.Property(e => e.Order).HasColumnType("int(11)");

                entity.Property(e => e.StageTemplateId).HasColumnType("int(11)");

                entity.Property(e => e.TaskTypeId).HasColumnType("int(11)");

                entity.HasOne(d => d.StageTemplate)
                    .WithMany(p => p.StageTemplateToTaskType)
                    .HasForeignKey(d => d.StageTemplateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("StageTemplateToTaskType_StageTemplate");

                entity.HasOne(d => d.TaskType)
                    .WithMany(p => p.StageTemplateToTaskType)
                    .HasForeignKey(d => d.TaskTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("StageTemplateToTaskType_TaskType");
            });

            modelBuilder.Entity<TaskInfo>(entity =>
            {
                entity.HasIndex(e => e.TaskStatusId)
                    .HasName("TaskInfo_TaskStatus_idx");

                entity.HasIndex(e => e.TaskTypeId)
                    .HasName("TaskInfo_TaskType_idx");

                entity.HasIndex(e => e.WorkerId)
                    .HasName("TaskInfo_Worker_idx");

                entity.Property(e => e.TaskInfoId).HasColumnType("int(11)");

                entity.Property(e => e.TaskInfoDescription).HasColumnType("varchar(1000)");

                entity.Property(e => e.TaskStatusId).HasColumnType("int(11)");

                entity.Property(e => e.TaskTypeId).HasColumnType("int(11)");

                entity.Property(e => e.WorkerId).HasColumnType("int(11)");

                entity.HasOne(d => d.TaskStatus)
                    .WithMany(p => p.TaskInfo)
                    .HasForeignKey(d => d.TaskStatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("TaskInfo_TaskStatus");

                entity.HasOne(d => d.TaskType)
                    .WithMany(p => p.TaskInfo)
                    .HasForeignKey(d => d.TaskTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("TaskInfo_TaskType");

                entity.HasOne(d => d.Worker)
                    .WithMany(p => p.TaskInfo)
                    .HasForeignKey(d => d.WorkerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("TaskInfo_Worker");
            });

            modelBuilder.Entity<TaskStatus>(entity =>
            {
                entity.Property(e => e.TaskStatusId).HasColumnType("int(11)");

                entity.Property(e => e.TaskStatusName)
                    .IsRequired()
                    .HasColumnType("varchar(200)");
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
                    .HasName("TaskTypeToProfessional_Professional_idx");

                entity.HasIndex(e => e.TaskTypeId)
                    .HasName("TaskTypeToProfessional_TaskType_idx");

                entity.Property(e => e.TaskTypeToProfessionalId).HasColumnType("int(11)");

                entity.Property(e => e.ProfessionalId).HasColumnType("int(11)");

                entity.Property(e => e.TaskTypeId).HasColumnType("int(11)");

                entity.HasOne(d => d.Professional)
                    .WithMany(p => p.TaskTypeToProfessional)
                    .HasForeignKey(d => d.ProfessionalId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("TaskTypeToProfessional_Professional");

                entity.HasOne(d => d.TaskType)
                    .WithMany(p => p.TaskTypeToProfessional)
                    .HasForeignKey(d => d.TaskTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("TaskTypeToProfessional_TaskType");
            });

            modelBuilder.Entity<Worker>(entity =>
            {
                entity.HasIndex(e => e.WorkerId)
                    .HasName("WorkerId_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.WorkerId).HasColumnType("int(11)");

                entity.Property(e => e.IdentificationId)
                    .IsRequired()
                    .HasColumnName("IdentificationID")
                    .HasColumnType("varchar(45)");

                entity.Property(e => e.Nickname)
                    .IsRequired()
                    .HasColumnType("varchar(200)");

                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .HasColumnType("varchar(45)");

                entity.Property(e => e.WorkerName)
                    .IsRequired()
                    .HasColumnType("varchar(200)");
            });

            modelBuilder.Entity<WorkerCondition>(entity =>
            {
                entity.Property(e => e.WorkerConditionId)
                    .HasColumnName(" WorkerConditionId")
                    .HasColumnType("int(11)");

                entity.Property(e => e.WorkerConditionName)
                    .IsRequired()
                    .HasColumnName(" WorkerConditionName")
                    .HasColumnType("varchar(1000)");
            });

            modelBuilder.Entity<WorkerConditionToWorker>(entity =>
            {
                entity.HasIndex(e => e.WorkerConditionId)
                    .HasName("WorkerConditionToWorker_WorkerCondition_idx");

                entity.HasIndex(e => e.WorkerId)
                    .HasName("WorkerConditionToWorker_Worker_idx");

                entity.Property(e => e.WorkerConditionToWorkerId).HasColumnType("int(11)");

                entity.Property(e => e.WorkerConditionId).HasColumnType("int(11)");

                entity.Property(e => e.WorkerId).HasColumnType("int(11)");

                entity.HasOne(d => d.WorkerCondition)
                    .WithMany(p => p.WorkerConditionToWorker)
                    .HasForeignKey(d => d.WorkerConditionId)
                    .HasConstraintName("WorkerConditionToWorker_WorkerCondition");

                entity.HasOne(d => d.Worker)
                    .WithMany(p => p.WorkerConditionToWorker)
                    .HasForeignKey(d => d.WorkerId)
                    .HasConstraintName("WorkerConditionToWorker_Worker");
            });

            modelBuilder.Entity<WorkerToProfessional>(entity =>
            {
                entity.HasIndex(e => e.ProfessionalId)
                    .HasName("WorkerToProfessional_Professional_idx");

                entity.HasIndex(e => e.WorkerId)
                    .HasName("WorkerToProfessional_Worker_idx");

                entity.Property(e => e.WorkerToProfessionalId).HasColumnType("int(11)");

                entity.Property(e => e.IsMainProfessional).HasColumnType("tinyint(4)");

                entity.Property(e => e.ProfessionalId).HasColumnType("int(11)");

                entity.Property(e => e.WorkerId).HasColumnType("int(11)");

                entity.HasOne(d => d.Professional)
                    .WithMany(p => p.WorkerToProfessional)
                    .HasForeignKey(d => d.ProfessionalId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("WorkerToProfessional_Professional");

                entity.HasOne(d => d.Worker)
                    .WithMany(p => p.WorkerToProfessional)
                    .HasForeignKey(d => d.WorkerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("WorkerToProfessional_Worker");
            });
        }
    }
}
