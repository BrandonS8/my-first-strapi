# Creating my first Strapi.io site

### Installing

They have a pretty simple guide to install Strapi right here: [https://strapi.io/getting-started](https://strapi.io/getting-started). I suggest following that for installing, it's very easy and I already had everything I needed, just Node JS and MongoDB.

You just install strapi globally `npm install strapi@alpha -g` then use `strapi new <name>` to create your project. I named mine myFirstStrapi because it is in fact my first Strapi. I chose MongoDB for the database and used the default values, just spam enter like you do for `npm init` when you forget the `-y`.

**Pro Tip:** By default MongoDB doesn't use a username and password. The user/pass when using `strapi new projectName` is the access to MongoDB not for the project. Don't set these fields if you haven't set one for mongo as it will cause an authentication error.

### Starting Up

When you first launch the app you create the initial login, then it takes you to the interface. **It was love at first site (sight).** What a beautiful interface, I have spent so much time in Wordpress and it's ugly UI that this just put a smile on my face. I love this UI.

![UI on the getting started page](./readme-images/first-start-ui.png)

The first page you see has a link to a getting started guide on their documentation. Pretty standard. Left side bar is how you navigate to each section just like wordpress.

A very very very nice UI.

### Things I Noticed First

There is a lot of easy to use controls for the environment. You have three defined environments in settings, Development, Production, Staging. You can easily control individual settings for these in the configurations tab.

<p float="left" align='middle'>
<img src="./readme-images/request-settings.png" alt='UI for requests i the config' width="350" height="auto"/>

<img src="./readme-images/security-settings.png" alt='UI for settings in the config' width="374" height="auto" />
</p>

Everything is super clean and simple. Wanna add a new content type? Use the builder and do it in no time. Managing users, roles, permissions, files, everything is just so intuitive and simple. I am very impressed.

![UI on the content type builder page](./readme-images/content-types.png)
