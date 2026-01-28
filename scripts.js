tasks = []

def show_menu():
    print("
=== Simple To-Do List ===")
    print("1. Add task")
    print("2. View tasks")
    print("3. Mark task done")
    print("4. Delete task")
    print("5. Quit")

def add_task():
    task = input("Enter task: ")
    tasks.append({"task": task, "done": False})
    print("Task added!")

def view_tasks():
    if not tasks:
        print("No tasks yet!")
        return
    for i, t in enumerate(tasks, 1):
        status = "✓" if t["done"] else "○"
        print(f"{i}. {status} {t['task']}")

def mark_done():
    view_tasks()
    if tasks:
        try:
            num = int(input("Task number to mark done: ")) - 1
            if 0 <= num < len(tasks):
                tasks[num]["done"] = True
                print("Marked as done!")
            else:
                print("Invalid number.")
        except ValueError:
            print("Enter a number.")

def delete_task():
    view_tasks()
    if tasks:
        try:
            num = int(input("Task number to delete: ")) - 1
            if 0 <= num < len(tasks):
                del tasks[num]
                print("Task deleted!")
            else:
                print("Invalid number.")
        except ValueError:
            print("Enter a number.")

while True:
    show_menu()
    choice = input("Choose (1-5): ")
    if choice == "1":
        add_task()
    elif choice == "2":
        view_tasks()
    elif choice == "3":
        mark_done()
    elif choice == "4":
        delete_task()
    elif choice == "5":
        print("Goodbye!")
        break
    else:
        print("Invalid choice.")