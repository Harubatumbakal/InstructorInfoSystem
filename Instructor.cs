
using System.ComponentModel.DataAnnotations;

namespace InstructorInformationSystemm.Models
{
    public class Instructor
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Full Name is required.")]
        [StringLength(50, ErrorMessage = "Full Name cannot exceed 50 characters.")]
        [Display(Name = "Full Name")]
        public string FullName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Age is required.")]
        [Range(18, 100, ErrorMessage = "Age must be between 18 and 100.")]
        public int? Age { get; set; }

        [Required(ErrorMessage = "Address is required.")]
        [StringLength(200, ErrorMessage = "Address cannot exceed 200 characters.")]
        public string Address { get; set; } = string.Empty;

        [Required(ErrorMessage = "Designation is required.")]
        public string Designation { get; set; } = string.Empty;

        [Required(ErrorMessage = "Please select a gender.")]
        public string Gender { get; set; } = string.Empty;

        [Required(ErrorMessage = "Major is required.")]
        public string Major { get; set; } = string.Empty;

        [Required(ErrorMessage = "Bachelor Degree is required.")]
        [Display(Name = "Bachelor Degree")]
        public string BachelorDegree { get; set; } = string.Empty;

        [Required(ErrorMessage = "Email Address is required.")]
        [EmailAddress(ErrorMessage = "Please enter a valid email address.")]
        [Display(Name = "Email Address")]
        public string EmailAddress { get; set; } = string.Empty;

        [Required(ErrorMessage = "Contact Number is required.")]
        [Phone(ErrorMessage = "Please enter a valid contact number.")]
        [Display(Name = "Contact Number")]
        public string ContactNumber { get; set; } = string.Empty;
    }
}
