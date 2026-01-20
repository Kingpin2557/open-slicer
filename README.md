# Open Slicer

A small open-source 3D print slicer project aimed at beginners and also friendly for people coming from Blender and CAD tools. Simple, approachable design now — intended to grow into an easy-to-use slicer with straightforward import from common modelling tools and clear presets for new users.

What this will become
- A beginner-friendly slicer with an easy UI and sensible defaults.
- Smooth import/workflow for Blender and common CAD exports (STL/OBJ).
- Extensible codebase so contributors can add advanced options later.

Getting started as a developer
1. Clone the repo:
   - git clone <repo-url>
   - cd <repo-directory>
2. Open the project in your editor of choice.
3. Install dependencies (choose the command that matches the repo files):
   - If Python: python -m venv .venv && .venv/bin/pip install -r requirements.txt
   - If Node.js: npm install
4. Run the project in development mode:
   - Check scripts in package.json or any run scripts (e.g. npm run dev, make dev, or ./run_dev.sh)
   - Or run the main app file for Python projects (see project README for exact command).
5. Run tests if present:
   - pytest or npm test
6. Contribute:
   - Create a branch, add changes, open a pull request and reference any related issue.
