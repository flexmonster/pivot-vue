# Flexmonster Pivot Table & Charts integration with Vue 2 and Vue 3
[![Flexmonster Pivot Table & Charts](https://cdn.flexmonster.com/landing.png)](http://flexmonster.com/?r=gh_vue)
Website: [www.flexmonster.com](https://www.flexmonster.com/?r=gh_vue)

## Flexmonster Pivot Table & Charts

Flexmonster Pivot is a powerful JavaScript tool for interactive web reporting. It allows you to visualize and analyze data from JSON, CSV, SQL, NoSQL, Elasticsearch, and OLAP data sources quickly and conveniently. Flexmonster is designed to integrate seamlessly with any client-side framework and can be easily embedded into your application.

This repository holds the source code for several [Vue](https://vuejs.org/) and Flexmonster Pivot Table & Charts projects.

Table of contents:

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Prerequisites

To run a simple application with the Vue pivot table, you will need Node.js and npm. [Get them here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if they're not already installed on your machine.

## Installation

1. Download a `.zip` archive with the sample project or clone it from GitHub with the following command:

```bash
git clone https://github.com/flexmonster/pivot-vue.git && cd pivot-vue
```

2. Choose one of the following projects:

    - To work with the **Vue 3** application, go to the `vue3/ES6` folder:

    ```bash
    cd vue3/ES6
    ```
     or to the `vue3/typescript` folder:
    
    ```bash
    cd vue3/typescript
    ```

    - To see how the **Vue 2** application works, run the following command:

    ```bash
    cd vue2/ES6
    ```
    or 
    
    ```bash
    cd vue2/typescript
    ```

3. Install the npm packages described in `package.json`:

```bash
npm install
```

4. Run the sample project:

```bash
npm start 
```

To see the result, open `http://localhost:5173/` in your browser.

## Usage

For details on usage in Vue 3, refer to [Flexmonster integration with Vue 3](https://www.flexmonster.com/doc/integration-with-vue-3/?r=gh_vue).

To integrate Flexmonster into a Vue 2 project, see [integration with Vue 2](https://www.flexmonster.com/doc/integration-with-vue-2/?r=gh_vue).
