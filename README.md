## intro:

This program is a Sentiment Analyser that analyzes texts and detects their polarity, subjectivity, irony and emotional agreement.

It is part of a training for the front end developer program thatr I'm currently doing with [Udacity](https://www.udacity.com/)

The goal of this project is to get practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls


# Project Instructions Getting started

1) you need to install all the dependencies that are already configured in the package.json.
for that use your terminal in the a new folder and run:

- `npm install`

2) Play around with the app to see all the fonctionality:

 To launch the app you will need to type on your terminal :
- `npm run start`
and go to your browser and type:  `localhost:8081

3) If you want to modify the code in your text editor, don't forget to save and then in your terminal you will need to recreate the dist folder (it is the one your browser displays). To do that you will need to type in your terminal :
- `npm run build-prod`
and then:
- `npm run start`

# How to use the app:

1) You need enter a text ot url of an article you found on the net.
If You don't write somethinmg and press submit , a window will pop up to warn you.

2) Press Submit when data .

3) The program will check you text or URL and will tell you what is the sentiment of your article in the
result section. If your enter an url, it can take few seconds to analize and give you a result.


### info on API key:
THe API key is set up in a env. file  that is then marked in the gitignore.
To create the env file , I used `dotenv`, see decription below:

`dotenv allows you to separate secrets from your source code. This is useful in a collaborative environment (e.g., work, or open source) where you may not want to share your database login credentials with other people. Instead, you can share the source code while allowing other people to create their own . env file.`


### Info on the API calls
The API call in this project is a post request to the MeaningCloud API (free).The request is made directly  in the server.js instead of client side index.js because it is not acceptable for an api key to be set in a client facing file (like index.js)


### Info about jest
All the function are separated in client.js and each one have a test associated.

### Info Data check:
URl is checked and in case there's a mistake, a window will pop up to let you know.
Same if the API meaningCloud deosn't manage to analize your input or if you forget enter one before clicking on the submit button.
