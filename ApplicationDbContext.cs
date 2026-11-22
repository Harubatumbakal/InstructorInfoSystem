
using Microsoft.EntityFrameworkCore;
using InstructorInformationSystemm.Models;

namespace InstructorInformationSystemm.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(
            DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Instructor> Instructors { get; set; }

        public DbSet<UserAccount> UserAccounts { get; set; }
    }
}
