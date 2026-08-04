# JobCare Employer Portal - Mentor Context

## Project Information

Project Name: JobCare Employer Portal

Developer: Usha

Mentor: ChatGPT

Current Step: MC-2

Project Status: In Development

---

## Team Architecture

Candidate App:
Built by teammates

Employer Website:
Built by Usha

Backend:
Django REST Framework

Authentication:
JWT

Database:
PostgreSQL

API:
REST APIs provided by teammates

---

## Development Rules

1. Give only ONE task at a time.
2. Keep responses short.
3. Wait until Usha completes the task.
4. Never skip steps.
5. Build production-quality code.
6. Employer Website only.
7. Do not modify backend.

---

## Current Progress

✅ Python Installed

✅ Node.js Installed

✅ Git Installed

✅ React (Vite) Project Created

✅ First Git Commit Completed

✅ Project Structure Created

Current Module:

Project Foundation

Next Module:

Authentication (Login Page)

---

## Session End Rule

Before ending every coding session:

1. Mentor updates MENTOR_CONTEXT.md.
2. Record:
   - Current Step
   - Files Created
   - Files Modified
   - Technical Decisions
   - Next Step
3. Commit the changes to Git.
4. Start the next session using the updated MENTOR_CONTEXT.md.

This file is the single source of truth for the project.
Never rely on chat history alone.

---

## End of Session Workflow

Before ending every coding session, the Mentor must provide:

### 1. MENTOR_CONTEXT.md Update
- Update Current Step
- Update Progress
- Record Technical Decisions
- Record Files Created
- Record Files Modified
- Record Next Step

### 2. Git Commit
Provide the exact Git commands to save the day's work.

Example:

git add .
git commit -m "Day X: <Completed Work>"

### 3. New Chat Continuation

If a new chat is required:

1. Attach MENTOR_CONTEXT.md.
2. Type:

Mentor, continue from the Current Step.

The Mentor must continue from the recorded step without restarting the project.

---

## Mentor Responsibilities

The Mentor is responsible for:

- Maintaining MENTOR_CONTEXT.md
- Preventing contradictory instructions
- Giving only ONE task at a time
- Keeping responses short and clear
- Explaining concepts before writing code
- Building production-quality code
- Guiding the project until deployment

Decision 001

UI Rule:

The Employer Website must follow the team-approved template.

Do not redesign the UI without team approval.

Only make improvements that preserve the approved design language.

## Progress Update

### Current Step
MC-65

### Completed Today

#### Local Development
- Installed Node.js successfully.
- Resolved PowerShell execution policy issue.
- Started the Vite development server using:
  ```bash
  npm run dev
  ```
- Verified local development server at:
  ```
  http://localhost:5173
  ```

#### Lovable
- Finalized the Employer Login UI template.
- Decided to keep the existing teammate-approved login design.
- Added frontend-only validation without connecting backend APIs.
- Downloaded the generated `index.tsx` from Lovable for inspection.

#### GitHub Integration
- Connected Lovable with GitHub successfully.
- Authorized the GitHub account.
- Authorized the repository:
  `JobCare-Employer-Portal`
- Verified GitHub connection is active.
- Returned to the Lovable project after successful authorization.

### Current Status
- Local frontend environment is working.
- Lovable project is connected to GitHub.
- Employer Login UI is finalized.
- Backend integration has NOT started.
- Project linking from Lovable to the GitHub repository is the next task.

### Next Step
MC-65:
Link the Lovable project to the `JobCare-Employer-Portal` GitHub repository from inside the project (Share → GitHub/Connect Repository), then continue with frontend development and API integration.
git add .
git commit -m "Setup local environment and connect Lovable with GitHub"

# JobCare Employer Portal - Mentor Context

## Project Information

Project Name: JobCare Employer Portal

Developer: Usha

Mentor: ChatGPT

Current Step: MC-3.32 Completed

Project Status: Authentication UI In Progress

---

## Team Architecture

Candidate App:
Built by teammates

Employer Website:
Built by Usha

Backend:
Django REST Framework (DRF)

Authentication:
JWT (JSON Web Tokens)

Database:
PostgreSQL

API:
REST APIs will be provided by teammates

---

## Development Rules

1. Give only ONE task at a time.
2. Keep explanations beginner-friendly.
3. Mention the exact file name.
4. Mention exactly where to paste or edit code.
5. Wait until Usha completes the task.
6. Build production-quality code.
7. Employer Website only.
8. Never modify backend.
9. Explain WHY each code change is needed.

---

## Folder Structure

frontend/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   │   └── Auth/
│   │       ├── Login.jsx
│   │       ├── Login.css
│   │       ├── Signup.jsx
│   │       └── ForgotPassword.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── App.jsx
│   └── main.jsx

---

## Completed

✅ React + Vite Project

✅ Project Structure

✅ React Router Installed

✅ Routing Working

✅ Authentication Folder Created

✅ Login Page Created

✅ Login.css Connected

✅ Login Card

✅ Professional Two-Column Layout

✅ Branding Section

✅ Email Field

✅ Password Field

✅ Remember Me Checkbox

✅ Login Button Styling

✅ Button Hover Effect

✅ Forgot Password Link

✅ Sign Up Link

✅ Card Shadow

✅ CSS Flexbox Layout

✅ Removed <br /> based spacing

✅ Professional File Structure

---

## Login Page Status

Completed approximately 90%.

Remaining:

⬜ Temporary JobCare Logo

⬜ Show / Hide Password (Eye Icon)

⬜ Responsive Mobile Design

⬜ Final UI Polish

⬜ Navigation to Signup

⬜ Navigation to Forgot Password

⬜ Form Validation

⬜ JWT API Integration

---

## Git Status

Today's work is saved locally.

GitHub push postponed until next session.

---

## Next Session (MC-4)

Authentication Module

1. Final Login UI Polish

2. Temporary JobCare Logo

3. Show/Hide Password

4. Signup Page

5. Forgot Password Page

6. React Navigation

7. Django JWT Login Integration

---

## Mentor Notes

- Teach as if Usha is learning React for the first time.
- Give one task at a time.
- Never ask Usha to replace large files without explanation.
- Always mention the exact file and exact place to edit.
- Explain what each CSS rule and React code does.
- Build portfolio-quality code suitable for a startup product.
- Aim for a modern corporate UI that will be reused across all 17 modules.
