JobCare Employer Portal - Mentor Context

PROJECT IDENTITY

Project Name: JobCare Employer PortalDeveloper: UshaMentor: ChatGPTCurrent Step: MC-9Project Status: Authentication frontend complete/polished; rapid MVP integration phase startingPlanned Launch Target: 15 August 2026

IMPORTANT:This file is the SINGLE SOURCE OF TRUTH for continuing the project in a new chat.A new mentor/chat must read this file and continue from the current step without restarting completed work.

TEAM ARCHITECTURE

Candidate App:

Built by teammates.

Employer Website:

Built by Usha with Mentor guidance.

Backend:

Django REST Framework (DRF).

Authentication:

JWT.

Database:

PostgreSQL.

API:

REST APIs are provided by teammates.

As of 12 August 2026, backend API contracts were requested from teammates and are expected to be shared today.

Do NOT invent endpoints, request fields, response fields, or token behavior.

Use the actual API contract supplied by teammates.

GitHub repository:https://github.com/ushausha935326-wq/JobCare-Employer-Portal.git

Branch:master

DEVELOPMENT RULES

Give only ONE coding task at a time.

Keep explanations beginner-friendly.

Mention the exact file name.

Mention exactly where to edit/paste code.

Wait until Usha confirms the task is done before moving to the next task.

Build production-quality code where time allows.

Employer Website only.

Never modify backend code.

Explain WHY important changes are made.

Reuse components whenever possible.

Do not repeatedly redesign completed screens.

Use the team's reference screenshots only as inspiration; do not copy them exactly.

Preserve the current professional JobCare design unless there is a concrete reason to change it.

Temporary frontend simulations are allowed only until the real API is received.

Never expose internal development notes to employers/users on the website.

Employer-facing success/error text must sound like a finished product.

Because launch is targeted for 15 August 2026, prioritize a working MVP and integration over low-value visual polishing.

CURRENT LAUNCH SITUATION

Today:12 August 2026

Target launch:15 August 2026

Time available:Approximately two days of active implementation before the launch target.

Reality check:

A fully production-complete Employer Portal with every possible feature, comprehensive security hardening, analytics, billing, messaging, extensive testing, and all edge cases is NOT realistically guaranteed in two days.

A focused, working MVP/demo release with the critical employer flows can be achievable IF teammates provide stable APIs today and we aggressively prioritize the launch-critical features.

The immediate goal is a usable launchable MVP, not perfection.

Priority philosophy:

Authentication must work with the real API.

Employer Dashboard must load real data.

Core Job Management must work.

Core Candidate/Application management must work.

Basic profile/navigation must work.

Remaining advanced modules can be simplified, stubbed with clear UI, or deferred if the launch scope permits.

Do not spend hours polishing already-complete Login UI while core functionality is missing.

COMPLETED PROJECT FOUNDATION

✅ Python installed✅ Node.js installed✅ Git installed✅ React + Vite project created✅ React Router installed✅ Professional project structure created✅ Local development server verified✅ GitHub repository connected✅ Initial Git commits completed✅ Employer Website ownership established

Known Git commits:

8aeb39b - Day 1: Project setup completed

40a54c1 - MC-3: Build professional authentication login UI

7112f91 - MC-4: Completed authentication routing and signup foundation

CURRENT FOLDER STRUCTURE

frontend/└── src/├── assets/│   └── images/│       ├── jobcare-logo.png│       └── jobcare-logo-transparent.png│├── components/│   ├── Navbar.jsx│   ├── Sidebar.jsx│   └── BrandSection.jsx│├── pages/│   └── Auth/│       ├── Login.jsx│       ├── Login.css│       ├── Signup.jsx│       └── ForgotPassword.jsx│├── routes/│   └── AppRoutes.jsx│├── App.jsx└── main.jsx

AUTHENTICATION STATUS

LOGIN

Status:COMPLETE FRONTEND BASELINE

Completed:✅ Professional two-column layout✅ JobCare branding✅ Reusable BrandSection✅ Temporary transparent logo✅ Premium logo showcase✅ Email controlled input✅ Lowercase email normalization✅ Email format validation✅ Password controlled input✅ Strong password validation✅ Live password checklist✅ Uppercase requirement✅ Lowercase requirement✅ Number requirement✅ Special-character requirement✅ Minimum 8 characters✅ Show/Hide password✅ react-icons eye / eye-slash✅ Eye icon inside password field✅ Field-specific errors✅ Loading state✅ Disabled login button while loading✅ Remember Me React state✅ Forgot Password navigation✅ Signup navigation✅ Responsive CSS✅ Final UI polish

Important:The current Login success behavior is temporary.It currently simulates login with a loading delay and alert.This MUST be replaced by the real Django JWT login API.

SIGNUP

Status:FRONTEND COMPLETE / API PENDING

Current fields:

Company Name

HR Name

Email Address

Create Password

Completed:✅ Controlled form state✅ Required field validation✅ Email format validation✅ Lowercase email normalization✅ Strong password requirements✅ Live password checklist✅ Eye / eye-slash password toggle✅ Field-specific errors✅ Loading state✅ Create Account button✅ Success message✅ Login link✅ Responsive styling✅ Shared JobCare design

Important:The current account creation behavior is temporary frontend simulation.It does NOT create a real backend account yet.

Correct employer-facing success text:"Account Created Successfully!"and similar professional wording.

DO NOT show internal messages such as:"Backend registration will be connected once the API is available."

FORGOT PASSWORD

Status:FRONTEND COMPLETE / API PENDING

Completed:✅ BrandSection✅ Premium logo✅ Professional card✅ Email field✅ Email label✅ Email normalization✅ Email validation✅ Error state✅ Loading state✅ "Sending..." state✅ Success state✅ "Send Reset Link" styled button✅ "Back to Login" link✅ Responsive styling

Important:Current success behavior is temporary.No real reset email is sent until the backend API is integrated.

CURRENT AUTHENTICATION FILES

Important files:

frontend/src/pages/Auth/Login.jsx

frontend/src/pages/Auth/Login.css

frontend/src/pages/Auth/Signup.jsx

frontend/src/pages/Auth/ForgotPassword.jsx

frontend/src/components/BrandSection.jsx

frontend/src/routes/AppRoutes.jsx

The shared Login.css is intentionally used by multiple authentication screens.Do not create duplicate conflicting CSS files unless there is a clear architectural reason.

DESIGN DECISION

The team supplied sample/reference screenshots for:

Employer Login

OTP verification

Employer Dashboard

Sidebar

Dashboard cards

Recent Activity

Decision:

These screenshots are REFERENCE ONLY.

Our Employer Portal should keep its own professional design.

Use the reference to improve spacing, hierarchy, navigation patterns, and color ideas when useful.

Do not replace our Login/Signup/Forgot Password design merely to imitate the reference.

Current design baseline:

Light neutral background

White premium cards

JobCare navy primary buttons

Blue hover states

Dark professional text

Premium JobCare logo showcase

Responsive layout

TEMPORARY LOGO

Current temporary logo:frontend/src/assets/images/jobcare-logo-transparent.png

It was processed from the temporary JobCare logo supplied by the team.The white background was removed.A premium card/shadow presentation was added through CSS.

The final official team logo has not yet been confirmed.When the official logo arrives:

Replace the image asset.

Keep the same layout/classes where possible.

BACKEND API STATUS - CRITICAL

On 12 August 2026, teammates requested the list of APIs required for the Employer Website.

Requested categories:

Authentication

Employer Profile

Dashboard

Job Management

Applications/Candidates

Interviews

Notifications

Documents/verification where applicable

At minimum, ask teammates for:

Base API URL

Login API

Signup API

Refresh token API

Forgot/Reset Password API

Profile API

Dashboard API

Job APIs

Application/Candidate APIs

Interview APIs where in scope

For EACH API, require:

HTTP method

Endpoint

Authentication/JWT requirement

Request JSON

Required fields

Optional fields

Example response JSON

Error responses

HTTP status codes

Query parameters

Pagination format if applicable

Also request:

Swagger/OpenAPI documentation if available

Postman collection if available

Do not start API integration from guesses.Wait for the real teammate-provided contract.

LAUNCH-CRITICAL FUNCTIONALITY

The likely minimum launchable employer MVP should prioritize:

Priority 1 - MUST WORK

Login

Signup

Forgot Password if backend supports it

JWT/token handling

Protected routes

Employer Dashboard

Logout

Basic Employer Profile

Priority 2 - CORE EMPLOYER VALUE

Create Job

View My Jobs

View Job Details

Edit Job

Close/Delete Job if supported

View Applications

View Candidate Details

Shortlist/Reject candidates

Priority 3 - IMPORTANT IF API/TIME ALLOWS

Interview scheduling

Dashboard analytics

Notifications

Document upload/verification

Priority 4 - DEFER IF NECESSARY

Billing

Credits & Usage

Advanced reporting

Advanced messaging

Very detailed analytics

Low-priority polish

These priorities should be adjusted to the actual project requirements and the APIs teammates provide.

NEXT TWO-DAY EXECUTION PLAN

DAY 1 - API INTEGRATION + CORE FLOW

First:

Receive teammate API documentation.

Understand Base URL.

Verify Login request/response.

Set up API service layer.

Install/use Axios only if the project already uses or needs it.

Connect Login to real Django JWT API.

Store token according to backend contract.

Protect authenticated routes.

Implement Logout.

Connect Signup to real API.

Connect Forgot Password if API exists.

Connect Employer Profile.

Start Dashboard API.

Do not spend significant time redesigning Login.

DAY 2 - EMPLOYER CORE FEATURES + LAUNCH

Priority:

Finish Dashboard with real data.

Job list.

Create Job.

Job details/edit/close as supported.

Applications/candidate list.

Candidate detail/shortlist/reject as supported.

Basic navigation/sidebar.

Error/loading/empty states.

Responsive smoke test.

End-to-end testing of critical flows.

Fix blocking bugs.

Git commit/push.

Deploy.

Final launch smoke test.

If time runs out:

Keep the navigation/UI present.

Defer non-critical data-heavy sections.

Clearly mark incomplete sections only if the team agrees.

Never pretend an unavailable backend function is working.

API INTEGRATION APPROACH

When teammates provide the APIs:

Read their exact API contract.

Map each endpoint to an existing frontend page/component.

Create a clean API/service structure.

Centralize base URL.

Centralize JWT handling.

Handle loading states.

Handle success.

Handle API validation errors.

Handle unauthorized/expired token.

Protect routes.

Test each flow before moving on.

Do not rebuild working components unnecessarily.

FRONTEND QUALITY RULES DURING THE DEADLINE

Because time is limited:

DO:

Reuse components.

Reuse styles.

Reuse validation patterns.

Build only launch-critical screens first.

Make real API integration the priority once APIs arrive.

Keep clean readable code.

DO NOT:

Repeatedly redesign Login.

Create multiple competing CSS systems.

Invent backend behavior.

Create fake APIs.

Add unnecessary libraries.

Build advanced features before the critical employer flow works.

GIT / GITHUB WORKFLOW

Repository:https://github.com/ushausha935326-wq/JobCare-Employer-Portal.git

Branch:master

At the end of every session:

git statusgit add .git commit -m "<clear milestone message>"git push origin master

Only report GitHub as updated after Usha confirms that the push succeeded.

Current session work to save:

Forgot Password final styling/behavior

Signup final styling/validation

Login CSS baseline preserved

Temporary JobCare logo presentation preserved

Mentor context updated for launch phase

Suggested commit message:"MC-9: Complete authentication UI and frontend validation"

NEW-CHAT HANDOFF INSTRUCTIONS

If this chat reaches a limit or a new chat is needed:

Attach this MENTOR_CONTEXT.md.

Say:"Mentor, continue from MC-9. APIs are [received/not received]."

If APIs were received, attach/paste the API documentation too.

The new mentor must read this file first.

Do NOT restart Login/Signup/Forgot Password.

Continue from the recorded current step.

If any detail is uncertain:

Ask Usha to share the relevant file/API contract.

Do not guess.

CURRENT STEP

MC-9

Meaning:Authentication frontend is complete and the project is entering rapid MVP/API integration phase.

Current immediate next action:

Receive the actual backend API documentation from teammates.

Review/map the APIs.

Start real authentication integration.

Then build Dashboard and core Job Management.

WHAT HAS BEEN LEARNED

Usha is learning while building.Important concepts already practiced:

React components

React Router

Reusable components

useState

Controlled inputs

Conditional rendering

Form validation

Password strength validation

Loading states

Disabled buttons

React Icons

Responsive CSS

Git/GitHub workflow

Debugging React form state

Maintaining a mentor handoff file

Continue teaching in beginner-friendly language.Do not assume Usha already knows advanced React concepts.

FINAL MENTOR RULE

The goal is not to make Usha memorize code.The goal is to help her understand enough of each feature to maintain and explain the Employer Website after the project is launched.

The immediate goal is a REAL, DEMOABLE, LAUNCH-READY MVP by 15 August 2026, not an imaginary promise of full production completeness in two days.

If the full scope cannot fit within the deadline, prioritize the core employer journey and explicitly distinguish:

completed,

integrated,

simulated,

deferred.