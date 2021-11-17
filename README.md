# Flexmonster Pivot Table & Charts integration with Vue 2 and Vue 3
[![Flexmonster Pivot Table & Charts](https://cdn.flexmonster.com/landing.png)](http://flexmonster.com/?r=rm_vue)
Website: [www.flexmonster.com](https://www.flexmonster.com/?r=rm_vue)

## Flexmonster Pivot Table & Charts

Flexmonster Pivot is a powerful JavaScript tool for interactive web reporting. It allows you to visualize and analyze data from JSON, CSV, SQL, NoSQL, Elasticsearch, and OLAP data sources quickly and conveniently. Flexmonster is designed to integrate seamlessly with any client-side framework and can be easily embedded into your application.

This repository holds the source code for several [Vue](https://reactjs.org/) and Flexmonster Pivot Table & Charts projects:

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Prerequisites

To run a simple application with the Vue pivot table, you will need Node.js and npm. [Get them here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if they're not already installed on your machine.

## Installation

1. Download the `.zip` archive with the sample project or clone it from GitHub with the following command:

```bash
git clone https://github.com/flexmonster/pivot-vue.git && cd pivot-vue
```

2. Choose one of the following projects:

    - To work with the **Vue 2** application, go to the `vue2/ES6` folder:

    ```bash
    cd vue2/ES6
    ```
     or to the `vue2/typescript` folder:
    
    ```bash
    cd vue2/typescript
    ```

    - To see how the **Vue 3** application works, run the following command:

    ```bash
    cd vue3/ES6
    ```
    or 
    
    ```bash
    cd vue3/typescript
    ```

3. Install the npm packages described in `package.json`:

```bash
npm install
```

4. Run the sample project:

```bash
npm start 
```

To see the result, open `http://localhost:8080/` in your browser.

## Usage

For details on usage, refer to the [Flexmonster integration with Vue 2](https://www.flexmonster.com/doc/integration-with-vue-2/?r=rm_vue) tutorial.

To integrate Flexmonster into a Vue 3 project, see [integration with Vue 2](https://www.flexmonster.com/doc/integration-with-vue-3/?r=rm_vue).
