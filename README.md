# React Router Dom v6 Nested Route Parameter Bug

This repository demonstrates a bug encountered when using nested routes with parameters in React Router Dom v6. The bug causes nested routes to not render correctly when a parent route uses a parameter.  The solution involves using the `useParams` hook correctly within the nested component and restructuring routes.

## Bug Description
The bug arises when a parent route contains a parameter and a child route attempts to match using a different parameter or a static route.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to `/users/123`.  You'll observe that the `User` component renders, but any attempt to use nested route within `/users/:id` will fail.

## Solution
The solution involves a correct usage of `useParams` hook and potentially restructuring your routes to avoid route parameter conflicts.