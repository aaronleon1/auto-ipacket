# STARtUp

View the latest startups with STAR potential. View, vet, and decide on who you believe can make it to the next level.

## Dependencies

- Sass
- React Router DOM

## Future Releases

- Would have liked to further develop filtering functionality. My current system would need some retooling, but I wanted to make sure the main filter worked.

## Known Issues

- Startup card ideas do not persist from home to liked page. This for that API does not seem to support a number of results parameter, and hitting the API on the page itself would have caused too many renders if done once per card. Decision was made to put the API request inside the Card to ensure each one was different.

- Filter system is missing time and cost range. Ran into a number of issues with getting all parameters to work with eachother. Surely it can get done, would just need a block of focused time beyond the current constraints of the project.

## Available Scripts

In the project directory, you can run:

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
