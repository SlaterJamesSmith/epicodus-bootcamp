# EPICODUS - 03 - User Interface - Week 5

**Team Week | Crate Digger | June 18, 2018**

**Collaborators**

Front-End

- Mike Chu
- William Chu

Back-End

- Matt Dowdney
- Matt Miller (Team Lead)


## Description

An application that allows users to create, read, update, and delete records in a personal collection database.

## Setup/Installation Requirements

### I. IDE Install & Plugins (Using IntelliJ IDEA with JDK 8)

1. Download and install [IntelliJ IDEA](https://www.jetbrains.com/idea/) by JetBrains.

2. Start IntelliJ and open **Preferences**.

3. Navigate to **Plugins** and select **Browse Repositories**.

4. Search for **Handlebars/Mustache**, install it and restart IntelliJ.

### II. Project Setup

1. Clone repository.

2. From IntelliJ IDEA, open project folder `05-team-week`.

3. In *Import Project from Gradle* window, select:

    - Use auto-import
    - Create directories for empty content roots automatically
    - Create separate module per source set
    - Use gradle 'wrapper' task configuration

4. After project loads, open *Terminal* tab and run `psql < create.sql`.

    - This should create a local database for the project.

### III. View Project

1. In *Project* tab, navigate to `src/main/java` and run **App**.

2. Navigate to `localhost:4567` in web browser.

## Known Bugs

- Cannot remove artists from a release.
- Cannot add secondary artist to release when database contains single artist.

## Technologies Used

- CSS
- Java
- PostgreSQL
- Spark
- Handlebars
- Sketch

## User Stories

| Status | Feature |
| :-: | --- |
| Done | Add a record to my collection. |
| Done | Add a record to my wishlist. |
| Done | See all records in my collection. |
| Done | See all records in my wishlist. |
| Done | See individual record details. |
| Done | Add an artist to the database. |
| Done | See all artists with records in my collection. |
| Done | See individual artist details. |
| Done | See all records in my collection/wishlist by a specific artist. |
| Done | Add a note to a record. |
| Done | See all notes for a record. |
| Done | Add a track to a record. |
| Done | See all tracks for a record. |
| Done | Add an additional artist to a record. |
| Done | Edit an artist's details. |
| Done | Edit a record's details. |
| Done | Move a record from my wishlist to my collection. |
| Done | Delete a note that is no longer relevant. |
| Done | Delete tracks from a record. |
| Done | Delete a record. |
| Done | Delete an artist only if they have no associated records. |
|  | Delete an artist from a record. |
