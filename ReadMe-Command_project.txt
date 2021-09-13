*=== Feature: Student Management ====*
#     Page                       Description
1     Login                      Fake login page
2     Dashboard              Dashboard: statistics + top students
3     Search students       Allow to search, sort, filter and remove students
4     Add new student     Add new student
5     Edit a student          Update student info

*==LOGIN====
Fake login (click and store token into local storage)

*===ADMIN PAGE ==========
This page will have :
 - Header on top
 - Sidebar on the left
 - The main content on right(base on sub-routing)

*===DASHBOARD ===========
Statistics:
    - students by gender
    - top students
    - .....

*===SEARCH STUDNENTS=========

Need to support:
    - Search students by name
    - Filter students by city
    - Sort by name, score
    - Pagination

Fields on student table:
    - ID
    - Name
    - Gender: either Male or Female
    - Age
    - City: populate the name of the city
    - Mark
    - Aciton: Edit/Remove

A button to go to Add new student page 

*====ADD/EDIT STUDENT
Student Form:

- Name: 
        + Text input
        + Should have at least 2 words
        + Required

- Gender:
         + Radio options: Male , Female
         + Reauired

- Age:
         + Number input
         + Min is 18 , Max 60
         + Optional
- City:
         + Select(list loader from API)
         + Required
- Mark:
         + Number input
         + Optional
         + Min is 0 , Max is 10

*****=== PLAN===========********

-UI         : Material UI  : -> npm install @material-ui/core @material-ui/icons @material-ui/styles
- Routing: React Router DOM : -> npm i react-router-dom @types/react-router-dom
- Form    : React Hook Form v7
- Form validation:  Yup : npm install yup
- Http Client: axios : npm install axios

*==Routing=====

/login : Login page
/admin: Master layout for admin page

/admin/dashboard: Dashboard
/admin/students: Search students
/admin/students/add: Add new student
/admin/students/:studentId: Update student info

*===Form control========

- Input Field
- SelectField
- RadioGroupField

*======= LAYOUT UI ======= tsdrp
*page:
/login : 
/admin: layout

feature: /admin/dashboard
feature: /admin/students

auth
|_login
|_signup/register
|_forget password

import * as React from 'react';

export interface IAppProps {}

export function App(Props: IAppProps) {
  return (
    <div>
        Notfound ... Error 1440
    </div>
    );
}
*=============Auth============
auth
|_authSlice: nơi chứa định nghĩa các Actions và Reducers
|_authSaga: nơi chứa định nghĩa các Effects 

*=========Navigation -Redux Saga ======
Using: connected-react-router
-> npm install --save connected-react-router