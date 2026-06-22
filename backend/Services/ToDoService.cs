using Microsoft.EntityFrameworkCore;
using MyApp.Data;
using MyApp.DTOs;
using MyApp.Interfaces;
using MyApp.Models;

namespace MyApp.Services
{
    public class ToDoService : IToDoService
    {
        private readonly AppDbContext _context;
        public ToDoService(AppDbContext context) { _context = context; }

        public async Task<List<ToDoDto>> GetAllAsync()
        {
            return await _context.Tasks
                                    .Select(t => new ToDoDto
                                    {
                                        Id = t.Id,
                                        Title = t.Title,
                                        IsDone = t.IsDone
                                    }).ToListAsync();
        }

        public async Task<ToDoDto?> GetByIdAsync(int id)
        {
            var task = await _context.Tasks.FindAsync(id);

            if (task == null) return null;

            return new ToDoDto
            {
                Id = task.Id,
                Title = task.Title,
                IsDone = task.IsDone
            };
        }

        public async Task<ToDoDto> CreateAsync(CreateToDoDto dto)
        {
            var item = new ToDoItem
            {
                Title = dto.Title,
                IsDone = false
            };

            _context.Tasks.Add(item);
            await _context.SaveChangesAsync();

            return new ToDoDto
            {
                Id = item.Id,
                Title = item.Title,
                IsDone = item.IsDone
            };
        }

        public async Task<ToDoDto?> MarkDoneAsync(int id)
        {
            var task = await _context.Tasks.FindAsync(id);

            if (task == null)
                return null;

            task.IsDone = true;
            await _context.SaveChangesAsync();

            return new ToDoDto
            {
                Id = task.Id,
                Title = task.Title,
                IsDone = task.IsDone
            };
        }

        public async Task<ToDoDto?> UpdateAsync(int id, UpdateToDoDto dto)
        {
            var task = await _context.Tasks.FindAsync(id);

            if (task == null)
                return null;

            task.Title = dto.Title;

            await _context.SaveChangesAsync();

            return new ToDoDto
            {
                Id = task.Id,
                Title = task.Title,
                IsDone = task.IsDone
            };
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var task = await _context.Tasks.FindAsync(id);

            if (task == null) return false;

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();

            return true;
        }

    }
}
