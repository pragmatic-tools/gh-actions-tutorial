# GitHub Actions

## I. What is GitHub Actions?

GitHub actions is a complete CI/CD solution (although the CD implementation could still use a bit of work). We’ll be focusing more on the CI (continuous integration) portion for this lesson.

GitHub actions can be summarized as follows:

1. Developer defines a configuration (workflow YAML file) that is specific to GitHub Actions.

2. Within the configuration YAML file, there is an event listener that can be defined for executing an action, which is another name for a script or program. A developer submitting a pull request is an example of an event.

3. The action (script or program) runs on a hosted virtual machine which is either self-hosted or on GitHub’s cloud.

4. GitHub actions will then report back the results through the web browser interface.

![Figure 1](/docs/figure1.png "Figure 1")

## II. What’s the benefit of this over Bamboo?

One of the greatest benefits from GitHub actions is their native implementation of using YAML files for configuring the workflow pipeline. Bamboo has something similar, but it’s software was not originally designed around this concept. Having configurations defined in YAML is beneficial as we can version control the pipeline. Another benefit is everything lives in one ecosystem, so our configuration pipeline lives next to our actual code within the GitHub repository.

## III. Ok cool, so how do I start getting value from this tool?

The best way to figure out what GitHub actions can do for your team is to go through some examples. Today, we’ll be creating two GitHub actions which will (1) run unit tests and report them back on each push event (e.g. commit to a pull request) (2) run a validator that will check for an arbitrarily team defined convention for pull request titles.

__Pre-requisites__
* Quicknote: All of these were tested on macOS, so there’s no guarantee it will work for Windows OS.

1. Have a GitHub account
2. Have node installed on your computer https://nodejs.org/en/download/
    - This could also be installed using HomeBrew
        - To install HomeBrew, visit https://docs.brew.sh/Installation
        - Run `brew install node`
4. Clone the repository https://github.com/pragmatic-tools/gh-actions-tutorial.git into your local workspace. 

__HTTPS__
```bash
git clone https://github.com/pragmatic-tools/gh-actions-tutorial.git
```
__SSH__
```bash
git clone git@github.com:pragmatic-tools/gh-actions-tutorial.git
```

5. Create a new branch and switch to it

```bash
git checkout -b gh-actions-lesson-<your-initials>
```

6. Navigate into the directory gh-actions-tutorial and be sure you’re in the directory where you can see the file package.json.

7. Run npm install. If everything goes well, you will find a **node_modules** folder created. This contains all of your application dependencies.

__Action Plan__

After getting all our environment setup, let’s explore what this code base is. The bulk of the application is contained in the file app.js which has one endpoint that will show ‘Hello Dexcom!’ when you navigate to it from the browser.

1. Run the following command
```bash
npm start
```

You’ll see something like the following
```bash
> github-actions-lesson@1.0.0 start
> node server.js

Listening on port 5000 
```

This will indicate that a webserver has been started and you can now visit the website on a browser at http://localhost:5000. Once you visit, you should see some text that says ‘Hello Dexcom!’. *Note*: If port 5000 does not work, you can change the port in the server.js file.

2. Stop the server by either pressing Ctrl + C or closing the terminal.

3. Run the following command
```bash
npm test
```

You should get something like the following
```bash
  GET /
    1) displays "Hello World!"


  0 passing (19ms)
  1 failing

  1) GET /
       displays "Hello World!":
     Error: expected 'Hello World!' response body, got 'Hello Dexcom!'
```

We will fix this unit test later, but for now, let’s leave it as is.

4. Now that we know our app runs and we know how to run tests, let’s make a GitHub action that will run our unit tests for us each time we create and push a new commit. If you go to the directory `./.github/workflows` within the repository, you should see a file named `unit_tests.yml`. This is where we’ll configure our action.

![Figure 2](/docs/figure2.png "Figure 2")

At this point, I recommend reading the documentation on how this file is structured. You may refer to any of the following links

1. [Reference 1](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#overview) - This will give you a very in-depth understanding of the components used within GitHub actions. I recommend skipping to the section here https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#create-an-example-workflow to see an example of how to create the GitHub action and refer back to the rest of the documentation as needed.

2. [Reference 2](https://docs.github.com/en/actions/quickstart) - This will give you just enough information on how to run a GitHub action. 

    Remember, the goal here is to do the following:
    “As a developer, I want GitHub Actions to run a unit test (npm test) everytime I push a new commit to a pull request”

    As a tip to get you started, ask yourself these questions
    1. How does GitHub actions get my code?
    2. What operating system does GitHub actions run on? Can I specify it?
    3. How does GitHub action know when to run my action? Can I specify the type of event? **Hint**: [Read more here](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)
    4. How do I install node and npm on GitHub actions? **Hint**: what did you do to tell GitHub actions to pull your code in step 1? Is there something similar I can do for installing node and npm? 
    5. How do I get GitHub actions to run npm install and npm test?


    **Hint**: Try this [link](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#understanding-the-workflow-file) to read up on the various components that compose the GitHub action YAML file.

3. After you complete the YAML file, it’s time to commit the change and submit a pull request!

```bash
git add .
git commit -m “my first github action”
git push --set-upstream origin <your branch name>
```

You should see something like the following at 
https://github.com/pragmatic-tools/gh-actions-tutorial

![Figure 3](/docs/figure3.png "Figure 3")

Create the pull request by pressing the “Compare & pull request” button. If everything goes well, we should see something like the following where our unit test ran but failed. We can click on the “Details” tab to see why it failed.

