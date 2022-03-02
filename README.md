# Ephemera

This is an early build of a website for an ephemera collection by [Sam Baldwin](https://sambaldwin.info), built by [Piper Haywood](https://piperhaywood.com). Public URL coming soon.

I used this [Sanity blog tutorial](https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js) and the [Next.js blog example using Sanity](https://github.com/vercel/next.js/tree/canary/examples/cms-sanity) as the starting points for this project.

The `main` branch build is deployed once an hour via a GitHub Actions workflow that triggers a Vercel deploy hook.

## Available Scripts, `/web`

In the project directory `/web`, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Available scripts, `/studio`

In the Sanity Studio directory, you can run `sanity start` to get Sanity Studio up and running in your browser.
