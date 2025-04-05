# Next + Fastify Project

This project is an API built with ``Fastify`` to manage registrations for an event, allowing candidates to sign up and refer others through a personalized link.</br>
Referrals are tracked and stored in ``Redis``, enabling the identification of those who brought in the most sign-ups.</br> 
Candidate information is persisted in a ``PostgreSQL`` database, using ``Drizzle`` as the ``ORM`` for data handling.</br> 
The entire API structure is documented with ``Swagger``, making it easy to understand and use the available routes.</br>
For the Front-End i used the ``Next`` Framework and ``Orval`` to generate the hooks that consume the API.

## 🔧 Main Technologies

- **Fastify** – API framework  
- **Redis** – Referral tracking and ranking  
- **PostgreSQL** – Database
- **Drizzle ORM** – ``ORM`` library 
- **Swagger** – API documentation
- **Next** - Graphical Interface
- **Orval** - Auto-generates typed API clients and React hooks from Swagger definitions

### Next Interface
<img src="https://github.com/user-attachments/assets/a4f4b19a-9d80-446b-9952-8919ad9fa534" alt="inscription_page" style="width:500px;"> </br>
<img src="https://github.com/user-attachments/assets/f13759f3-a3e2-4ee0-8435-438f51c7ba5f" alt="home_page" style="width:500px;"> </br>

### API Documentation
<img src="https://github.com/user-attachments/assets/64d31823-a798-4c4b-a24b-9180772ae547" alt="home_page" style="width:500px;">
