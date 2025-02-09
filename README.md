# Next.js 15 - getServerSideProps Session Access Error

This repository demonstrates a common error in Next.js 15 applications when using `getServerSideProps` to access session data before the session has been properly established.  The problem occurs when a user attempts to navigate directly to a page that requires authentication without first going through a login flow. This example showcases the error and the solution.

## Error Description

The `About` page uses `getServerSideProps` to check if the user is logged in.  If not, it redirects to the login page. However, if the user directly accesses `/about` without proper authentication, an error occurs because `getServerSideProps` tries to access session data too early in the request lifecycle.

## Solution

The solution involves carefully checking for the session within `getServerSideProps` and implementing a redirect to the login page if no session exists. This ensures a seamless user experience and prevents errors caused by premature session access.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Directly access `/about` in your browser. You should see an error.
5. Navigate to `/` and then click the link to `/about`.  The redirect should work correctly.

## Technologies Used

* Next.js 15
* JavaScript