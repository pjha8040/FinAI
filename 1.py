import os
import subprocess

def run_command(command, cwd=None):
    """Runs a shell command in the given directory and prints the output."""
    result = subprocess.run(command, shell=True, cwd=cwd, text=True, capture_output=True)
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
    else:
        print(result.stdout)

def create_folder_structure(base_path, folders):
    """Creates multiple subdirectories inside a base directory."""
    for folder in folders:
        os.makedirs(os.path.join(base_path, folder), exist_ok=True)

def setup_project(project_name):
    """Creates a full-stack project structure and installs dependencies."""
    
    # Create main project folder
    if not os.path.exists(project_name):
        os.mkdir(project_name)

    # Define frontend and backend paths
    frontend_path = os.path.join(project_name, "frontend")
    backend_path = os.path.join(project_name, "backend")

    # Create frontend and backend folders
    os.mkdir(frontend_path)
    os.mkdir(backend_path)

    # Backend: Create necessary subfolders
    backend_folders = ["db", "models", "routes", "controllers", "middleware"]
    create_folder_structure(backend_path, backend_folders)

    print("Initializing backend...")
    run_command("npm init -y", cwd=backend_path)
    run_command("npm install express mongoose dotenv cors bcrypt jsonwebtoken axios nodemon", cwd=backend_path)

    # # Frontend: Create necessary subfolders
    # frontend_folders = ["src/components", "src/store"]
    # create_folder_structure(frontend_path, frontend_folders)

    print("Initializing frontend...")
    run_command("npm create vite@latest . -- --template react", cwd=frontend_path)
    run_command("npm install @mui/material @emotion/react @emotion/styled", cwd=frontend_path)
    run_command("npm install -D tailwindcss postcss autoprefixer", cwd=frontend_path)
    run_command("npm install recoil", cwd=frontend_path)
    run_command("npx tailwindcss init -p", cwd=frontend_path)

    # Configure Tailwind CSS
    tailwind_config = os.path.join(frontend_path, "tailwind.config.js")
    with open(tailwind_config, "w") as f:
        f.write("""module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};""")

    # Update index.css with Tailwind directives
    styles_path = os.path.join(frontend_path, "src", "index.css")
    with open(styles_path, "r") as f:
        styles = f.read()

    with open(styles_path, "w") as f:
        f.write("@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n" + styles)

    print("Full-stack project setup completed successfully!")

if __name__ == "__main__":
    project_name = input("Enter your project name: ")
    setup_project(project_name)
