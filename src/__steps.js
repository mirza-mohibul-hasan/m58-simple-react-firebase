/* 
1.visit: console.firebase.google.com
2. create project (skip google Analytics)
3. Register app (create config)
4. Install firebase
5. add config file to your projects
6. Don't push firebase config to public github
7. Go to Docs> Build> Authentication> Web> Get Startted
8. expost app from firebase.config.js file
9.  Login.jsx: import getauth from firebase/auth
10. Create const auth = getAuth(app)
11. Import googleAuthProvider and do const provider =  new GoogleAuthProvider();
12. Import SignInWithPopup
13.signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })
*/