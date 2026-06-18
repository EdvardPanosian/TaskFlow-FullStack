using System.ComponentModel.DataAnnotations;

namespace MyApp.DTOs
{
    public class CreateToDoDto
    {
        [Required]
        [MaxLength(50)]
        public string Title { get; set; } = string.Empty;
    }
}
