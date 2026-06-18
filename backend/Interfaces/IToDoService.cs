using MyApp.DTOs;

namespace MyApp.Interfaces
{
    public interface IToDoService
    {
        Task<List<ToDoDto>> GetAllAsync();
        Task<ToDoDto?> GetByIdAsync(int id);
        Task<ToDoDto> CreateAsync(CreateToDoDto dto);
        Task<ToDoDto?> MarkDoneAsync(int id);
        Task<bool> DeleteAsync(int id);
    }
}
