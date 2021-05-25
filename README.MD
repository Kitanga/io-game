# How to make a .io game

## What is a .io game

These are really popular, (usually) single input, multiplayer games. e.g. agar.io, slither.io, etc.

## What tech can we use to make them

Well, so long as you can create a system where players can move around a screen and see other players then you are good.

I use web tech for games, so that's what I'm sticking to.

## Wait, so you making the game now?!!

Yes.

I'll split it up into different parts, but at the end of this series you should be able to test your game on your PC and we can even deploy it to heroku for testing.

But this all depends on the traffic to the videos and if I see that people watching are actually trying to implement (Link to Video Here).

## Tech Stack

Now, our stack we'll be simple, we'll use common tech used to make games quickly, so that it's easier for you to find info if you get stuck.

- First up is PhaserJS. I've used this quite a bit before, so I'll stick with it for this game as well (I'll be using version 3 btw)
- Next will be Express JS, we'll use this to serve our code on our nodeJS server (I think I just lost some viewers, but hey, life)
- We'll pair that with socket.io so that we have realtime communication with the server, also socket.io has what the creators call rooms, something that will be extremely useful for us when the game has too many players.

For now at least, those will be the three pillars that we'll build the game on top of. And no, we won't be using webpack/snowpack and the like. No transpilers :'( either, I know, I want to use TypeScript as well, but what this to be as accessible as is possible. Also the concept will be simple, so no audio, that's for your to figure out (hint: HowlerJS).

## Let's make this game

### Step 1: Setup environment.

We'll be needing 2 folders: a `/public` folder (for the website that clients see) and a `/server` (for all things to do with the server).

Inside of the `/public` folder we'll need 3 files: an `index.html`, `main.js`, and `styles.css` file.

As for the `/server` folder we'll be adding a simple `server.js` file that will hold our server code that we'll borrow from the express.js site.

Now we'll be using `npm` and `node` in this project (obviously). So a quick `npm init -y` to setup the project is in order, no?
Follow that up with a `npm i express` so that we can use express for serving our files.

After that dependency has installed, we'll have to now write our `server.js` code to server content in our `index.html` file. But before we do that, let's add a simple `Hello World` message in our `index.html` file. This way we can see something when the page loads.

Check the `server/server.js` code to see how exactly the code should look like.

You are now ready to test this code. Open your terminal and run `node server/server.js`. This should show a message telling you what port your site is being served on.

Open `localhost:3000` in your browser and you should see `Hello World` printed onto the screen.

TODO: Step 2 We'll setup the game, with the player on screen and able to move around as well.